import openai
import random
import json
import tweepy
import schedule
import time
from config import (
    OPENAI_API_KEY, 
    TWITTER_CLIENT_ID, 
    TWITTER_CLIENT_SECRET, 
    TWITTER_ACCESS_TOKEN, 
    TWITTER_ACCESS_TOKEN_SECRET,
    TWITTER_API_KEY,
    TWITTER_API_SECRET,
    TWITTER_BEARER_TOKEN,
    PERSONALITIES_FILE
)

# OpenAI Setup
openai.api_key = OPENAI_API_KEY

def get_twitter_client():
    """
    Authenticate Twitter client using the provided credentials
    """
    try:
        client = tweepy.Client(TWITTER_BEARER_TOKEN,TWITTER_API_KEY,TWITTER_API_SECRET,TWITTER_ACCESS_TOKEN,TWITTER_ACCESS_TOKEN_SECRET)

        auth = tweepy.OAuth1UserHandler(TWITTER_API_KEY,TWITTER_API_SECRET,TWITTER_ACCESS_TOKEN,TWITTER_ACCESS_TOKEN_SECRET)
        api = tweepy.API(auth)
        
        return api, client
    
    except Exception as e:
        print(f"Twitter authentication error: {e}")
        return None, None

def load_personalities(file_path):
    """Load the personality knowledge base from a JSON file."""
    with open(file_path, "r") as file:
        return json.load(file)

def construct_few_shot_prompt(personality_data, personality_name):
    """
    Create a few-shot prompt using examples from the personality data.
    """
    examples = personality_data[personality_name]["tweets"]
    selected_examples = random.sample(examples, min(3, len(examples)))

    messages = [
        {
            "role": "system",
            "content": (
                f"You are {personality_name}, a Twitter bot with the following personality traits:\n"
                f"{personality_data[personality_name]['description']}\n\n"
                "Your task is to create tweets in your characteristic style. Stay creative and engaging. Only use hashtags and emojis every 1 of 60 tweets"
            )
        }
    ]

    for i, example in enumerate(selected_examples):
        if isinstance(example, str) and example.strip():
            messages.extend([
                {"role": "user", "content": f"Create a tweet in my style."},
                {"role": "assistant", "content": example.strip()}
            ])

    messages.append(
        {"role": "user", "content": "Now create a new tweet in my style."}
    )
    
    return messages

def generate_and_post_tweet():
    """Generate a tweet and post it to Twitter."""
    try:
        # Load personalities
        personality_data = load_personalities(PERSONALITIES_FILE)
        
        # Randomly select a personality
        personality_name = random.choice(list(personality_data.keys()))
        
        # Generate tweet
        messages = construct_few_shot_prompt(personality_data, personality_name)
        
        try:
            # Generate tweet using OpenAI
            response = openai.chat.completions.create(
                model="gpt-4o-mini",
                messages=messages,
                max_tokens=280, 
                temperature=0.7
            )
            tweet_text = f"{personality_name}\n\n{response.choices[0].message.content.strip()}"
            
            # Get Twitter clients
            api, client = get_twitter_client()
            
            if client:
                # Post tweet using V2 Client
                tweet_response = client.create_tweet(text=tweet_text)
                print(f"Tweet posted by {personality_name}: {tweet_text}")
            else:
                print("Failed to authenticate Twitter client")
        
        except openai.APIError as e:
            print(f"OpenAI API returned an API Error: {e}")
        except openai.APIConnectionError as e:
            print(f"Failed to connect to OpenAI API: {e}")
        except openai.RateLimitError as e:
            print(f"OpenAI API request exceeded rate limit: {e}")
        except Exception as e:
            print(f"Tweet posting error: {e}")
    
    except Exception as e:
        print(f"Unexpected error: {e}")


def main():
    # Schedule the tweet generation and posting every 5 minutes
    generate_and_post_tweet()
    schedule.every(1).minutes.do(generate_and_post_tweet)
    
    # Keep the script running
    while True:
        schedule.run_pending()
        time.sleep(1)

if __name__ == "__main__":
    main()