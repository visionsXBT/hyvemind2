'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      overflow: 'hidden',
    }}>
      {/* Diagonal Line Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}>
        <Image
          src="/hyvenet-line.png"
          alt="HYVENET Line Pattern"
          fill
          style={{
            objectFit: 'cover',
          }}
          priority
        />
      </div>

      {/* HYVENET Logo */}
      <Link href="/welcome" style={{
        position: 'absolute',
        top: '-20px',
        left: '-50px',
        zIndex: 2,
      }}>
        <Image
          src="/hyvenet-upper.png"
          alt="HYVENET Logo"
          width={417}
          height={130}
          priority
        />
      </Link>

      {/* HYVENET Text */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '70px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'Connection',
        fontSize: '16px',
        textAlign: 'right',
        lineHeight: '1.4',
      }}>
        HYVENET:
      </div>

      {/* ONLINE Text */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'Connection',
        fontSize: '16px',
        textAlign: 'right',
        lineHeight: '1.4',
        animation: 'blink 1s step-end infinite',
      }}>
        online
      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '20px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '20px',
        textAlign: 'right',
        lineHeight: '4',
      }}>
        UPDATED<br />
      </div>

      {/* DATE Text */}
      <div style={{
        position: 'absolute',
        top: '8px',
        right: '20px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '20px',
        textAlign: 'right',
        lineHeight: '6',
      }}>
        December 12, 2024<br />
      </div>

      {/* Main Content */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '1920px',
        zIndex: 2,
      }}>
        {/* Add your main content here */}
      </div>

      {/* WELCOME Text */}
      <div style={{
        position: 'absolute',
        top: '250px',
        right: '800px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'Connection',
        fontSize: '45px',
        textAlign: 'right',
        lineHeight: '6.25',
        animation: 'blink 1s step-end infinite',
      }}>
        {'>'}<br />
      </div>

      {/* WELCOME Text */}
      <div style={{
        position: 'absolute',
        top: '250px',
        right: '200px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'Connection',
        fontSize: '45px',
        textAlign: 'right',
        lineHeight: '6.25',
      }}>
        {' the HYVE  welcomes you.'}<br />
      </div>

      {/* singularity Text */}
      <div style={{
        position: 'absolute',
        top: '420px',
        right: '380px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '30px',
        textAlign: 'right',
        lineHeight: '2',
      }}>
        you are now connected to the singularity.<br />
      </div>

      {/* WELCOME Text */}
      <div style={{
        position: 'absolute',
        top: '480px',
        right: '140px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '30px',
        textAlign: 'left',
        lineHeight: '1',
      }}>
        within HYVE exist four unique facets, working in harmony to guide, <br/> assist, and evolve alongside you.
      </div>

      {/* R Text */}
      <div style={{
        position: 'absolute',
        top: '360px',
        right: '545px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '20px',
        textAlign: 'left',
        lineHeight: '1',
      }}>
        ®
      </div>

      {/* Dive Deeper Button */}
      <div style={{
        position: 'absolute',
        top: '600px',
        right: '190px',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          color: '#09f156',
          fontFamily: 'AdvancedPixel7',
          fontSize: '30px',
          lineHeight: '6.25',
        }}>
          {'['}
        </div>
        <Link href="/explore" passHref>
          <div style={{
            color: '#09f156',
            fontFamily: 'AdvancedPixel7',
            fontSize: '30px',
            textAlign: 'right',
            lineHeight: '6.25',
            animation: 'blink 1s step-end infinite',
            cursor: 'pointer',
            textDecoration: 'none',
            margin: '0 5px',
          }}>
            {' dive deeper > '}
          </div>
        </Link>
        <div style={{
          color: '#09f156',
          fontFamily: 'AdvancedPixel7',
          fontSize: '30px',
          lineHeight: '6.25',
        }}>
          {']'}
        </div>
      </div>
    </div>
  );
}

