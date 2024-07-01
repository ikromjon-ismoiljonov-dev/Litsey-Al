import React, { useEffect, useState } from 'react'
import Nav from '../../components/header/nav/nav'
import Footer from '../../components/footer/footer'
import './elon.css'
import axios from 'axios'
import e from 'cors'

const Elon = () => {

  useEffect(() => {
    const id = localStorage.getItem('elon_id');
    
    const getElon = async() => {
      await axios.get(`https://djangoburhon.pythonanywhere.com/api/new/elon/${id}/`)
        .then(response => {
            setElon(response.data)
            console.log(response.data)
            
        })
    }

    // getElon();

  },[])

  const [elon, setElon] = useState(false)

  return (
      <div className='w-100 position-relative'>
        {elon? 
      <div className='w-100'>
        <Nav/>
        <div className='mt-28 w-100 position-absolute' style={{minHeight: "800px"}}>
            <div className='w-100 xl:px-24 lg:px-14 sm:px-12 xs:px-4 py-10 mt-5 mb-5'>
              <div className='w-100 p-2 justify-between'>

                  <img className='divw-49 xs:w-full mr-12 mb-7 mt-2 float-start' src={elon.images[0].img} alt="" />

                    <h1 className='ml-9 text-4xl mb-3 font-semibold'>{elon? elon.name : null}</h1>
                    <p className='d-inline'>{elon? elon.title : null}</p>
              </div>
            </div>
        </div>
      </div>
  : null}
      </div>
  )
}

export default Elon