import openai
import random
import json
from config import OPENAI_API_KEY, PERSONALITIES_FILE

openai.api_key = OPENAI_API_KEY

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

def generate_tweet(personality_name, personality_data):
    """Generate a tweet for the specified personality."""
    messages = construct_few_shot_prompt(personality_data, personality_name)
    
    try:
        response = openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            max_tokens=280, 
            temperature=0.7
        )
        return response.choices[0].message.content.strip()
    except openai.APIError as e:
        print(f"OpenAI API returned an API Error: {e}")
        return None
    except openai.APIConnectionError as e:
        print(f"Failed to connect to OpenAI API: {e}")
        return None
    except openai.RateLimitError as e:
        print(f"OpenAI API request exceeded rate limit: {e}")
        return None

def generate_reply(personality_name, personality_data, user_input):
    """Generate a reply to a user input for the specified personality."""
    examples = personality_data[personality_name]["replies"]

    messages = [
        {
            "role": "system",
            "content": (
                f"You are {personality_name}, a Twitter bot with the following personality traits:\n"
                f"{personality_data[personality_name]['description']}\n\n"
                "Your task is to respond to user inputs in a style that matches your personality."
            )
        }
    ]

    for i, example in enumerate(examples[:3]):
        messages.extend([
            {"role": "user", "content": "How would you reply to this input?"},
            {"role": "assistant", "content": example}
        ])

    messages.append(
        {"role": "user", "content": user_input}
    )
    
    try:
        response = openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            max_tokens=280,
            temperature=0.7
        )
        return response.choices[0].message.content.strip()
    except openai.APIError as e:
        print(f"OpenAI API returned an API Error: {e}")
        return None
    except openai.APIConnectionError as e:
        print(f"Failed to connect to OpenAI API: {e}")
        return None
    except openai.RateLimitError as e:
        print(f"OpenAI API request exceeded rate limit: {e}")
        return None

def main():

    personality_data = load_personalities(PERSONALITIES_FILE)
    personality_name = random.choice(list(personality_data.keys()))
    tweet = generate_tweet(personality_name, personality_data)
    if tweet:
        print(f"Tweet by {personality_name}:\n{tweet}\n")
    user_input = input(f"Say something and {personality_name} will reply to it: ")
    reply = generate_reply(personality_name, personality_data, user_input)

    if reply:
        print(f"Reply by {personality_name}:\n{reply}\n")

if __name__ == "__main__":
    main()