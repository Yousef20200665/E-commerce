import React from 'react'
import style from './Home.module.css'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import Category from '../Category/Category'
import MainSlider from '../MainSlider/MainSlider'
import { Helmet } from 'react-helmet'
export default function Home() {
  return <>
   <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  <MainSlider/>
  <Category/>
  <FeaturedProducts/>
  </>
}
