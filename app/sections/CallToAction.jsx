'use client'
import Image from 'next/image'

import { Button } from './Button'
import { Container } from './Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-colorPrimary py-32"
    >
      <div
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 bg-colorPrimary"
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Start Your Sustainability Journey
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Discover how Footprints Collective can help you make a lasting impact
          </p>
          <Button href="../pages/register.jsx" color="white" className="mt-10">
            Start My Free Carbon Assessment"
          </Button>
        </div>
      </Container>
    </section>
  )
}
