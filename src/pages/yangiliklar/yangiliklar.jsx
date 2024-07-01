import React, { useEffect, useState } from 'react'
import './yangiliklar.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Nav from '../../components/header/nav/nav'
import axios from 'axios'
import Item from 'antd/es/list/Item'
import { useTranslation } from 'react-i18next'

const Yangiliklar = () => {

    const [t, i18n] = useTranslation("")

    const [news, setNews] = useState(false);

    const getNew = async() => {
        await axios.get(`https://djangoburhon.pythonanywhere.com/api/new/${localStorage.getItem('news')}/?lang=${i18n.language}`)
            .then(response => {
                setNews(response.data)
                console.log(response.data);
            })
    }

    useEffect(() =>{
        getNew()
    }, [i18n.language])

  return (
    <div className='w-100 position-relative'>
    {news? 
   <div className='w-100'>
     <Nav/>
    <div className='mt-28 w-100 position-absolute' style={{minHeight: "800px"}}>
        <div className='w-100 xl:px-24 lg:px-14 sm:px-12 xs:px-4 py-10 mt-5 mb-5'>
          <div className='w-100 p-2 justify-between'>

              <img className='divw-49 xs:w-full mr-12 mb-7 mt-2 float-start' src={news.images[0].img} alt="" />

                <h1 className='ml-9 text-4xl mb-3 font-semibold'>{news? news.name : null}</h1>
                <p className='d-inline'>{news? news.title : null}</p>
          </div>
        </div>
    </div>
   </div>
: null}
  </div>
  )
}

export default Yangiliklar