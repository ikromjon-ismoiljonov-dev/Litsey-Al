import React from 'react'
import './qabul.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { FaEye, FaFilePdf, FaUsers } from 'react-icons/fa6'
import { IoIosLink } from 'react-icons/io'
import { BsPlayBtnFill } from 'react-icons/bs'
import { HiDocumentArrowDown } from 'react-icons/hi2'
import '../../components/home/home.css'
import { useTranslation } from 'react-i18next'

const Qabul = () => {

    const [t, i18n] = useTranslation("");

    const text = {
        en: {
            mn: "Additional resources",
            ak: "Incoming application pointers",
            ua: "General applications",
            viewers: "Viewers",
            qb: "2024/2025 Admission Committee of our Lyceum",
            oq: "Studied",
            txt: "As you navigate the academic labyrinth, every challenge is a lesson, every success a strength, every success represents the body of your challenge.",
        },
        uz: {
            mn: "Qo'shimcha manbalar",
            ak: "Kelib tushgan ariza ko'rsatgichlari",
            ua: "Umumiy arizalar",
            viewers: "Kuzatuvchilar",
            qb: "Litseimizning 2024/2025 Qabul komissiyasi",
            txt: "Akademik labyrinthda yo'l o'tirayotganingizda, har bir qiyinchilik bir dars, har bir muvaffaqiyat bir mustahkamlik martaqi, har bir muvaffaqiyat sizning qiyinchiliknigizning tanasini bildiradi",
        },
        ru: {
            mn: "Дополнительные ресурсы",
            ak: "Указатели входящих приложений",
            ua: "Общие приложения",
            viewers: "Зрителили",
            oq: "Studied",
            qb: "2024/2025 Приемная комиссия нашего лицея",
            txt: "Когда вы перемещаетесь по академическому лабиринту, каждая задача — это урок, каждый успех — это сила, каждый успех представляет собой суть вашей задачи."
        }
    }

  return (
    <div className='youtube animate__animated animate__fadeIn'>
        <Header/>

            <div className='bg-white xl:px-24 lg:px-14 sm:px-12 xs:px-4 py-5 mt-5'>
                <h1 className='text-4xl font-semibold'>{text[i18n.language].mn}</h1>

                <div className='w-100 mb-3 d-flex div-bos gap-3 mt-3 flex-wrap'>
                    <div className='bg-white p-3 div-pdf py-5 rounded-lg d-flex flex-wrap justify-center'>
                        <FaFilePdf className='text-8xl text-gray-600'/>
                        <p className='text-sm text-center w-100 mt-3'>Qabul rejasi</p>
                    </div>
                    <div className='bg-white p-3 div-pdf py-5 rounded-lg d-flex flex-wrap justify-center'>
                        <FaFilePdf className='text-8xl text-gray-600'/>
                        <p className='text-sm text-center w-100 mt-3'>Qabul rejasi</p>
                    </div>
                    <div className='bg-white p-3 div-pdf py-5 rounded-lg d-flex flex-wrap justify-center'>
                        <FaFilePdf className='text-8xl text-gray-600'/>
                        <p className='text-sm text-center w-100 mt-3'>Qabul rejasi</p>
                    </div>
                    <div className='bg-white p-3 div-pdf py-5 rounded-lg d-flex flex-wrap justify-center'>
                        <FaFilePdf className='text-8xl text-gray-600'/>
                        <p className='text-sm text-center w-100 mt-3'>Qabul rejasi</p>
                    </div>
                </div>

            <a href="">
                <button className='px3 py-2 rounded-full btn btn-outline-primary d-flex items-center gap-1'>
                    <IoIosLink/> Telegram
                </button>
            </a>
                

            <h1 className='mb-5 mt-5 text-4xl font-semibold'>{text[i18n.language].ak}</h1>

        <div className=''>
        <div className='w-100 rounded-xl bg-white d-flex xl:px-5 xl:py-10 d-flex justify-between flex-wrap'>
                <div className="yt-results d-flex w-100 flex-wrap justify-around">
                  <div className="div-stat mx-3">
                    <div className="d-flex sm:w-full w-100 gap-2 items-center justify-center mb-5">
                        <HiDocumentArrowDown className="main-color text-3xl"/>
                        <p>{text[i18n.language].ua}</p>
                    </div>
                    <div className="yt-stat d-flex w-100 justify-center items-center">
                        <div className="d-flex items-end gap-1">
                          <h1 className="sm:text-5xl text-4xl font-semibold">485</h1><p className="sm:text-lg text-md"> /ta</p>
                        </div>
                    </div>
                  </div>
                  <div className="div-stat mx-3">
                    <div className="d-flex sm:w-full w-100 gap-2 items-center justify-center mb-5">
                        <FaUsers className="main-color text-3xl"/>
                        <p>{text[i18n.language].viewers}</p>
                    </div>
                    <div className="yt-stat2 d-flex justify-center items-center">
                        <div className="d-flex items-end gap-1">
                          <h1 className="sm:text-5xl text-4xl font-semibold">852</h1><p className="sm:text-lg text-md"> /ta</p>
                        </div>
                    </div>
                  </div>
                  <div className="div-stat mx-3">
                    <div className="d-flex gap-2 justify-center w-100 items-center mb-5">
                        <FaEye className="main-color text-3xl"/>
                        <p>{text[i18n.language].viewers}</p>
                    </div>
                    <div className="yt-stat3 d-flex justify-center items-center">
                        <div className="d-flex items-end gap-1">
                          <h1 className="sm:text-5xl text-4xl font-semibold">984</h1><p className="sm:text-lg text-md"> /ta</p>
                        </div>
                    </div>
                  </div>
                   
              </div>
                </div>
        </div>

        <div className='w-100 d-flex justify-between flex-wrap p-4 mt-16'>
        <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                <p className='lg:text-4xl md:text-4xl sm:text-3xl xs:text-2xl xl:text-5xl font-semibold text-black xs:mb-3 md:mb-5'>{text[i18n.language].qb}</p>
                <p className='text-sm sm:pr-16'>{text[i18n.language].txt}</p>
            </div>
            <div className='col-xxl-6 col-xl-6 d-flex justify-center col-lg-6 col-md-12 col-sm-12 col-12'>
                <img src={require('../../image/college admission-pana 1.png')} alt="" />    
            </div>  
        </div>
            
        </div>

        <Footer/>
    </div>
  )
}

export default Qabul