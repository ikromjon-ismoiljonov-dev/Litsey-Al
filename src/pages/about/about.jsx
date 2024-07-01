import React, { useEffect, useState } from 'react'
import './about.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom'
import { IoDocument } from 'react-icons/io5'
import pdfFile from '../../data/example.pdf'
import { FaFilePdf } from 'react-icons/fa6'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import { logDOM } from '@testing-library/react'
import { TiArrowSyncOutline } from 'react-icons/ti'

const About = () => {

    const [data, setData] = useState(false);
    const [historyD, setHistoryD] = useState(false);
    const [t, i18n] = useTranslation("");
    const [historyData, setHistoryData] = useState(false);
    const [missionData, setMissionData] = useState(false);;
    const [partners, setPartners] = useState(false);
    const [directors, setDirectors] = useState(false);
    const [director, setDirector] = useState(false);

    const getData = async () =>{
        await axios.get('https://djangoburhon.pythonanywhere.com/api/about/')
          .then(response => {
              setData(response.data[0].translations);
          })
          .catch(error => {
            console.error("Error fetching data:", error)
          })
    }

    const test = async () => {
        await axios.get('https://djangoburhon.pythonanywhere.com/api/about/history/')
        .then(response => {
            setHistoryD(response.data)
        })
        .catch(err => {
            console.log("Error found: ", err);
        })
    }
    const getMissionData = async() =>{
        await axios.get('https://djangoburhon.pythonanywhere.com/api/about/mission/')
            .then(response => {
                setMissionData(response.data[0].translations)
            })
    }
    const getPartnersData = async() => {
        await axios.get('https://djangoburhon.pythonanywhere.com/api/about/partner/')
            .then(response => {
                setPartners(response.data)
            }
        )
    }


    //Raxbariyat

    const getDirectors = async() => {
        await axios.get('https://djangoburhon.pythonanywhere.com/api/lead/')
            .then(response => {
                setDirectors(response.data)
            })
    }
    const getDir = async () => {
        await axios.get('https://djangoburhon.pythonanywhere.com/api/lead/dir/')
            .then(response => {
                setDirector(response.data)
            })
    }
    const getGallery = async() => {
        await axios.get('https://djangoburhon.pythonanywhere.com/api/about/gallery/')
            .then(response => {
                setGallery(response.data);
            })
    }
    const getKafedr = async() => {
        await axios.get('https://djangoburhon.pythonanywhere.com/api/lead/department/')
            .then(response => {
                setKafedrlar(response.data)
            })
    }
    const getCon = async() => {
        await axios.get('https://djangoburhon.pythonanywhere.com/api/lead/con/')
            .then(response => {
                setCon(response.data)
            })
    }

    useEffect(() => {
        // getData();
        // getDir();
        // getMissionData();
        // test();
        // getDirectors();
        // getPartnersData();
        // getGallery();
        // getCon();
        // getKafedr();
    }, []);

    const [con, setCon] = useState(false);
    const [kaferdlar, setKafedrlar] = useState(false)
    const [about1, setAbout] = useState(true);
    const [history, setHistory] = useState(false);
    const [mission, setMission] = useState(false);
    const [spons , setSpons] = useState(false);
    const [litsey, setLitsey] = useState(true);
    const [raxbariyat, setRaxbariyat] = useState(false);
    const [faoliyat, setFaoliyat] = useState(false);

    const [mtext, setMtext] = useState('Listey haqida')


    //Rahbariyat

    const [rax, setRax] = useState(true);
    const [kaf, setKaf] = useState(false);
    const [dir, setDir] = useState(false);


    //Direktor blogi

    const [dr, setDr] = useState(true);
    const [td, setTd] = useState(false);
    const [pt, setPt] = useState(false);

    //Rahbariyat


    //Faoliyat

    const [holiday, setHoliday] = useState(false);
    const [lh, setLh] = useState(true);
    const [gl, setGl] = useState(false);
    const [mq, setMq] = useState(false);
    const [gallery, setGallery] = useState(false)


    //translateion


    const raxbariyatt = [
        {
            name: "Ravshanov Xamid",
            position: 'litsey musiqa o\'qituvchisi',
            number: '+998 88 888 88 88',
            email: 'example@gmail.com',
            photo: 'https://s3-alpha-sig.figma.com/img/dfb7/2a7a/ecd4129d3f37acff84e8b45b94319df7?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kF7pWUn0~1iIc2GL1QRUyGPoo8hGkhei4mYyk8l2BvI6ZK8qt3s3BnS0W4bg15EbPkcQ6z96207KFyofl50PF~vx5-ozThiVdaXKNiDubwvp-wx6PLn9C6gCZTn~vFU9cNiBMP21DFhhGDPbs3p7rHR1xpdoBSl1hIGQepeAT~VpGjJ4ZXPxndn6-h6FYrHuwc~w3guyqZz-XKdkbxJnci14ry-5uZaWJd88h3rzOiveSttQiInfvuTMkim67odRR0jzmCHvDnVw58dd6EkqdWhDN-p-vkX2Bd9-V2Yubhg7EkwFoLuU7MdAsq42dYhXUqh1LBcLoXV5AJyCdlxiVA__'
        },
        {
            name: "Alimboev Zafar",
            position: 'litsey musiqa o\'qituvchisi',
            number: '+998 88 888 88 88',
            email: 'example@gmail.com',
            photo: 'https://s3-alpha-sig.figma.com/img/dfb7/2a7a/ecd4129d3f37acff84e8b45b94319df7?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kF7pWUn0~1iIc2GL1QRUyGPoo8hGkhei4mYyk8l2BvI6ZK8qt3s3BnS0W4bg15EbPkcQ6z96207KFyofl50PF~vx5-ozThiVdaXKNiDubwvp-wx6PLn9C6gCZTn~vFU9cNiBMP21DFhhGDPbs3p7rHR1xpdoBSl1hIGQepeAT~VpGjJ4ZXPxndn6-h6FYrHuwc~w3guyqZz-XKdkbxJnci14ry-5uZaWJd88h3rzOiveSttQiInfvuTMkim67odRR0jzmCHvDnVw58dd6EkqdWhDN-p-vkX2Bd9-V2Yubhg7EkwFoLuU7MdAsq42dYhXUqh1LBcLoXV5AJyCdlxiVA__'
        },
        {
            name: "Ergashev Ravshan",
            position: 'litsey musiqa o\'qituvchisi',
            number: '+998 88 888 88 88',
            email: 'example@gmail.com',
            photo: 'https://s3-alpha-sig.figma.com/img/dfb7/2a7a/ecd4129d3f37acff84e8b45b94319df7?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kF7pWUn0~1iIc2GL1QRUyGPoo8hGkhei4mYyk8l2BvI6ZK8qt3s3BnS0W4bg15EbPkcQ6z96207KFyofl50PF~vx5-ozThiVdaXKNiDubwvp-wx6PLn9C6gCZTn~vFU9cNiBMP21DFhhGDPbs3p7rHR1xpdoBSl1hIGQepeAT~VpGjJ4ZXPxndn6-h6FYrHuwc~w3guyqZz-XKdkbxJnci14ry-5uZaWJd88h3rzOiveSttQiInfvuTMkim67odRR0jzmCHvDnVw58dd6EkqdWhDN-p-vkX2Bd9-V2Yubhg7EkwFoLuU7MdAsq42dYhXUqh1LBcLoXV5AJyCdlxiVA__'
        },
        {
            name: "Ravshanov X",
            position: 'litsey musiqa o\'qituvchisi',
            number: '+998 88 888 88 88',
            email: 'example@gmail.com',
            photo: 'https://s3-alpha-sig.figma.com/img/dfb7/2a7a/ecd4129d3f37acff84e8b45b94319df7?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kF7pWUn0~1iIc2GL1QRUyGPoo8hGkhei4mYyk8l2BvI6ZK8qt3s3BnS0W4bg15EbPkcQ6z96207KFyofl50PF~vx5-ozThiVdaXKNiDubwvp-wx6PLn9C6gCZTn~vFU9cNiBMP21DFhhGDPbs3p7rHR1xpdoBSl1hIGQepeAT~VpGjJ4ZXPxndn6-h6FYrHuwc~w3guyqZz-XKdkbxJnci14ry-5uZaWJd88h3rzOiveSttQiInfvuTMkim67odRR0jzmCHvDnVw58dd6EkqdWhDN-p-vkX2Bd9-V2Yubhg7EkwFoLuU7MdAsq42dYhXUqh1LBcLoXV5AJyCdlxiVA__'
        },
    ];

    const kafedrlar = [
        {
            bg: 'https://s3-alpha-sig.figma.com/img/1dbc/9ffe/ac2a4959f3d3ef92a15329ef1645fbef?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kNbs5G6xhrK8~iKrYlERcktxJUm4Aap0q~SeCRDRRjs7Hp4Snrgxexq1mOzwW7XrWTxWJ5J4rtgQ4gY2FpkjpsaNukv74TcTpt8ef18B-82z-~suw0D6O8oscBub4QEoZSbFFJ8oxyGm0L9878TfS6xW~bMxc-5ZhZd8e3ez9ukIt0I8N4ZiHON2QA7qlSTX7DtI5vAkrnqDl-S5qXSEQaKoZ2miLmyfEutqW2YbRtfAuM~9FCdKQI2a11~O83UXyKNYYZ3kIywP-qErQT59vzZjP2XjrGrYjwRc~eLxKNxQgq6nHLobjro0NaOt7Vni-HXCv66fpo5DDvfG512Ehw__',
            name: 'Ijtimoiy gumanitar fanlar kafedrasi'
        },
        {
            bg: 'https://s3-alpha-sig.figma.com/img/1ab2/6f4f/4e137103464aea0f1ee422307ef1e95f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kPxPGGykiwksbzUWRs1m~hlkV~HhnmRnTSC6dBZzfjZT9BmI7JQMwJwEsMODPhJnHnciAtTIAylEcv6UuzwsxlqjKZCRvtqu7cwU~2kagNTxxnC6016SCZgWEc0Vj88pvFRlSvzf6NYoZGWlX53oBXkWbjUwHCKltGYP0cbhc6IHR63rViyKuIHaypgExAVTflEcNyphobB0uMnLGhxCAw8JiOYAGOuovI8o9BpZGCV1UVVV9E4JxImUpiKrYQXcbyKEmDcem1ICEhauHjE2kEggXNj~Wkn7r~BHFJqC1Ax-~hCKq2H6FhycgW2um-HWeh2OsoGqnpzi-mut-MtwnA__',
            name: 'Xorij tili kafedrasi'
        },
        {
            bg: 'https://s3-alpha-sig.figma.com/img/e982/010a/8e757a1ffcb4e966ffae5da73af1a653?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IvP8vuaFrXH3Ab77nUJDas9pbcqx6E3AXBiWYhRqy0h5NeKdXi~tjC07C-OFrL7msQrwHa-tq6rJyghxCuz9Cn310bDTuFy6Nfldug0eiJZLzI5brkoLrWYs7lqp6n9dkb4QfkcQMWU2nFbOOUMi3pqFtgDyLfzkf4QMnnIdryyqtPLi4sFX271FcOIwLnDzc1ZzdPOjXWqDm8V8H-zqax7VMIoqvKtdSC1wvmBX1mryxot89XFt7XrOd5CvCYi~Lyt0Xnauj0dNV~TdKiV04Kv-1T0uWeOPyr707imNkyvxSbER4JfnkXiGB1lcIe8yvV4OGqa3YKOFj8thT~WcFg__',
            name: 'Aniq va tabiy fanlar kafedrasi'
        },
    ];

    const maqolalar = [
        {
            file: pdfFile,
            text: 'Abdulloh Rahimovning tarix maqolasi'
        },
        {
            file: pdfFile,
            text: 'Abdulloh Rahimovning tarix maqolasi'
        },
        {
            file: pdfFile,
            text: 'Abdulloh Rahimovning tarix maqolasi'
        },
    ]


    const aboutText = {
        en: {
            about: "About Lyceum",
            mission: "Lyceum Mission",
            history: "History of Lyceum",
            com: "Cooperation",
            lit: "Lyceym",
            lead: "Leadership",
            fa: "Activity",
            kaf: "Chairs",
            ad: "About the director",
            db: "Director's blog",
            gl: "Galerry",
            prise: "Congratulations",
        },
        uz: {
            about: "Litsey haqida",
            mission: "Litsey missiyasi",
            history: "Litsey tarixi",
            com: "Hamkorlik",
            lit: "Litsey",
            lead: "Raxbariyat",
            ad: "Direktor haqida",
            fa: "Faoliyat",
            db: "Direktor blogi",
            kaf: "Kafedrlar",
            gl: "Galareya",
            prise: "Tabriklar",
        },
        ru: {
            about: "О лицее",
            mission : "Лицей Миссия",
            history: "История лицея",
            com: "Сотрудничество",
            ad: "O директоре",
            fa: "Активность",
            lit: "Лицей",
            lead: "лидерство",
            db: "Блог директора",
            kaf: "Стулья",
            gl: "Галерея",
            prise: "Поздравления"
        }
    }
    
  return (
    <div className='youtube animate__animated animate__fadeIn duration-75'>
        <Header/>

        <section id='about' className='w-100 xl:px-24 lg:px-14 sm:px-12 xs:px-4 py-10 bg-white mt-5 mb-5'>
            <div className='d-flex w-100 flex-wrap justify-between'>
                <h1 className='text-4xl md:w-100 mb-3 font-semibold'>{mtext}</h1>
                <div className='about-linkes d-flex gap-4'>
                    <Link onClick={() => {
                        setLitsey(true)
                        setRaxbariyat(false)
                        setFaoliyat(false)
                    }} className={litsey? 'main-bg text-white' : 'text-black'}>{aboutText[i18n.language].lit}</Link>    
                    <Link onClick={() => {
                        setLitsey(false)
                        setRaxbariyat(true)
                        setFaoliyat(false)                       
                    }} className={raxbariyat? 'main-bg text-white' : 'text-black'}>{aboutText[i18n.language].lead}</Link>    
                    <Link onClick={() => {
                        setLitsey(false)
                        setKaf(false)
                        setRaxbariyat(false)
                        setFaoliyat(true)
                    }} className={faoliyat? 'main-bg text-white' : 'text-black'}>{aboutText[i18n.language].fa}</Link>    
                </div>    
            </div>

            {litsey? 
                        <div className='w-100 mt-4 d-flex flex-wrap justify-between'>
                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 mb-3 youtube p-3 rounded-lg border-l-blue-600 border-l-4'>
                            <p onClick={() => {
                                setAbout(true)
                                setHistory(false)
                                setMission(false)
                                setSpons(false)
                                setMtext(aboutText[i18n.language].about)
                             }} className='text-md cursor-pointer mb-2' style={{color: about1? 'blue' : 'black'}}>{aboutText[i18n.language].about}</p>
                            <p onClick={() => {
                                setHistory(true)
                                setAbout(false)
                                setMission(false)
                                setSpons(false)
                                setMtext(aboutText[i18n.language].history)
                            }} className='text-md cursor-pointer mb-2' style={{color: history? 'blue' : 'black'}}>{aboutText[i18n.language].history}</p>
                            <p onClick={() => {
                                setHistory(false)
                                setAbout(false)
                                setMission(true)
                                setSpons(false)
                                setMtext(aboutText[i18n.language].mission)
                            }} className='text-md cursor-pointer mb-2' style={{color: mission? 'blue' : 'black'}}>{aboutText[i18n.language].mission}</p>
                            <p onClick={() => {
                                setHistory(false)
                                setAbout(false)
                                setMission(false)
                                setSpons(true)
                                setMtext(aboutText[i18n.language].com)
                            }} className='text-md cursor-pointer mb-2' style={{color: spons? 'blue' : 'black'}}>{aboutText[i18n.language].com}</p>
        
                        </div>
                        <div className='col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-12 md:px-16'>
                            {about1? <div>
                                <p className='text-xl mb-3'>{data? data[i18n.language].name : null}</p>
                              <p className='text-sm'>
                                    {data? data[i18n.language].title : null}
                              </p>
                            </div> : null}
                            {history? <div>
                                <p className='text-xl mb-3'>{historyD? historyD[0].translations[i18n.language].name : null}</p>
                              <p className='text-sm'>{historyD? historyD[0].translations[i18n.language].title : null}</p>
                            </div> : null}
                            {mission? <div>
                                <p className='text-xl mb-3'>{missionData? missionData[i18n.language].name : null}</p>
                              <p className='text-sm'>{missionData? missionData[i18n.language].title : null}</p>
                            </div> : null}
                            {spons? <div className='pl-5'>
                                    <div className='border rounded-lg p-3'>
                                        {partners? partners.map(item => {
                                            return (
                                                <div className='youtube p-3 rounded-md w-100 mb-2 d-flex justify-between'>
                                                    <div className='d-flex items-center'>
                                                        <img className='w-10 mr-2 rounded-full h-10' src={item.image_partner[0].image_about} alt="" />
                                                        <p>{item.translations[i18n.language].name}</p>
                                                    </div>
                                                    <a href={item.url_name} className='d-flex'>
                                                        <div className='d-flex items-center gap-2 cursor-pointer'>
                                                            <IoDocument className='main-color text-xl'/>
                                                            <p className='main-color text-sm'>Memorandum</p>
                                                        </div>
                                                    </a>
                
                                                </div>
                                            )
                                        }) : null}
                                       
                                        
                                    </div>
                            </div> : null}
                        </div>
                    </div>    : null
        }

        {raxbariyat? <div className='w-100 mt-4'>
            <div className='mt-3 col-xl-4 col-md-6 col-sm-12 d-flex col-12 youtube rounded-lg border-l-4 border-l-blue-600 p-3'>
                <p onClick={() => {
                    setRax(true)
                    setKaf(false)
                    setDir(false)
                }} className={rax? 'mr-3 main-color sm:text-md text-sm cursor-pointer' : 'mr-3 cursor-pointer sm:text-md text-sm'}>{aboutText[i18n.language].lead}</p>
                <p onClick={() => {
                    setRax(false)
                    setKaf(true)
                    setDir(false)
                }} className={kaf? 'mr-3 main-color sm:text-md text-sm cursor-pointer' : 'mr-3 cursor-pointer sm:text-md text-sm'}>{aboutText[i18n.language].kaf}</p>
                <p onClick={() => {
                    setRax(false)
                    setKaf(false)
                    setDir(true)
                }} className={dir? 'mr-3 main-color sm:text-md text-sm cursor-pointer' : 'mr-3 cursor-pointer sm:text-md text-sm'}>{aboutText[i18n.language].db}</p>
            </div>

            {rax? <div className='w-full d-flex justify-between flex-wrap'>
                {/* {directors.map(item => {
                    return (
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 p-3'>
                        <div className='border-1 rounded-xl youtube overflow-hidden'>
                            <div className='w-full md:h-36 sm:h-36 h-40  lg:h-56' style={{backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                            <div className='w-full p-3'>
                                <h1 className='mt-2 text-2xl mb-1 font-semibold'>{item.translations[i18n.language].full_name}</h1>
                                <p className='text-sm mb-2'>{item.translations[i18n.language].position}</p>
                                <p className='text-sm bg-white d-inline-block px-2 py-1 rounded-full'>{item.email}</p>
                                <p className='text-sm bg-white d-inline-block px-2 ml-2 py-1 rounded-full'>{item.number}</p>
                                <p className='text-sm bg-white d-inline-block px-2 mt-2 py-1 rounded-full'>{item.phone}</p>
                            </div>
                        </div>
        </div>
                    )
                })} */}
            </div> : null }

            {dir? <div className='w-100 p-3 rounded-lg border-l-4 border-l-blue-600 mt-4'>
                    <div className='d-flex gap-3'>
                        <p onClick={() => {
                            setDr(true)
                            setTd(false)
                            setPt(false)
                        }} className={dr? 'cursor-pointer main-color' : 'cursor-pointer'}>{aboutText[i18n.language].ad}</p>
                        <p onClick={() => {
                            setDr(false)
                            setTd(true)
                            setPt(false)
                        }} className={td? 'cursor-pointer main-color' : 'cursor-pointer'}>{aboutText[i18n.language].prise}</p>
                    </div>

                    {dr? <div className='d-flex flex-wrap'>
                        <div className='col-md-6 mt-4 col-12'>
                            <h1 className='text-2xl mb-2 font-semibold'>{director? director[0].translations[i18n.language].full_name : null}</h1>
                            <p className='text-xs ld:text-sm'>{director? director[0].translations[i18n.language].title : null}</p>
                        </div>
                        <div className='col-md-6 col-12 d-flex justify-center'>
                            <div className='div-director md:mt-0 mt-3 rounded-xl overflow-hidden youtube'>
                                {/* <div style={{background: `url(${director[0].image})`}} className='img-div'></div> */}
                                <div className='w-100 p-3'>
                                    <h1 className='font-semibold text-xl mb-2'>Olimjon Olimov</h1>
                                    <p className='text-sm text-gray-700'>Maktabimiz direktori</p>
                                    <p className='px-2 py-1 bg-white rounded-full text-xs d-inline-block mt-2'>+998 88 888 88 88</p><br />
                                    <p className='px-2 py-1 bg-white rounded-full text-xs d-inline-block mt-2'>example@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div> : null}
                    {td?
                     <div className='row'>
                            {/* {con? con.map(item => {
                                return (
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-12 rounded-lg p-2'>
                                        <div className='youtube w-full rounded-lg p-4'>
                                            <h1 className='text-xl mb-2 font-semibold'>{item.translations[i18n.language].full_name}</h1>
                                            <div className='w-100 d-inline-block'>
                                            <p className='col-6 float-start xl:text-sm text-xs pr-3'>{item.translations[i18n.language].title}</p>
                                            <img className='col-6 float-end pr-3' src={item.image} alt="" />
                                        </div>
                                        </div>
                                    </div>
                                )
                            }) : null} */}
                    </div> : null}
            </div> : null}

        </div> : null}

        {kaf?
          <div className='w-full d-flex justify-between flex-wrap'>
                    {/* {kaferdlar.map(item => {
                        return (
                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 p-3'>
                            <div className='border-1 rounded-xl youtube overflow-hidden'>
                                <div className='w-full md:h-36 sm:h-36 h-40  lg:h-56 xl:h-72' style={{backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                <div className='w-full p-3'>
                                    <h1 className='mt-2 text-2xl mb-1 font-semibold'>{item.name}</h1>
                                </div>
                            </div>
                    </div>)
                    })} */}
            </div>  : null}

        {faoliyat? 
        <div className='w-100'>
                <div className='mt-3 col-xl-4 col-md-6 col-sm-12 d-flex col-12 youtube rounded-lg border-l-4 border-l-blue-600 p-3'>
                <p onClick={() => {
                    setLh(true)
                    setGl(false)
                    setMq(false)
                }} className={lh? 'mr-3 main-color cursor-pointer' : 'mr-3 cursor-pointer'}>{aboutText[i18n.language].mission}</p>
                <p onClick={() => {
                    setLh(false)
                    setGl(true)
                    setMq(false)
                }} className={gl? 'mr-3 main-color cursor-pointer' : 'mr-3 cursor-pointer'}>{aboutText[i18n.language].gl}</p>
            </div>
            <div className='w-100 p-3 rounded-lg border-l-4 border-l-blue-600 mt-4'>
                {lh?
                 <div>
                    <p className='sm:text-xl text-lg font-semibold mt-3 mb-3'>
                        {missionData? missionData[i18n.language].name : null}
                    </p>
                    <p className='sm:text-sm text-xs'>
                        {missionData? missionData[i18n.language].title : null}
                    </p>

                    {/* <div className='w-100 d-flex justify-between flex-wrap'>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 p-3'>
                            <div className='xl:h-72 lg:h-60 md:h-52 sm:h-44 h-60 bg-gray-200 rounded-xl'></div>
                        </div>
                    </div> */}
                </div> : null}
                {gl?
                 <div className='w-100'>
                     <div className='w-100 d-flex f lex-wrap'>
                        {gallery? gallery[0].g_image.map(item => {
                            return (
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 p-3'>
                                    <div style={{background: `url(${item.image_about})`, backgroundSize: 'cover'}} className='xl:h-72 lg:h-60 md:h-52 sm:h-44 h-60 rounded-xl'></div>
                                </div>
                            )
                        }) : null}
                        {gallery? gallery[1].g_image.map(item => {
                            return (
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 p-3'>
                                    <div style={{background: `url(${item.image_about})`, backgroundSize: 'cover'}} className='xl:h-72 lg:h-60 md:h-52 sm:h-44 h-60 rounded-xl'></div>
                                </div>
                            )
                        }) : null}
                    </div>
                </div> : null}
                {mq?
                 <div className='w-100 d-flex sm:flex-nowrap flex-wrap'>
                    {/* {maqolalar.map(item => {
                        return <div className='col-xl-2 col-lg-2 col-md-4 col-sm-4 d-flex p-2'>
                            <div className='bg-gray-200 d-flex flex-wrap justify-center rounded-lg h-44'>
                                <FaFilePdf className='text-center w-full text-7xl mt-3 text-gray-500'/>
                                <p className='text-sm px-2 text-center'>{item.text}</p>
                            </div>
                        </div>
                    })} */}
                </div> : null}
            </div>
        </div> : null}
        </section>

        <Footer/>
    </div>
  )
}

export default About