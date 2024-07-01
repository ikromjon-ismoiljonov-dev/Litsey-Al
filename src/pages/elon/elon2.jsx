import React, { useEffect, useState } from 'react'
import Nav from '../../components/header/nav/nav'
import Footer from '../../components/footer/footer'
import './elon.css'
import axios from 'axios'
import e from 'cors'
import { useTranslation } from 'react-i18next'

const Elon2 = () => {

  useEffect(() => {
    const id = localStorage.getItem('elon_id');
    const els = localStorage.getItem('els')
    const getElon = async() => {
      await axios.get(`https://djangoburhon.pythonanywhere.com/api/new/elon/?search=${els}`)
        .then(response => {
            setElon(response.data)
            console.log(response.data)
            
        })
    }

    getElon();

  },[])

  const [t, i18n] = useTranslation("")

  const [elon, setElon] = useState(false)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

  return (
      <div className='w-100 position-relative'>
        {elon? 
      <div className='w-100'>
        <Nav/>
        <div className='mt-28 w-100 position-absolute' style={{minHeight: "800px"}}>
            <div className='w-100 xl:px-24 lg:px-14 sm:px-12 xs:px-4 py-10 mt-5 mb-5'>
              <div className='w-100 p-2 justify-between'>

                  <img className='divw-49 xs:w-full mr-12 mb-7 mt-2 float-start' src={elon[0].image1} alt="" />

                    <h1 className='ml-9 text-4xl mb-3 font-semibold'>{elon? elon[0].translations[i18n.language].name : null}</h1>
                    <p className='d-inline'>{elon? elon[0].translations[i18n.language].title : null}</p>
              </div>
            </div>
        </div>
      </div>
  : null}
      </div>
  )
}

export default Elon2