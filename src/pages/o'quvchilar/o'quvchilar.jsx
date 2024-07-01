import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { FaFilePdf } from 'react-icons/fa6';
import { IoIosLink } from 'react-icons/io';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Pupils = () => {

        const getOnline = async() => {
            await axios.get('https://djangoburhon.pythonanywhere.com/api/edu/online/')
                .then(response => {
                    setOnline(response.data)
                })
        }
        const getLibary = async() => {
            await axios.get('https://djangoburhon.pythonanywhere.com/api/edu/library/')
                .then(response => {
                    setLibary(response.data)
                })
        }
        const getYada = async() => {
            await axios.get('https://djangoburhon.pythonanywhere.com/api/edu/yada/')
                .then(response => {
                    setYadam(response.data)
                    console.log(response.data)
                })
        }

        useEffect(() =>{
            // getOnline();
            // getLibary();
            // getYada();
        }, [])

        const [t, i18n] = useTranslation("")
        const [online, setOnline] = useState(false)
        const [libary, setLibary] = useState(false)
        const [yadam, setYadam] = useState(false);
        const [testlar, setTestlar] = useState(true);
        const [kutubxona, setKutubxona] = useState(false);
        const [yada, setYada] = useState(false);


        const sText = {
            en: {
                oq: "Students",
                test: "Online tests",
                lib: "Electronic libary",
                yada: "Yada materialls"
            },
            uz: {
                oq: "O'quvchilar",
                test: "Onlayn testlar",
                lib: "Elektron kutubxona",
                yada: "Yada materiallari",
            },
            ru: {
                oq: "Студенты",
                test: "Онлайн тесты",
                lib: "Электронная библиотека",
                yada: "Mатериалы яда"
            }
        }

  return (
    <div className='animate__animated youtube animate__fadeIn'>
        <Header/>
        
        <div className='w-100 mt-5 xl:px-24 lg:px-14 sm:px-12 bg-white py-5 xs:px-4 mb-5'>
            <p className='text-4xl font-semibold'>O'quvchilar</p>

                        <div className='w-100 mt-4 d-flex flex-wrap justify-between'>
                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 mb-3 sm:mb-0 youtube p-3 rounded-lg border-l-blue-600 border-l-4'>
                            <p onClick={() => {
                                setTestlar(true)
                                setKutubxona(false)
                                setYada(false)
                             }} className={testlar? 'text-md cursor-pointer mb-2 main-color' : 'text-md cursor-pointer mb-2'}>{sText[i18n.language].test}</p>
                            <p onClick={() => {
                                setTestlar(false)
                                setKutubxona(true)
                                setYada(false)
                            }} className={kutubxona? 'text-md cursor-pointer mb-2 main-color' : 'text-md cursor-pointer mb-2'}>{sText[i18n.language].lib}</p>
                            <p onClick={() => {
                                setTestlar(false)
                                setKutubxona(false)
                                setYada(true)
                            }} className={yada? 'text-md cursor-pointer mb-2 main-color' : 'text-md cursor-pointer mb-2'} >{sText[i18n.language].yada}</p>
        
                        </div>
                        <div className='col-xxl-8 mb-3 col-lg-8 col-md-8 col-sm-12 col-12 md:px-16'>
                            {testlar? 
                            <div>
                                <p className='text-2xl font-semibold'>{sText[i18n.language].test}</p>
                                <div className='w-100 mt-4 d-flex flex-wrap sm:flex-nowrap'>
                                    {online? online.map(item => {
                                        return (
                                                <div className='col-xl-2 col-lg-4 col-md-4 col-6 col-sm-3 col-3 d-flex p-2'>
                                                       <a href={item.test_pdf} className='w-100'>
                                                       <div className='bg-gray-200 w-100 d-flex flex-wrap justify-center rounded-lg h-44'>
                                                                <FaFilePdf className='text-center w-full text-7xl mt-3 text-gray-500'/>
                                                        </div>
                                                       </a>
                                                 </div>
                                        )
                                    }) : null}
                                </div>
                            </div> : null}
                            {kutubxona? 
                            <div>
                                <p className='text-2xl m-0 font-semibold sm:ml-10'>{sText[i18n.language].lib}</p>
                                <div className='mt-4 w-100 d-flex sm:flex-wrap flex-wrap'>
                                        {libary? libary.map(item => {
                                            return (
                                                <div className=''>
                                                    <a href={item.url_name}>
                                                        <button className='main-color btn btn-outline-primary px-3 py-2 rounded-full d-flex items-center gap-1'><IoIosLink/>{item.translations[i18n.language].name}</button>
                                                    </a>
                                                </div>  
                                            )
                                        }) : null}                                       
                                </div>
                            </div> : null}
                            {yada? 
                            <div>
                            <p className='text-2xl font-semibold'>{sText[i18n.language].yada}</p>
                            <div className='w-100 mt-4 d-flex flex-wrap sm:flex-nowrap'>
                                {yadam? yadam.map(item => {
                                    return (
                                        <div className='col-xl-2 col-lg-4 col-md-4 col-6 col-sm-3 col-3 d-flex p-2'>
                                                   <a href={item.yada_pdf} className='w-100' download="menejment__tarmoqlar_va_sohalar_boyicha.pdf">
                                                        <div className='bg-gray-200 d-flex flex-wrap justify-center rounded-lg h-44'>
                                                                <FaFilePdf className='text-center w-full text-7xl mt-3 text-gray-500'/>
                                                        </div>
                                                   </a>
                                        </div>
                                    )
                                }) : null}
                            </div>
                        </div> 
                            : null}
                        </div>
                    </div>  
        </div>

        <Footer/>
    </div>
  )
}

export default Pupils