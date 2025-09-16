import React from 'react'
import BannerCarousel from './BannerCarousel'
import SpecialOffers from './SpecialOffers'
import BestSelling from './BestSelling'
import HotSales from './HotSales'
import NewOfers from './NewOffers'
import TopSeller from './TopSeller'
import FAQ from './Faq'
import Footer from './Footer'

export default function CTA() {
  return (
    <>
        <BannerCarousel />
        <SpecialOffers />
        <BestSelling />
        <TopSeller />
        <HotSales />
        <NewOfers />
        <FAQ />
        <Footer />
    </>
  )
}
