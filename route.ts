import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  console.log('Server-side route handler triggered')
  
  const url = new URL('/welcome', request.url)
  console.log(`Redirecting to: ${url.toString()}`)
  
  return NextResponse.redirect(url)
}

