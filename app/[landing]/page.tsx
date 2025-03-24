"use client"
import Hero from '@/components/Hero/hero'
import ImgSlider from '@/components/ImgSlider/ImgSlider'
import KnowMore from '@/components/KnowMore/KnowMore'
import TechTips from '@/components/TechTips/TechTips'
import Welcome from '@/components/welcome/welcome'
import ServicesSection from '@/our-services/servicesSection'

const Landing = () => {

  return (
    <>
      <div className='flex flex-col gap-2'>
        <Hero />
        <br></br>
        <ImgSlider />
        <Welcome />
        <TechTips />
        <ServicesSection active={false}/>
        <KnowMore />
      </div>
    </>
  )
}

export default Landing