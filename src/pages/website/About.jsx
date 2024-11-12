import AboutHero from '@/components/AboutHero'
import Arguments from '@/components/Arguments'
import BannerAbout from '@/components/BannerAbout'
import OurTeam from '@/components/OurTeam'
import TopPage from '@/components/TopPage'
import React from 'react'

export default function About() {
  return (
    <>
      <TopPage page='about us'/>
      <AboutHero/>
      <Arguments/>
      <BannerAbout/>
      <OurTeam/>
    </>
  )
}
