  import React, { useEffect, useState } from 'react'
  import './nav.css'
  import { Link, useNavigate} from 'react-router-dom'
  import { FaBars, FaX } from 'react-icons/fa6'
  import { IoIosSearch } from 'react-icons/io'
  import { IoEarthSharp } from 'react-icons/io5'
  import { MdClose } from 'react-icons/md'
  import { useTranslation } from 'react-i18next'
  import axios from 'axios'


  const Nav = () => {


    // const test = localStorage.getItem('translation')

    // if(test.length == 0){
    //   localStorage.setItem('language', 'EN')
    // }
    const [mobile, setMobile] = useState(true)


    const [t, i18n] = useTranslation("")


    const [link, setLink] = useState('/');
    const navigate = useNavigate();

    localStorage.setItem('found', false);
    let founnd = localStorage.getItem('found')

    const [modal, setModal] = useState(false)

    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
    }

    if(modal) {
      console.log("helo")
    }
      const handleSearch = () => {
        let searchInput = document.getElementById('input-search');
        let v = searchInput.value.toLowerCase();
        if(v === "e'lonlar" || v == "elonlar" || v == "elon" || v == "elo"){
          localStorage.setItem('found', true)
          setTimeout(() => {
            window.location.hash = '#elonlar'
          }, 500);
        }
        else if(v == "litsey haqida" || v == "haqida" || v == "Litsey haqida" || v == "about of litsey" || v == "About of Litsey" || v == "about" || v == "About" || v == "Litsey tarixi" || v == "Litsey missiyasi" || v == "Hamkorlik" || v == "hamkorlik" || v == "litsey missiyasi " || v == "litsey tarixi" || v == "Raxbariyat" || v == "raxbariyat" || v == "Direktor blogi" || v == "direktor blogi" || v == "Kafedrlar" || v == "kafedrlar" || v == "Faoliyat"){
          localStorage.setItem('found', true)
          setTimeout(() => {
            window.location.href = "/biz-haqimizda"
          }, 400);
        }
        else if(v == "O'quv rejalari" || v == "Oquv rejalari" || v == "o'quv rejalari" || v== "oquv rejalari" ||v == "O'quv dasturlar" ||v == "o'quv dasturlar" || v== "Oquv dasturlar" || v==  "oquv dasturlar" || v == "Ishchi dasturlari" || v == "ishchi dasturlari" || v == "ishchi dasturlar" || v == "Bayramlar" || v == "bayramlar" || v == "5 tashabbus" || v == "5 Tashabbus" || v == "Mahalla bilan hamkorlik" || v == "mahalla Bilan hamkorlik" || v == "mahalla bilan Hamkorlik" || v == "Mahalla Bilan Hamkorlik" || v == "Sport tadbirlari" || v == "sport tadbirlari" || v == "sport Tadbirlari" || v == "Sport tadbirlari"){
          localStorage.setItem('found', true)
          setTimeout(() => {
            window.location.href = "/talim-tarbiya"
          }, 400);
        }
        else if(v == "Onlayn testlar" || v == "Onlayn Testlar" || v == "onlayn testlar" || v == "online testlar" || v == "onlayn Testlar" || v == "Online testlar" || v == "Online Testlar" || v == "Online test" || v == "Online tests" || v == "testlar" || v == "Testlar"  || v == "Tests" || v == "tests" || v == "Test" || v == "test" || v == "Elektron kutubxona" || v == "elektron kutubxona" || v == "elektron Kutubxona" || v == "Elektron Kutubxona" || v == "online libary" || v == "online library" || v == "yada materialls" || v == "yada materiallar" || v == "yada materiallari") {
          setTimeout(() => {
            window.location.href = "/o'quvchilar"
          }, 400);
        }
        else if(v == "qo'shimcha materiallar" || v == "arizalar" || v == "kelib tushgan arizalar" || v == "kelib tushgan ariza ko'rsatgichlari" || v == "qabul komissiyasi"){
          setTimeout(() => {
            window.location.href = "/qabul"
          }, 400);
        }
        else if(v == "Litsey ko'rsatgichlari" || v == "korsatgichlar" || v == "litsey ko'rsatgichlari" || v == "ko'rsatgich"){
          localStorage.setItem('found', true)
          setTimeout(() => {
            window.location.hash = '#elonlar'
          }, 500);
        }
          else if(elon.length > 0) {
            localStorage.setItem('found', true)
            setTimeout(() => {
              window.location.href = '/ad';
              localStorage.setItem('elon_id', elon[0].id);
            }, 500);
          } 
          else if(neww.length > 0){
            localStorage.setItem('found', true)
            setTimeout(() => {
              window.location.href = '/new'
            }, 500);
            }      
           else{
              window.location.href = '/not-found'
          }

          setTimeout(() => {
            localStorage.setItem('found', false)
          }, 1100);

        // setTimeout(() => {
        //   localStorage.setItem('found', false)
        // }, 2000);
      }

    const [inputValue, setInputvalue] = useState(false); 



    useEffect(() => {
        const getNew = async () => {
          await axios.get(`https://djangoburhon.pythonanywhere.com/api/new/elon/?search=${inputValue}`)
          .then(response => {
            setElon(response.data)
            console.log(response.data)  
          })
        }
        const getElon = async () => {
          await axios.get(`https://djangoburhon.pythonanywhere.com/api/new/?search=${inputValue}`)
            .then(response => {
              setNew(response.data)
            })
        }
        // getNew();
        // getElon();
    },[inputValue])
    let inputSearch = document.getElementById('input-search');
    
    //search states

    const [elon, setElon] = useState([]);
    const [neww, setNew] = useState([]);


    const navt = {
      en: {
        about: "About Us",
        education: "Education",
        students: "Students",
        sr: "Search",
        contact: 'Acceptance'
      },
      uz: {
        about: "Biz haqimizda",
        education: "Ta'lim-tarbiya",
        students: "O'quvchilar",
        contact: "Qabul",
        sr: "Qidiruv"
      },
      ru: {
        about: "O нас",
        education: "Oбразование",
        students: "Cтуденты",
        contact: "Регистратся",
        sr: "Поиск",
      }
    }

  
    return (
      <div className={mobile? 'z-10 navv w-100 sm:px-12 px-9 md:px-32 py-9 align-middle flex navbar' : 'navbar-mobile'} style={{backgroundColor: '#0A4A8C', zIndex: '100', position: 'fixed'}}>
            <Link to={'/'}>
            <h1 className='fw-montserrat logo text-white'>Navoiy.al</h1>
            </Link>
            <button className='btn btn-close1 absolute' onClick={()=> setMobile(true)}><FaX/></button>
            <ul className={mobile? 'd-flex md:gap-3 md:text-xs lg:gap-4 xl:gap-10 text-white fw-montserrat ul-nav' : 'nav-ul1'}>
              <Link to='/biz-haqimizda'>{navt[i18n.language].about}</Link>
              <Link to='/talim-tarbiya'>{navt[i18n.language].education}</Link>
              <Link to="/o'quvchilar">{navt[i18n.language].students}</Link>
              <Link to='/qabul'>{navt[i18n.language].contact}</Link>
            </ul>

            <div className='d-flex gap-2'>
                <button 
                Click={() => {
                    let inp = document.getElementById('input-search');
                    setModal(!modal)
                }} data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn-nav btn-none fw-montserrat'>
                    <IoIosSearch/>
                    {navt[i18n.language].sr}
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen position-relative" style={{zIndex: '1000', position: 'absolute'}}>
                  <div class="modal-content">
                    <div class="border-none relative modal-header">
                      <div className='d-flex d-inp m-auto items-center'>
                        <input onChange={(e) => {
                          setInputvalue(e.target.value)
                          localStorage.setItem('els', e.target.value)
                          console.log(e.target.value)
                        }} id='input-search' placeholder='Kerakli malumotlarni qidirish' type="text" className='border-b-2 m-auto px-3 py-2 bg-none input-sr text-black outline-none' />
                        <Link to={'/'} id='link1'>
                        <button 
                        data-bs-dismiss="modal" onClick={() => {
                              handleSearch();
                          }} style={{marginLeft: '-40px'}} className='left-0 h-full flex items-center'>
                          <IoIosSearch className='text-3xl'/>
                        </button>
                        </Link>
                      </div>
                      <button data-bs-dismiss="modal" aria-label="Close"><MdClose className='text-2xl'/></button>
                    </div>
                    <div class="modal-body relative">
                      
                    </div>
                  </div>
                </div>
              </div>
                <div class="dropdown">
                <button class="btn-nav" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <IoEarthSharp/>
                  {i18n.language.toUpperCase()}
                </button>
                <ul class="dropdown-menu">
                  <li onClick={() => {
                    changeLang("en")
                  }} className='dropdown-item cursor-pointer'>
                      EN  
                  </li>
                  <li onClick={() => {
                    changeLang("uz")
                  }} className='dropdown-item cursor-pointer'>
                      UZ
                  </li>
                  <li onClick={() => {
                    changeLang("ru")
                  }} className='dropdown-item cursor-pointer'>
                      RU
                  </li>
                </ul>
              </div>
                <button onClick={()=> setMobile(false)} className='btn btn-menu text-white border-none'>
                  <FaBars/>
                </button>
            </div>
      </div>
    )
  }

  export default Nav