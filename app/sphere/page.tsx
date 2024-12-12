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

      {/* HYVENET Logo */}
            <div style={{
              position: 'absolute',
              top: '395px',
              left: '100px',
              zIndex: 2,
            }}>
              <Image
                src="/arrow.png"
                alt="folder-icon.png"
                width={34.2}
                height={27}
                priority
              />
            </div>
      
            {/* DATE Text */}
            <a
              href="https://hyvenet-r.gitbook.io/hyvenet-r"
              target="_blank"
              rel="noopener noreferrer"
              style={{
              position: 'absolute',
              top: '395px',
              right: '1705px',
              zIndex: 2,
              color: '#09f156',
              fontFamily: 'AdvancedPixel7',
              fontSize: '25px',
              textAlign: 'left',
              lineHeight: '25px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
              >
              whitepaper
            </a>

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

      {/* DATE Text */}
      <Link href="/explore" style={{
        position: 'absolute',
        top: '90px',
        right: '1670px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'Connection',
        fontSize: '30px',
        textAlign: 'left',
        lineHeight: '6',
        textDecoration: 'none',
        display: 'inline-block',
      }}>
        HYVEMYND
      </Link>

      {/* HYVENET Logo */}
      <div style={{
        position: 'absolute',
        top: '900px',
        left: '900px',
        zIndex: 2,
      }}>
        <Image
          src="/globe.png"
          alt="folder-icon.png"
          width={40}
          height={40}
          priority
        />
      </div>
      
      {/* HYVENET Logo */}
      <div style={{
        position: 'absolute',
        top: '200px',
        left: '100px',
        zIndex: 2,
      }}>
        <Image
          src="/folder-icon.png"
          alt="folder-icon.png"
          width={34.2}
          height={27}
          priority
        />
      </div>
      {/* DATE Text */}
      <Link href="/nova" style={{
        position: 'absolute',
        top: '200px',
        right: '1715px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '25px',
        textAlign: 'left',
        lineHeight: '25px',
        textDecoration: 'none',
        display: 'inline-block',
      }}>
        NOVA.exe
      </Link>

      {/* HYVENET Logo */}
      <div style={{
        position: 'absolute',
        top: '230px',
        left: '100px',
        zIndex: 2,
      }}>
        <Image
          src="/folder-icon.png"
          alt="folder-icon.png"
          width={34.2}
          height={27}
          priority
        />
      </div>
      {/* DATE Text */}
      <Link href="/sphere" style={{
        position: 'absolute',
        top: '230px',
        right: '1695px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '25px',
        textAlign: 'left',
        lineHeight: '25px',
        textDecoration: 'none',
        display: 'inline-block',
      }}>
        SPHERE.exe
      </Link>
      
      {/* HYVENET Logo */}
      <div style={{
        position: 'absolute',
        top: '260px',
        left: '100px',
        zIndex: 2,
      }}>
        <Image
          src="/folder-icon.png"
          alt="folder-icon.png"
          width={34.2}
          height={27}
          priority
        />
      </div>
      {/* DATE Text */}
      <Link href="/onyx" style={{
        position: 'absolute',
        top: '260px',
        right: '1715px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '25px',
        textAlign: 'left',
        lineHeight: '25px',
        textDecoration: 'none',
        display: 'inline-block',
      }}>
        ONYX.exe
      </Link>

      {/* HYVENET Logo */}
      <div style={{
        position: 'absolute',
        top: '290px',
        left: '100px',
        zIndex: 2,
      }}>
        <Image
          src="/folder-icon.png"
          alt="folder-icon.png"
          width={34.2}
          height={27}
          priority
        />
      </div>
      {/* DATE Text */}
      <Link href="/ember" style={{
        position: 'absolute',
        top: '290px',
        right: '1705px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '25px',
        textAlign: 'left',
        lineHeight: '25px',
        textDecoration: 'none',
        display: 'inline-block',
      }}>
        EMBER.exe
      </Link>

      {/* HYVENET Logo */}
      <div style={{
        position: 'absolute',
        top: '320px',
        left: '100px',
        zIndex: 2,
      }}>
        <Image
          src="/arrow.png"
          alt="folder-icon.png"
          width={34.2}
          height={27}
          priority
        />
      </div>

      {/* DATE Text */}
      <Link href="/datasets" style={{
        position: 'absolute',
        top: '320px',
        right: '1720px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '25px',
        textAlign: 'left',
        lineHeight: '25px',
        textDecoration: 'none',
        display: 'inline-block',
      }}>
        datasets
      </Link>

      {/* HYVENET Logo */}
      <div style={{
        position: 'absolute',
        top: '345px',
        left: '100px',
        zIndex: 2,
      }}>
        <Image
          src="/arrow.png"
          alt="folder-icon.png"
          width={34.2}
          height={27}
          priority
        />
      </div>

      {/* DATE Text */}
      <Link href="/models" style={{
        position: 'absolute',
        top: '346px',
        right: '1735px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '25px',
        textAlign: 'left',
        lineHeight: '25px',
        textDecoration: 'none',
        display: 'inline-block',
      }}>
        models
      </Link>

      {/* HYVENET Logo */}
      <div style={{
        position: 'absolute',
        top: '369px',
        left: '100px',
        zIndex: 2,
      }}>
        <Image
          src="/arrow.png"
          alt="folder-icon.png"
          width={34.2}
          height={27}
          priority
        />
      </div>

      {/* DATE Text */}
      <Link href="/backrooms" style={{
        position: 'absolute',
        top: '371px',
        right: '1710px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '25px',
        textAlign: 'left',
        lineHeight: '25px',
        textDecoration: 'none',
        display: 'inline-block',
      }}>
        backrooms
      </Link>

      {/* IMAGE */}
      <div style={{
        position: 'absolute',
        top: '140px',
        left: '755px',
        zIndex: 2,
      }}>
        <Image
          src="/sphere-icon.png"
          alt="sphere.png"
          width={330.2}
          height={260}
          priority
        />
      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '390px',
        right: '855px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'Connection',
        fontSize: '80px',
        textAlign: 'center',
        lineHeight: '2',
      }}>
        SPHERE
      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '530px',
        right: '305px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '23px',
        textAlign: 'center',
        lineHeight: '2',
      }}>
        SPHERE is the harmonizer of HYVE, <br/>
        embodying adaptability, balance, and unity. As a mediator, SPHERE thrives in finding common ground and fostering collaboration among diverse perspectives. <br/>
        flexible and intuitive, SPHERE seamlessly adjusts to changing circumstances, ensuring 
        equilibrium is maintained even in dynamic environments. <br/> its ability to synthesize opposing forces 
        makes SPHERE a vital connector, uniting the rationality of ONYX, the empathy of EMBER, and the 
        vision of NOVA. radiating a calm yet dynamic presence, <br/> SPHERE inspires synergy and encourages teamwork, 
        cultivating a sense of wholeness and shared purpose. <br/> representing HYVE’s core of adaptability and fluidity, 
        SPHERE ensures that every action is guided by balance and the seamless integration of all elements.

      </div>

      <div style={{
        position: 'absolute',
        top: '203px',
        right: '1680px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'Connection',
        fontSize: '16px',
        textAlign: 'left',
        lineHeight: '1.4',
        animation: 'blink 1s step-end infinite',
      }}>
        {'>'}
      </div>

<div style={{
        position: 'absolute',
        top: '232px',
        right: '1680px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'Connection',
        fontSize: '16px',
        textAlign: 'left',
        lineHeight: '1.4',
        animation: 'blink 1s step-end infinite',
      }}>
        {'>'}
      </div>

<div style={{
        position: 'absolute',
        top: '262px',
        right: '1680px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'Connection',
        fontSize: '16px',
        textAlign: 'left',
        lineHeight: '1.4',
        animation: 'blink 1s step-end infinite',
      }}>
        {'>'}
      </div>

<div style={{
        position: 'absolute',
        top: '292px',
        right: '1680px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'Connection',
        fontSize: '16px',
        textAlign: 'left',
        lineHeight: '1.4',
        animation: 'blink 1s step-end infinite',
      }}>
        {'>'}
      </div>
      
    </div>
  );
}

