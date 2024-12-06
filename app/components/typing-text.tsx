'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export function TypingText() {
  const [text, setText] = useState('')
  const fullText = ''
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [text])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div style={{
        fontFamily: 'Connection, monospace',
        fontSize: '45px',
        color: '#09f156',
        textAlign: 'center',
        marginBottom: '10px',
        position: 'relative'
      }}>
        HYVENET
        <span style={{
          fontFamily: 'AdvancedPixel7, monospace',
          fontSize: '30px',
          position: 'absolute',
          top: '-5px',
          right: '-15px'
        }}>
          ®
        </span>
      </div>
      <div style={{ 
        fontFamily: 'AdvancedPixel7, monospace', 
        fontSize: '32px', 
        color: '#09f156',
        textAlign: 'center'
      }}>
        {text}
        {'[ '}
        <Link 
          href="/welcome"
          style={{ 
            fontFamily: 'AdvancedPixel7, monospace',
            fontSize: '32px',
            color: '#09f156',
            textDecoration: 'none',
            cursor: 'pointer',
            padding: '4px 8px',
            display: 'inline-block',
            marginLeft: '4px',
            animation: 'blink 1s step-end infinite',
            visibility: showCursor ? 'visible' : 'hidden'
          }}
        >
          enter &gt;
        </Link>
        {' ]'}
      </div>
    </div>
  )
}

