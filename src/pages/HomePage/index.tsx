import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Slide from '../../components/Slider/Slider'
import Body from './Body'
import './HomePage.scss'

const imageData= [
  {url:'https://ucarecdn.com/2e5462d7-e919-44e1-b02b-e328cab6a863/1598250920D9Kef.jpg'},
  {url:'https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg'}
];

const HomePage = () => {

  return (
    <>
      <Header/>
      <Slide/>
      <Body/>
      <Footer/>
    </>
  )
}

export default HomePage