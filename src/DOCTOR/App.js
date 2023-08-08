import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router ,Route, Routes, } from "react-router-dom"

import Navbar from './DOCTOR/header/Navbar'
import Home from './DOCTOR/HomePage/Home'
import Upload from './DOCTOR/Uploads/Upload'
import LectureDetails from './DOCTOR/ViewLecture/LectureDetails'
import ViewHome from './DOCTOR/ViewLecture/VeiwHome'



import ViewCrp304 from './DOCTOR/ViewLecture/ViewCrp304'
    //Upload  Lecture
import UploadLectureCrp304 from './DOCTOR/Uploads/UploadLectureCrp304'
import UploadLectureCrp511 from './DOCTOR/Uploads/UploadLectureCrp511'
import UploadLectureCrp405 from './DOCTOR/Uploads/UploadLectureCrp405'
import UploadLectureCrp305 from './DOCTOR/Uploads/UploadLectureCrp305'
import UploadLectureCrp512 from './DOCTOR/Uploads/UploadLectureCrp512'
import UploadLectureCpt503 from './DOCTOR/Uploads/UploadLectureCpt503'
import ViewCrp305 from './DOCTOR/ViewLecture/ViewCrp305'
import ViewCrp405 from './DOCTOR/ViewLecture/ViewCrp405'
import ViewCrp511 from './DOCTOR/ViewLecture/ViewCrp511'
import ViewCrp512 from './DOCTOR/ViewLecture/ViewCrp512'
import ViewCpt503 from './DOCTOR/ViewLecture/ViewCpt503'
import axios from 'axios'
import Contact from './DOCTOR/Contact'
import Home2 from './DOCTOR/Home2'
import Footer from './DOCTOR/Footer/Footer'



function App() {

     const [LectureListCPT503, setLectureListCPT503] =useState([])
     const [LectureListCRP305, setLectureListCRP305] =useState([])
     const [LectureListCRP512, setLectureListCRP512] =useState([])
     const [LectureListCRP511, setLectureListCRP511] =useState([])
     const [LectureListCRP405, setLectureListCRP405] =useState([])
     const [LectureListCRP304, setLectureListCRP304] =useState([])
     
     const [loading, setloading] =useState(false)

     const getLectureCPT503 = async  () => {
      axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/cpt503/")
      .then(res => {
        console.log(res.data)
        setLectureListCPT503(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }
       
     const getLectureCRP511 = async  () => {
      axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp511/")
      .then(res => {
        console.log(res.data)
        setLectureListCRP511(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }

     const getLectureCRP512 = async  () => {
      axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp512/")
      .then(res => {
        console.log(res.data)
        setLectureListCRP512(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }

     const getLectureCRP405 = async  () => {
      axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp405/")
      .then(res => {
        console.log(res.data)
        setLectureListCRP405(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }

     const getLectureCRP304 = async  () => {
      axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp304/")
      .then(res => {
        console.log(res.data)
        setLectureListCRP304(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }

     const getLectureCRP305 = async  () => {
      axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp305/")
      .then(res => {
        console.log(res.data)
        setLectureListCRP305(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }


   useEffect(() => {
        getLectureCPT503()
        getLectureCRP304()
        getLectureCRP305()
        getLectureCRP405()
        getLectureCRP511()
        getLectureCRP512()
        }, [])


  return (
    <div>

    <Router>
            <Navbar/>
       
         <Routes>

           {/* Home Page Routes */}
               <Route path = "/" exact element= {
               <Home LectureListCRP304={LectureListCRP304} 
               loading={loading} 
               LectureListCRP305={LectureListCRP305}
               LectureListCRP405={LectureListCRP405} 
               LectureListCRP511={LectureListCRP511} 
               LectureListCRP512={LectureListCRP512}
               LectureListCPT503={LectureListCPT503} />}> 
               </Route>

               {/* Upload Lecture Routes */}
               <Route path = "/Upload" exact element= {<Upload/>}></Route>
               <Route path = "/upload/Upload-304" exact element= {<UploadLectureCrp304/>}></Route>
               <Route path = "/upload/Upload-305" exact element= {<UploadLectureCrp305/>}></Route>
               <Route path = "/upload/Upload-405" exact element= {<UploadLectureCrp405/>}></Route>
               <Route path = "/upload/Upload-511" exact element= {<UploadLectureCrp511/>}></Route>
               <Route path = "/upload/Upload-503" exact element= {<UploadLectureCpt503/>}></Route>
               <Route path = "/upload/Upload-512" exact element= {<UploadLectureCrp512/>}></Route>
               


               {/* View lecture */}
               <Route path = "/view" exact element= {<ViewHome/>}></Route>
               <Route path = "view/view-304" exact element= {<ViewCrp304 LectureListCRP304={LectureListCRP304} loading={loading}/> }></Route>
               <Route path = "view/View-305" exact element= {<ViewCrp305 LectureListCRP305={LectureListCRP305} loading={loading}/>}></Route>
               <Route path = "view/View-405" exact element= {<ViewCrp405 LectureListCRP405={LectureListCRP405} loading={loading}/>}></Route>
               <Route path = "view/View-511" exact element= {<ViewCrp511 LectureListCRP511={LectureListCRP511} loading={loading}/>}></Route>
               <Route path = "view/View-512" exact element= {<ViewCrp512 LectureListCRP512={LectureListCRP512} loading={loading}/>}></Route>
               <Route path = "view/View-503" exact element= {<ViewCpt503 LectureListCPT503={LectureListCPT503} loading={loading}/>}></Route>

               <Route path = "/lecturedetails/:id" exact element= {<LectureDetails/>}></Route>


                       {/* client home and contact routes */}
               <Route path = "/home" exact element= {<Home2/>}></Route>
               <Route path = "/contact" exact element= {<Contact/>}></Route>




               
         </Routes>
       <Footer/>
         </Router> 

         
      </div>
  )
}

export default App