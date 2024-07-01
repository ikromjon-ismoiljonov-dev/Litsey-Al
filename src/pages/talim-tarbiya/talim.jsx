import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom'
import { IoDocument } from 'react-icons/io5'
import { FaFilePdf } from 'react-icons/fa6'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const Talim = () => {

    
    const getHolidays = async() => {
        await axios.get('https://djangoburhon.pythonanywhere.com/api/edu/holiday/')
        .then(response => {
            setHolidays(response.data)
        })
    }
    const getSport = async() => {
        await axios.get('https://djangoburhon.pythonanywhere.com/api/edu/sport/')
            .then(response => {
                setSports(response.data)
            })
    }
    const getStudy = async() => {
        await axios.get('https://djangoburhon.pythonanywhere.com/api/edu/study/')
            .then(response => {
                setStudy(response.data);
            })
    }
    const getEdu = async() => {
        await axios.get('https://djangoburhon.pythonanywhere.com/api/edu/edu/')
            .then(response => {
                setEdu(response.data)
            })
    }

    const getWork = async() => {
        await axios.get('https://djangoburhon.pythonanywhere.com/api/edu/work/')
            .then(response => {
                setWork(response.data)
            })
    }

    useEffect(() => {
        // getStudy();
        // getHolidays();
        // getSport();
        // getWork();
        // getEdu();
    }, [])

    //API Datas

    const [work, setWork] = useState(false)
    const [edu, setEdu] = useState(false);
    const [study, setStudy] = useState(false);
    const [sports, setSports] = useState(false)
    const [holidays, setHolidays] = useState(false);

    //Real hooks

    const [hujjatlar, setHujjatlar] = useState(true);
    const [tadbirlar, setTadbirlar] = useState(false)
    const [plan, setPlan] = useState(true);
    const [dastur, setDastur] = useState(false);
    const [idastur, setIDastur] = useState(false);

    const [plan1, setPlan1] = useState(true);
    const [dastur1, setDastur1] = useState(false);
    const [idastur1, setIDastur1] = useState(false);
    const [sport, setSport] = useState(false);

    const [t, i18n] = useTranslation("");

    const taText = {
        en: {
            tt: "Education",
            op: "Study plans",
            od: "Educational programs",
            id: "Working programs",
            oh: "Educational documents",
            tb: "Events",
            bayramlar: "Holidays",
            bt: "5 initiatives",
            mbh: "Cooperation with the neighborhood",
            st: "Sports events",
        },
        uz: {
            tt: "Ta'lim-Tarbiya",
            op: "O'quv rejalari",
            od: "O'quv dasturlari",
            id: "Ishchi dasturlar",
            oh: "O'quv hujjatlari",
            tb: "Tadbirlar",
            bayramlar: "Bayramlar",
            bt: "5 tashabbus",
            mbh: "Mahalla bilan hamkorlik",
            st: "Sport tadbirlari"
        },
        ru: {
            tt: "Образование",
            op: "Планы обучения",
            od: "Образовательные программы",
            id: "Рабочие программы",
            oh: "Образовательные документы",
            tb: "События",
            bayramlar: "Каникулы",
            bt: "5 инициатив",
            mbh: "Сотрудничество с соседями",
            st: "Спортивные мероприятия",
        }
    }

  return (
    <div className='youtube animate__animated animate__fadeIn duration-75'>
        <Header/>

        <section className='w-100 xl:px-24 lg:px-14 sm:px-12 px-4 py-10 bg-white mt-5 mb-5'>
            <div className='d-flex w-100 flex-wrap justify-between'>
                <h1 className='text-4xl md:w-100 mb-3 font-semibold'>{taText[i18n.language].tt}</h1>
                <div className='about-linkes d-flex gap-4'>
                    <Link onClick={() => {
                        setHujjatlar(true)
                        setTadbirlar(false)
                    }} className={hujjatlar? 'main-bg text-white' : 'text-black'}>{taText[i18n.language].oh}</Link>    
                    <Link onClick={() => {
                        setHujjatlar(false)
                        setTadbirlar(true)
                    }} className={tadbirlar? 'main-bg text-white' : 'text-black'}>{taText[i18n.language].tb}</Link>      
                </div>    
            </div>

            {hujjatlar? 
                        <div className='w-100 mt-4 d-flex flex-wrap justify-between'>
                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 mb-3 sm:mb-0 youtube p-3 rounded-lg border-l-blue-600 border-l-4'>
                            <p onClick={() => {
                                // setAbout(true)
                                // setHistory(false)
                                setPlan(true)
                                setDastur(false)
                                setIDastur(false)
                                // setMission(false)
                                // setSpons(false)
                                // setMtext('Litsey haqida')
                             }} className={plan? 'text-md cursor-pointer mb-2 main-color' : 'text-md cursor-pointer mb-2'}>{taText[i18n.language].op}</p>
                            <p onClick={() => {
                                // setHistory(true)
                                // setAbout(false)
                                // setMission(false)
                                setPlan(false)
                                setDastur(true)
                                setIDastur(false)
                                // setSpons(false)
                                // setMtext('Litsey tarixi')
                            }} className={dastur? 'text-md cursor-pointer mb-2 main-color' : 'text-md cursor-pointer mb-2'}>{taText[i18n.language].od}</p>
                            <p onClick={() => {
                                // setHistory(false)
                                // setAbout(false)
                                setPlan(false)
                                setDastur(false)
                                setIDastur(true)
                                // setMission(true)
                                // setSpons(false)
                                // setMtext('Litsey missiyasi')
                            }} className={idastur? 'text-md cursor-pointer mb-2 main-color' : 'text-md cursor-pointer mb-2'} >Ishchi dasturlar</p>
        
                        </div>
                        <div className='col-xxl-8 mb-3 col-lg-8 col-md-8 col-sm-12 col-12 md:px-16'>
                            {plan? 
                            <div>
                                <p className='text-2xl font-semibold'>{taText[i18n.language].op}</p>
                                <div className='w-100 mt-4 d-flex flex-wrap sm:flex-nowrap'>
                                    {study? study.map(item => {
                                        return (
                                            <div className='col-xl-2 col-lg-4 col-md-4 col-6 col-sm-3 col-3 d-flex p-2'>
                                                <a href={item.study_plan} download>
                                                    <div className='bg-gray-200 d-flex flex-wrap justify-center rounded-lg h-44'>
                                                    <FaFilePdf className='text-center w-full text-7xl mt-3 text-gray-500'/>
                                                    <p className='text-sm px-2 text-center'>{item.name}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    }) : null}
                                </div>
                            </div> : null}
                            {dastur? 
                            <div>
                                <p className='text-2xl font-semibold'>{taText[i18n.language].od}</p>
                                <div className='w-100 mt-4 d-flex flex-wrap sm:flex-nowrap'>
                                    {edu? edu.map(item => {
                                        return (
                                            <div className='col-xl-2 col-lg-4 col-md-4 col-6 col-sm-3 col-3 d-flex p-2'>
                                                <a href={item.edu_programs} download="study_plan">
                                                    <div className='bg-gray-200 d-flex flex-wrap justify-center rounded-lg h-44'>
                                                    <FaFilePdf className='text-center w-full text-7xl mt-3 text-gray-500'/>
                                                    <p className='text-sm px-2 text-center'>{item.name}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    }) : null}
                                </div>
                            </div>
                             : null}
                            {idastur? 
                                 <div>
                                    <p className='text-2xl font-semibold'>{taText[i18n.language].id}</p>
                                    <div className='w-100 mt-4 d-flex flex-wrap sm:flex-nowrap'>
                                        {work? work.map(item => {
                                            return (
                                                <div className='col-xl-2 col-lg-4 col-md-4 col-6 col-sm-3 col-3 d-flex p-2'>
                                                    <a href={item.work_programs} download="study_plan">
                                                        <div className='bg-gray-200 d-flex flex-wrap justify-center rounded-lg h-44'>
                                                        <FaFilePdf className='text-center w-full text-7xl mt-3 text-gray-500'/>
                                                        <p className='text-sm px-2 text-center'>{item.name}</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        }) : null}
                                    </div>
                                </div>
                            : null}
                        </div>
                    </div>    : null
        }
        {tadbirlar? 
        <div>
                <div className='w-100 mt-4 d-flex flex-wrap justify-between'>
                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 mb-3 sm:mb-0 youtube p-3 rounded-lg border-l-blue-600 border-l-4'>
                            <p onClick={() => {
                                // setAbout(true)
                                // setHistory(false)
                                setPlan1(true)
                                setDastur1(false)
                                setIDastur1(false)
                                setSport(false);
                                // setMission(false)
                                // setSpons(false)
                                // setMtext('Litsey haqida')
                             }} className={plan1? 'text-md cursor-pointer mb-2 main-color' : 'text-md cursor-pointer mb-2'}>{taText[i18n.language].bayramlar}</p>
                            <p onClick={() => {
                                // setHistory(true)
                                // setAbout(false)
                                // setMission(false)
                                setPlan1(false)
                                setDastur1(true)
                                setIDastur1(false)
                                setSport(false)
                                // setSpons(false)
                                // setMtext('Litsey tarixi')
                            }} className={dastur1? 'text-md cursor-pointer mb-2 main-color' : 'text-md cursor-pointer mb-2'}>{taText[i18n.language].bt}</p>
                            <p onClick={() => {
                                // setHistory(false)
                                // setAbout(false)
                                setPlan1(false)
                                setDastur1(false)
                                setSport(false)
                                setIDastur1(true)
                                // setMission(true)
                                // setSpons(false)
                                // setMtext('Litsey missiyasi')
                            }} className={idastur1? 'text-md cursor-pointer mb-2 main-color' : 'text-md cursor-pointer mb-2'} >{taText[i18n.language].mbh}</p>
                                                        <p onClick={() => {
                                // setHistory(false)
                                // setAbout(false)
                                setPlan1(false)
                                setDastur1(false)
                                setIDastur1(false)
                                setSport(true)
                                // setMission(true)
                                // setSpons(false)
                                // setMtext('Litsey missiyasi')
                            }} className={sport? 'text-md cursor-pointer mb-2 main-color' : 'text-md cursor-pointer mb-2'} >{taText[i18n.language].st}</p>
        
                        </div>
                        <div className='col-xxl-8 mb-3 col-lg-8 col-md-8 col-sm-12 col-12 md:px-16'>
                            {plan1? 
                            <div>
                                <p className='text-2xl font-semibold'>{taText[i18n.language].bayramlar}</p>
                                <div className='w-100 mt-4 d-flex justify-between flex-wrap sm:flex-nowrap'>
                                  {holidays? holidays.map(item => {
                                     return(
                                         <div className='d-inline'>
                                            <video className='ifr1' controls>
                                                <source src={item.video}/>
                                            </video>
                                            <p className='text-xl  mb-3 font-semibold'>{item.name}</p>
                                         </div>
                                        )
                                  }) : null}
                                </div>
                            </div> : null}
                            {dastur1? 
                            <div>
                            <p className='text-2xl font-semibold'>{taText[i18n.language].bt}</p>
                            <div className='w-100 mt-4 d-flex justify-between flex-wrap sm:flex-nowrap'>
                              <iframe className='ifr1' width="560" height="315" src="https://www.youtube.com/embed/0wTvu_uqF7Y?si=iFBC76rL2KNQuwS-"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                              <iframe className='ifr2' width="560" height="315" src="https://www.youtube.com/embed/ePyhY9GrBnE?si=y1MW-q7RsiIiJusl"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div> : null}
                            {idastur1? 
                            <div>
                            <p className='text-2xl font-semibold'>{taText[i18n.language].mbh}</p>
                            <div className='w-100 mt-4 d-flex justify-between flex-wrap sm:flex-nowrap'>
                              <iframe className='ifr1' width="560" height="315" src="https://www.youtube.com/embed/ei6mecXRJug?si=RZZ_VtTZatMgpLyS"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                              <iframe className='ifr2' width="560" height="315" src="https://www.youtube.com/embed/t-Fc3KYKLbw?si=YDySqoPdBUK20c8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div> 
                            : null}
                            {sport ?
                            <div>
                                <p className='text-2xl font-semibold'>{taText[i18n.language].st}</p>
                                <div className='w-100 mt-4 d-flex justify-between flex-wrap sm:flex-nowrap'>
                                    {/* {sports.map(item => {
                                        return(
                                            <div className='d-inline'>
                                            <video className='ifr1' controls>
                                                <source src={item.video}/>
                                            </video>
                                            <p className='text-xl  mb-3 font-semibold'>{item.name}</p>
                                            </div>
                                        )
                                    })} */}
                                </div>
                            </div> : null}
                        </div>
                    </div> 
        </div> : null}
        </section>



        <Footer/>
    </div>
  )
}

export default Talim