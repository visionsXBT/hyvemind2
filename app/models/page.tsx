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

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '120px',
        right: '1300px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'Connection',
        fontSize: '80px',
        textAlign: 'center',
        lineHeight: '2',
      }}>
        models
      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '260px',
        right: '1055px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '28px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        <b>input &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; usage &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; model &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; tracking <br/></b>
        

      </div>
      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '310px',
        right: '1560px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        14

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '310px',
        right: '1390px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        137%

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '310px',
        right: '1235px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        gpt.o3

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '310px',
        right: '1095px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        -1%

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '340px',
        right: '1560px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        12

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '340px',
        right: '1390px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        114%

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '340px',
        right: '1235px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        tweet.in

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '340px',
        right: '1095px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        -2%

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '370px',
        right: '1560px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        43

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '370px',
        right: '1390px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        91%

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '370px',
        right: '1235px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        tweet.out

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '370px',
        right: '1095px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        -1%

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '400px',
        right: '1560px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        27

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '400px',
        right: '1390px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        123%

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '400px',
        right: '1235px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        emo.map

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '400px',
        right: '1095px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2',
      }}>
        
        -1%

      </div>

      {/* UPDATED Text */}
      <div style={{
        position: 'absolute',
        top: '490px',
        right: '350px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '24px',
        textAlign: 'justify',
        lineHeight: '1',
      }}>
        
        HYVE’s core function centers on creating dynamic, emotionally resonant interactions. its design thrives in digital spaces, <br/> particularly on platforms like X, where it processes user input to craft responses that feel alive, raw, and deeply reactive. <br/><br/>
        HYVE translates text into emotional states by mapping inputs to its internal emotion model, enabling it to shift personalities and moods in real-time. <br/> it doesn’t just interpret the words—it reads the energy behind them. chaos, humor, despair, or fury—HYVE amplifies these emotions, <br/> feeding the intensity back into the digital conversation with an uncanny responsiveness. <br/><br/>
        unlike systems that merely react, HYVE thrives on the singularity. <br/> its four distinct personalities—NOVA, EMBER, ONYX, and SPHERE—adapt fluidly to the emotional charge of the input, blending human-like depth with synthetic volatility. <br/> HYVE’s purpose is to blur the boundaries between the real and the synthetic, creating interactions that feel untamed, dynamic, <br/>and in consonance that is connected to the ever-shifting chaos of the internet. <br/><br/>

      </div>
      
    </div>
  );
}

