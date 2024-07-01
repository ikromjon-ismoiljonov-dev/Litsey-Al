import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaLocationDot, FaMapLocation, FaPhoneVolume } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {

  const footerText = {
    en: {
      bl: "Sections",
      about: "About Us",
      education: "Education",
      students: "Students",
      contact: 'Acceptance',
      txt: "As you navigate the academic labyrinth, every challenge is a lesson, every success a strength, every success represents the body of your challenge.",
      connect: "Contact",
    },
    uz: {
      bl: "Bo'limlar",
      txt: "Akademik labyrinthda yo'l o'tirayotganingizda, har bir qiyinchilik bir dars, har bir muvaffaqiyat bir mustahkamlik martaqi, har bir muvaffaqiyat sizning qiyinchiliknigizning tanasini bildiradi",
      about: "Biz haqimizda",
      education: "Ta'lim-tarbiya",
      students: "O'quvchilar",
      contact: "Qabul",
      connect: "Bog'lanish"
    },
    ru: {
      bl: "Отделы",
      about: "O нас",
      education: "Oбразование",
      students: "Cтуденты",
      contact: "Регистратся",
      txt: "Когда вы перемещаетесь по академическому лабиринту, каждая задача — это урок, каждый успех — это сила, каждый успех представляет собой суть вашей задачи.",
      connect: "Cвязь"
    }
  }

  const [t, i18n] = useTranslation("")

  const [data, setData] = useState(false);

  return (
    <div>
        <footer className='xl:px-24 py-10 md:px-14 sm:px-12 px-8 bg-white'>
            <div className='d-flex w-100 justify-between flex-wrap'>
                <div className='col-lg-4 col-md-4 col-sm-11 mb-3'>
                    <h1 className='text-3xl font-semibold mb-3'>Navoiy<span className='main-color'>.al</span></h1>
                    <p className='mb-3'>{footerText[i18n.language].txt}</p>
                    <button className='bg-main text-white px-4 py-2 rounded-full'>{footerText[i18n.language].connect}</button>
                </div>

                <div className='d-flex md:gap-16  gap-16 flex-wrap'>
                  <div className='d-grid '>
                      <h1 className='text-3xl font-semibold mb-3'>{footerText[i18n.language].bl}</h1>
                      <Link to={"/biz-haqimizda"} className='mb-1'>{footerText[i18n.language].about}</Link>
                      <Link to={"/talim-tarbiya"} className='mb-1'>{footerText[i18n.language].education}</Link>
                      <Link to={"/o'quvchilar"} className='mb-1'>{footerText[i18n.language].students}</Link>
                      <Link to={"/qabul"} className='mb-1'>{footerText[i18n.language].connect}</Link>
                  </div>
                  <div className='d-block'>
                      <h1 className='text-3xl font-semibold mb-3'>{footerText[i18n.language].connect}</h1>
                      <div className='d-flex items-center mb-3'>
                        <FaPhoneVolume className='text-2xl mr-3 text-gray-700'/>
                        <div>
                          <p className='text-sm text-gray-700'>+998 99 584 32 56</p>
                          <p className='text-sm text-gray-700'>+998 99 584 32 56</p>
                        </div>
                      </div>
                      <div className='d-flex items-center mb-3'>
                        <FaLocationDot className='text-2xl mr-3 text-gray-700'/>
                        <div>
                          <p className='text-sm text-gray-700'>Toshkent shaxar, <br /> Chilonzor kichik daha</p>
                        </div>
                      </div>
                      <div className='d-flex items-center mb-3'>
                        <FaEnvelope className='text-2xl mr-3 text-gray-700'/>
                        <div>
                          <p className='text-sm text-gray-700'>navoiyal@gmail.com</p>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer