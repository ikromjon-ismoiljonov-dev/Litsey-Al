import Header from "../header/header"
import './home.css'
import '../header/header.css'
import { IoIosArrowDropright } from "react-icons/io"
import { LuShieldCheck } from "react-icons/lu"
import { GrScorecard } from "react-icons/gr"
import { FaAngleDown, FaArrowTurnUp, FaArrowUp, FaArrowUp19, FaArrowUpAZ, FaCirclePlus, FaEye, FaGraduationCap, FaPlugCirclePlus, FaUpDown, FaUps, FaUsers } from "react-icons/fa6"
import { FaArrowAltCircleDown, FaChalkboardTeacher } from "react-icons/fa"
import { PiStudentFill } from "react-icons/pi"
import { HiUsers } from "react-icons/hi2"
import { BsPlayBtnFill } from "react-icons/bs"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/material/Icon/index';
import Button from '@mui/material/Button';
import { TbNavigationUp } from "react-icons/tb"
import { IoNavigateOutline } from "react-icons/io5"
import Footer from "../footer/footer"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { useTranslation } from "react-i18next"

const Home = () => {

  const [t, i18n] = useTranslation("");

  const [elon, setElon] = useState(false);
  const [neww, setNeww] = useState(false);

  const getElon = async() => {
      await axios.get('https://djangoburhon.pythonanywhere.com/api/new/elon/')
        .then(response => {
            setElon(response.data)
            console.log(response.data);
        })
  }
  const getNew = async() =>{
    await axios.get('https://djangoburhon.pythonanywhere.com/api/new/')
      .then(response => {
        setNeww(response.data)
      })
  }
  const getData = async () =>{
    await axios.get('https://djangoburhon.pythonanywhere.com/api/edu/')
      .then(response => {
          console.log(response.data)
      })
      .catch(error => {
        console.error("Error fetching data:", error)
      })
}

  useEffect(() => {
    // getData();
    // getElon();
    // getNew();
  }, [])

  const homeText = {
    ru: {
      ta: "",
      ts: "Количество студентов",
      xod: "Сотрудники",
      name: "Ваше имя",
      fak: "Факультеты",
      txt: "Ташкентский государственный педагогический университет имени Низами является одним из крупнейших научных и образовательных центров нашей республики, имеет свою богатую историю и сложившиеся положительные традиции. mon анонсировал серию лекций. Эти мероприятия предназначены для информирования студентов и сотрудников о новейших технологиях, стратегиях и возможностях карьерного роста в ИТ-секторе. растущая проблема управления киберугрозами и безопасностью",
      st: "Kачество образования",
      vd: "Bидео",
      kuzatuvchilar: "Hаблюдатели",
      kr: "просмотр",
      result: "Bысокие результаты",
      news: "Горячие новости",
      about: "О нашем лицее имени Алишера Навои",
      diag: "Указатели лицея",
      elon: "Oбъявления",
      yt: "Наша страница на ютубе",
      ques: "Часто задаваемые вопросы",
      send: "Oтправлять",
      contact: "Cвязь"
    },
    uz: {
      ta: "/ ta",
      ts: "Talabalar soni",
      xod: "Xodimlar",
      fak: "Fakultetlar",
      name: "Ismingiz",
      kuzatuvchilar: "Kuzatuvchilar",
      kr: "Ko'rishlar",
      vd: "Videolar",
      txt: "Nizomiy nomidagi Toshkent davlat pedagogika universiteti respublikamizdagi yirik ilmiy-ma`rifiy markazlardan biri bo‘lib, o‘z boy tarixi va shakllangan ijobiy an`analariga ega. mon ma'ruzalar seriyasini e'lon qildi. Ushbu tadbirlar talaba va xodimlarga IT sektoridagi eng so‘nggi texnologiyalar, strategiyalar va kasb imkoniyatlari haqida ma'lumot berish maqsadida mo‘ljallangan. kiber tahdidlar va xavfsizlikni boshqarishdagi ortib borayotgan muam",
      st: "Sifatli ta'lim",
      result: "Yuqori natijalar",
      news: "Qizg'in yangiliklar",
      about: "Bizning Alisher Navoiy nomidagi Litseyimiz haqida",
      diag: "Litsey ko'rsatgichlari",
      elon: "E'lonlar",
      yt: "Bizning youtube sahifamiz",
      send: "Yuborish",
      ques: "Ko'p beriladigan savollar",
      contact: "Bog'lanish"
    },
    en: {
      ta: "",
      xod: "Employees",
      ts: "Number of students",
      name: "Your name",
      fak: "faculties",
      kuzatuvchilar: "Subscribers",
      kr: "Views",
      st: "Quality education",
      vd: "Videos",
      result: "High results",
      txt: "Tashkent State Pedagogical University named after Nizami is one of the largest scientific and educational centers in our republic, has its own rich history and established positive traditions. mon announced a series of lectures. These events are designed to inform students and staff about the latest technologies, strategies and career opportunities in the IT sector. the growing challenge of managing cyber threats and security",
      news: "Breaking news",
      about: "About our Lyceum named after Alisher Navoi",
      diag: "Lyceum pointers",
      elon: "Announcements",
      send: "Send",
      yt: "Our youtube page",
      ques: "Frequently asked questions",
      contact: "Connect"
    }
}
  
  return (
    <div className="animate__animated animate__fadeIn">
        <Header/>
        <div className="mt-52 w-100 bg-white sm:px-12 md:px-14 xl:px-32">
            <div className="w-100 flex">
                 <h1 className="mt-5 news p2">{homeText[i18n.language].news}</h1>
                 <div className=""></div>
            </div>      

            <div className=" w-100 mb-14 flex mt-5 flex-wrap md:flex-nowrap ">
                    <div className="col-xxl-4 col-xl-4 col-lg-4  p-2 col-md-12 col-sm-12 col-12">
                        <div className="col-12 elonlar p-4">
                            <div className="d-flex justify-between align-items-center">
                                <p className="text-xl font-semibold">{homeText[i18n.language].elon}</p>
                            </div>

                            {elon? elon.map(item => {

                              localStorage.setItem('elon_id', item.id)

                                return (
                                  <a className="aa1" href={`/elon`}>
                                        <div>
                                        <div className="p-4 w-7 h-7 border rounded-full d-inline-flex justify-center items-center mt-3 ">
                                          <p>{item.id}</p>
                                        </div>
                                        <br />
                                        <p className="elon-text">{item.translations[i18n.language].title}</p>
                                        <p className="text-dark font-semibold">{item.created}</p>
                                    </div>
                                  </a>    
                                )
                            }) : null}
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 p-2"> 
                        <div className="flex flex-wrap">
                            {neww? neww.map(item => {
                              return (
                                <div className="col-xxl-6 col-md-12 col-12 col-lg-6 bg-1 p-2">
                                    <div className="overflow-hidden h-full div-hovers rounded-3xl">
                                          <Link onClick={() => {
                                            localStorage.setItem('news', item.id)
                                          }} to={'/yangiliklar'}>
                                          <img className="w-full" src={item.image1} alt="" />
                                          <div className="position-absolute bottom-3 px-4 pb-3 d-flex z-40 justify-between w-100">
                                            <p className="text-white md:text-lg text-sm">{item.translations[i18n.language].title}</p>
                                            <IoIosArrowDropright className="text-white text-3xl ml-8"/>
                                          </div>
                                          </Link>
                                    </div>
                                </div>
                              )
                            }) : null}
                        </div> 
                    </div>
            </div>     

             <div className="w-100 flex">
                 <h1 className="news mt-5 p2 col-xxl-5 col-xl-6">{homeText[i18n.language].about}</h1>
                 <div className=""></div>
            </div>    
            <section className="bg-white w-full text-gray-40 body-font ">
              <div className=" w-100 mx-auto contain flex py-24 xs:px-5 flex-wrap">
                <div className="position-relative d-flex flex-wrap justify-center items-center xl:w-1/2 xs:w-full md:mb-16 xs:mb- div-r2 xs:p-3">
                  <img className="object-cover xs:w-4/5 xl:w-2/3 img-round mx-auto object-center rounded" alt="hero" src={require("../../image/Group 306.png")}/>
                  <img className="w-3/5 position-absolute " src={require('../../image/anv-removebg-preview 1.png')} alt="" />
                </div>
                <div className="lg:flex-grow xs:w-full lg:w-1/2 xl:pl-24 flex div-r1 flex-col md:items-start md:text-left text-center">
                    <div className="w-100 shadow-md">
                        <div className="w-100 flex flex-wrap justify-between">
                        <img className="col-xxl-6 col-xl-6 col-lg-6 img-f pe-3" src="https://s3-alpha-sig.figma.com/img/9810/9861/34819c2f4a7bc7bef09008c8cdf786c6?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M5mDApECPZe9fCu1PdXApU9umj-Uh3RuNoHhia3BPOG9K-NoBJ3lyWLoZ0xDN1g4E9VD0qB-omWKwM7LBXVCyhfXMlClOwsRkRbHhK7l9KEF0TwHoWmvZqI4G2X13nWlEFR5j2qTaWdwy1cwdLw22Je3dFsrUiYuqx90Q2kzfXRZlxt-J49QS1tbaO~BlWd5yMAFi7z7ycn-pp7wljm6sB9U4jkLeGFHVsgGF8Q9jJSCGCJD~~Cr-394Kba0K80kK1rkoXTa5Q6AHIGpt6H5HRkDOyVxmpRdtIgDjv85uEOODu8mOKkud~y4b8FXtMYJQnq7DAbKJT9eSSqVyfOBAA__" alt="" />
                        <img className="col-xxl-6 col-xl-6 col-lg-6 img-f" src="https://s3-alpha-sig.figma.com/img/25c2/1b43/1afc61e643cd5b438a022c2060aaa888?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KxQjQ0d0o94aqT~99izIMwZEh-JnT2tGf38M2N7pjqKwGezb8R5UA~lTwQEp2W-d2u~nE3f3-n9Jh3rRF3DKakDzShDheJa8ag4A38GXdncUa8mgP7KniblSSvGtZE4UqWmX7ZnB5YTGcQHJqthOHivWqXferCFDjN5RBxTbwmKwoQGBRatEJgnkIH3A2eLZRejuLnmccGN7o1y6QavSvgzVv-azTok100Ryq4aFayPoem7ZVdFJmL5qBdcELo9gjbF-0HAEmqGfPJB3O~IypmqHBbQBijRQYpMVzzaqXZH1CK5gBI36qXALqeIZpXxefqLkYQWpBNAmOAFFkLtQ3w__" alt="" />  
                        </div>   
                        <p className="text-start text-sm xl:text-md mt-4 mb-4">{homeText[i18n.language].txt}</p>

                        <div className="d-flex mb-3">
                          <div className="d-flex me-4 align-items-center"><LuShieldCheck className="me-2 fs-3"/> {homeText[i18n.language].st}</div>
                          <div className="d-flex align-items-center"><GrScorecard className="me-2 fs-3"/>{homeText[i18n.language].result}</div>
                        </div>
                    </div>    
               </div>
              </div>
            </section>

            <section className="mt-5 bg-white sc-p">
                <h1 className="text-4xl mb-16 font-semibold fw-montserrat text-center">{homeText[i18n.language].diag}</h1>

                <div className="flex d-flex flex-wrap w-100">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-3">
                      <p className="mb-10 fw-montserrat bg-sccolor d-flex gap-2 items-center"><FaGraduationCap className="main-color text-2xl"/>{homeText[i18n.language].fak}</p>
                     <div className="w-100 d-flex gap-7 flex-wrap items-center">
                        <div className="bg-span1">
                              <h1 className="text-4xl font-semibold">14 <span className="text-2xl"> {homeText[i18n.language].ta}</span></h1>
                        </div>
                     </div>

                    </div>
                    <div className="col-xxl-6 mb-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <p className="mb-10 fw-montserrat bg-sccolor d-flex gap-2 items-center"><FaChalkboardTeacher className="main-color text-2xl"/> {homeText[i18n.language].xod}</p>
                     <div className="w-100 d-flex gap-7 flex-wrap items-center">
                        <div className="bg-span2">
                              <h1 className="text-4xl font-semibold">500 <span className="text-2xl"> {homeText[i18n.language].ta}</span></h1>
                        </div>
                     </div>


                    </div>
                    <div className="col-xxl-6 mb-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <p className="mb-10 fw-montserrat bg-sccolor d-flex gap-2 items-center"><PiStudentFill className="main-color text-2xl"/>{homeText[i18n.language].ts}</p>
                     <div className="w-100 d-flex gap-7 flex-wrap items-center">
                        <div className="bg-span3">
                              <h1 className="text-4xl font-semibold">859 <span className="text-2xl"> {homeText[i18n.language].ta}</span></h1>
                        </div>
                     </div>


                    </div>
        
                </div>
            </section>

        </div>
            


        <div id="elonlar" class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h1 className="md:text-4xl font-semibold mb-4 mt-4">{homeText[i18n.language].elon}</h1>
          <div class="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {elon? elon.map(item => {
              localStorage.setItem('elon_id', item.id)
              return (
                <Link to={'/elon'}  className="overflow-hidden">
                     <div class="flex bge flex-col rounded-lg position-relative border p-4 md:p-6" style={{background: `url(${item.image1})`}}>
                      <h3 class="mb-48 text-sm text-white md:text-lg">
                        {homeText[i18n.language].elon} / <br /> {item.created}
                      </h3>

                      <h1 className="bottom-2 text-white text-xl md:text-2xl md:w-4/5 font-semibold position-absolute">{item.translations[i18n.language].title}</h1>
                    </div>
                </Link>
              )
            }) : null}
          </div>
        </div>
      </div>

      {/* Yotuube sahifa */}

      <section id="yt" className="youtube bg-white sm:px-12 md:px-14 xl:px-32 py-5 sc-p">
          <h1 className="news mb-5">{homeText[i18n.language].yt}</h1>
          <div className="w-100 bg-white py-5 rounded-2xl md:p-5 p-2  ">
              <div className="yt-results d-flex w-100 flex-wrap justify-around">
                  <div className="div-stat mx-3">
                    <div className="d-flex gap-2 items-center mb-5">
                        <BsPlayBtnFill className="main-color text-3xl"/>
                        <p>{homeText[i18n.language].vd}</p>
                    </div>
                    <div className="yt-stat d-flex justify-center items-center">
                        <div className="d-flex items-end gap-1">
                          <h1 className="sm:text-5xl text-4xl font-semibold">485</h1><p className="sm:text-lg text-md"> /ta</p>
                        </div>
                    </div>
                  </div>
                  <div className="div-stat mx-3">
                    <div className="d-flex gap-2 items-center mb-5">
                        <FaUsers className="main-color text-3xl"/>
                        <p>{homeText[i18n.language].kuzatuvchilar}</p>
                    </div>
                    <div className="yt-stat2 d-flex justify-center items-center">
                        <div className="d-flex items-end gap-1">
                          <h1 className="sm:text-5xl text-4xl font-semibold">852</h1><p className="sm:text-lg text-md"> /ta</p>
                        </div>
                    </div>
                  </div>
                  <div className="div-stat mx-3">
                    <div className="d-flex gap-2 items-center mb-5">
                        <FaEye className="main-color text-3xl"/>
                        <p>{homeText[i18n.language].kr}</p>
                    </div>
                    <div className="yt-stat3 d-flex justify-center items-center">
                        <div className="d-flex items-end gap-1">
                          <h1 className="sm:text-5xl text-4xl font-semibold">984</h1><p className="sm:text-lg text-md"> /ta</p>
                        </div>
                    </div>
                  </div>
                   
              </div>

              <div className="d-flex w-100 flex-wrap mt-5 justify-around">
                <div className="p-3">
                <iframe width="400" height="335" src="https://www.youtube.com/embed/R78g8u7pORI?si=tC-ZIhs_mn8G8iG5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="p-3">
                <iframe width="400" height="335" src="https://www.youtube.com/embed/PqbfKj6YWQY?si=il0iHTtEmu4_EpbT"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="p-3">
                <iframe width="400" height="335" src="https://www.youtube.com/embed/O6-pIfCQK_M?si=WZIyJbytmsYSW5dF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>

          </div>
      </section>

      <section class="text-gray-600 bg-white body-font overflow-hidden youtube">
        <div class="px-5 py-24 mx-auto">

        <h1 className="news mb-5 text-center">{homeText[i18n.language].ques} </h1>

          <div class="flex flex-wrap -m-12">
            <div class="p-12 md:w-1/2 flex flex-col items-start">
              <img src={require('../../image/student.png')} alt="" />
            </div>
            <div class="md:p-6 p-3 mt-10 border-spacing-1 rounded-xl md:w-1/2 flex flex-col bg-white items-start">
    
            <div>
              <Accordion className="accordion-s fw-montserrat py-3 px-2 lg:text-lg md:text-md text-sm">
                <AccordionSummary
                  className=""
                  expandIcon={
                    <div className="bg-blue-600 p-2 rounded-full">
                        <FaAngleDown className="text-white"/>
                    </div>
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                    Qanday qilib hujjat topshirsam bo'ladi?
                </AccordionSummary>
                <hr />
                <AccordionDetails>
                  <p className="fs-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                </AccordionDetails>
              </Accordion>    
              <Accordion className="accordion-s fw-montserrat py-3 px-2 lg:text-lg md:text-md text-sm">
                <AccordionSummary
                  className=""
                  expandIcon={
                    <div className="bg-blue-600 p-2 rounded-full">
                        <FaAngleDown className="text-white"/>
                    </div>
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                    Sizning ustozlaringiz malakali ustozlardanmi?
                </AccordionSummary>
                <hr />
                <AccordionDetails>
                  <p className="fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                </AccordionDetails>
              </Accordion>    
              <Accordion className="accordion-s fw-montserrat py-3 px-2 lg:text-lg md:text-md text-sm">
                <AccordionSummary
                  className=""
                  expandIcon={
                    <div className="bg-blue-600 p-2 rounded-full">
                        <FaAngleDown className="text-white"/>
                    </div>
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                    Bu yerda aniq fanlar yonalishi ham bormi ?
                </AccordionSummary>
                <hr />
                <AccordionDetails>
                  <p className="fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                </AccordionDetails>
              </Accordion>    

            </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 youtube body-font">
  <div class=" w-100 px-5 py-24 mx-auto">
    <h1 class="text-4xl font-semibold title-font text-white mb-12 text-start">{homeText[i18n.language].contact}</h1>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/2 w-full">
          <form className="form-1" action="">
                <input type="text" placeholder="ismingiz" name="" id="" />
                <input type="text" placeholder="ismingiz" name="" id="" />
                <select className="select1" name="manbalar" id="">
                  <option value="tg">Telegram</option>
                  <option value="ins">Instagram</option>
                  <option value="yt">Youtube</option>
                </select>
                <textarea  placeholder="izohingizn"></textarea>
                <button className="bg-main text-white ">Yuborish</button>
          </form>
      </div>
      <div class=" px-3 xl:p-4 d-flex xl:justify-center md:w-1/2 w-full">
          <img className="img-fluid" src={require('../../image/Emails-amico 1.png')} alt="" />
      </div>
    </div>
  </div>
</section>

      <Footer/>
    </div>
  )
}

export default Home