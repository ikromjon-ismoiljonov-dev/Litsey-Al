import React from 'react'
import Nav from './nav/nav'
import './header.css'
import { useTranslation } from 'react-i18next'

const Header = () => {

    const [t, i18n] = useTranslation("")

    const langs = {
         ru : {
            gorod: "город Ташкент",
            first: "Лицей имени Алишера Навои",
            second: "Наш академический лицей имени Алишера Навои анонсировал на своем официальном сайте цикл лекций. Эти мероприятия предоставляют студентам и сотрудникам новейшие технологии, стратегии и возможности карьерного роста в ИТ-секторе.",
            connect: "Cвязь",
            qabul: "Регистрация",
        },
         en : {
            gorod: "the city of Tashkent",
            first: "Lyceum named after Alisher Navoi",
            second: "Our academic lyceum named after Alisher Navoi has announced a series of lectures on its official website. These events provide students and staff with the latest technologies, strategies and career opportunities in the IT sector",
            connect: "Contact",
            qabul: "Register",
        },
         uz : {
            gorod: "Toshkent shaxri",
            first: "Alisher Navoiy nomidagi Litsey",
            second: "Bizning Alisher Navoiy nomidagi akademik litseimiz rasmiy veb saytiga hush kelibsizma'ruzalar seriyasini e'lon qildi. Ushbu tadbirlar talaba va xodimlarga IT sektoridagi eng so‘nggi texnologiyalar, strategiyalar va kasb imkoniyatlari",
            connect: "Bog'lanish",
            qabul: "Qabul",
        }
    }
    
  return (
    <div className='bg-white'>
        <Nav/>
        <div style={{marginTop: '70px'}} className='p-16  md:px-32 inline-block w-100'>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 divh1 float-end'>
                <div className='div-bg float-end'>
                    <img className='w-full' src="https://avatars.mds.yandex.net/get-altay/10700095/2a0000018b225e081fc21d262437dcef0139/orig" alt="" />  
                    <div className='ps1'></div>
                    <div className='ps2'></div>
                </div>     
            </div>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 divh2 float-start'>
                <p className='p1'>{langs[i18n.language].gorod}</p>
                <p className='p2 z-50'>{langs[i18n.language].first}</p>
                <p className='p3'>{langs[i18n.language].second}</p>
                <button className='btn1'>{langs[i18n.language].connect}</button>
                <button className='btn2'>{langs[i18n.language].qabul}</button>
            </div>
        </div>
    </div>
  )
}

export default Header