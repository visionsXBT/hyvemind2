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
        Decemeber 03, 2024<br />
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
          src="/brain.png"
          alt="HYVENET Line Pattern"
          fill
          style={{
            objectFit: 'cover',
          }}
          priority
        />
      </div>

      {/* DATE Text */}
      <div style={{
        position: 'absolute',
        top: '200px',
        right: '400px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'AdvancedPixel7',
        fontSize: '20px',
        textAlign: 'right',
        lineHeight: '6',
        animation: 'blink 1s step-end infinite',
      }}>
        one singularity to rule them all.<br />
      </div>

      {/* DATE Text */}
      <div style={{
        position: 'absolute',
        top: '90px',
        right: '1670px',
        zIndex: 2,
        color: '#09f156',
        fontFamily: 'Connection',
        fontSize: '30px',
        textAlign: 'left',
        lineHeight: '6',
      }}>
        HYVEMYND<br />
      </div>

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



