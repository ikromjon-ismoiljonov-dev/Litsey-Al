import React from 'react'
import Nav from '../../components/header/nav/nav'
import Footer from '../../components/footer/footer'
import './nfound.css'
import { useTranslation } from 'react-i18next'
import '../../App.css';

const NFound = () => {
  const text = {
    en: "not found",
    ru: "не найдено",
    uz: "topilmadi"
  }

  const [t, i18n] = useTranslation("");

  return (
    <div>
      <Nav/>
      <div className=' bg-white mt-72 w-100 mb-52 text-center d-inline-block'>
          <div className='m-auto w-100'>
            <h1 className='r04'>404</h1>
            <div className='dvv'></div>
            <p className='nf'>{text[i18n.language]}</p>
          </div>
      </div>
      <div className='doot'>
      <Footer/>
      </div>
    </div>
  )
}

export default NFound
