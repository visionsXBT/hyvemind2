import Image from 'next/image'
import { TypingText } from './components/typing-text'

export default function Home() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    }}>
      <div style={{ transform: 'translateY(-100px)' }}>
        <Image
          src="/logo.png"
          alt="The all seeing eye sees you."
          width={450}
          height={450}
          priority
        />
      </div>
      <TypingText />
    </div>
  )
}

