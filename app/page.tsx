'use client'
import Head from 'next/head'
import Logo from "../public/logo.png"

import { CallToAction } from './sections/CallToAction'
import { Faqs } from './sections/Faqs'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Pricing } from './sections/Pricing'
import { PrimaryFeatures } from './sections/PrimaryFeatures'
import { SecondaryFeatures } from './sections/SecondaryFeatures'
import { Testimonials } from './sections/Testimonials'
import { Images } from './constants'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Footprints Collective | Personalized Carbon Assessment Solutions for Businesses</title>
        <meta name="description" content="Discover how Footprints Collective helps businesses transition to net-zero with personalized carbon assessments. Our AI-driven platform tailors recommendations based on your industry and location, ensuring actionable insights to reduce emissions and meet compliance goals." />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta property="og:title" content="Footprints Collective | Personalized Carbon Assessment Solutions for Businesses" />
        <meta property="og:description" content="Transform your business with tailored carbon assessments from Footprints Collective. Our AI-powered platform offers actionable insights to reduce emissions and enhance sustainability practices." />
        <meta property="og:image" content={Images.FOOTPRINTS_LOGO} />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:url" content="https://footprintscollective.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:site_name" content="Footprints Collective" />
        <meta property="og:theme-color" content="#10172a" key="theme-color" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Footprints Collective | Personalized Carbon Assessment Solutions for Businesses" />
        <meta name="twitter:description" content="Unlock sustainable practices with Footprints Collective. Our AI-driven carbon assessments deliver personalized insights for businesses aiming for net-zero emissions." />
        <meta name="twitter:image" content="https://yourwebsite.com/images/twitter-image.jpg" />
        <meta name="twitter:site" content="@FootprintCollective" />

        {/* Additional Meta Tags (if needed) */}
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="carbon assessment, net-zero solutions, personalized sustainability, AI carbon footprint analysis, emissions reduction, ESG compliance, renewable energy recommendations, eco-friendly business solutions, carbon offset strategies, industry-specific carbon assessments" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
