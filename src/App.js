import React, { useState } from 'react'
// import LearnUsesState6 from './learnUseState/LearnUsesState6'
// import InLineCss from './learn component/InLineCss'
// import TernaryOperator from './learn component/TernaryOperator'
// import LearnUseState1 from './learnUseState/LearnUseState1'
// import LearnUseState2 from './learnUseState/LearnUseState2'
// import LearnUseState3 from './learnUseState/LearnUseState3'
// import LearnUseState4 from './learnUseState/LearnUseState4'
// import WhyLernUseState5 from './learnUseState/WhyLernUseState5'
// import LearnUseEffect1 from './LearnUseEffect.jsx/LearnUseEffect1'
// import LearnCleanUpFunction1 from './learn component/LearnCleanUpFunction.jsx/LearnCleanUpFunction1'
// import ReadContact from './contact/ReadContact'
// import ContactForm from './contact/ContactForm'
// import UpdateForm from './contact/UpdateForm'
// import ReadSpecificContact from './contact/ReadSpecificContact'
// import PostHouseData from './House/PostHouseData'
// import ReadAll from './House/ReadAll'
// import ReadDetail from './House/ReadDetail'
// import UpdateHouse from './House/updateHouse'
// import { NavLink, Route, Routes } from 'react-router-dom'
// import Home from './RouterComponents/Home'
// import Contact from './RouterComponents/Contact'
// import About from './RouterComponents/About'
// import LearnToGetParams from './RouterComponents/LearnToGetParams'
// import FormOne from './Blog/FormOne'
// import ReadBlog from './Blog/ReadBlog'
// import ReadSpecificBlog from './Blog/ReadSpecificBlog'
// import UpdateBlog from './Blog/UpdateBlog'
// import LearnUseRef1 from './LearnUseRef/LearnUseRef1'
// import PassWordHideAndShow from './learn component/PassWordHideAndShow'
import Application from './Application'
// import LearnUseState7 from './learnUseState/LearnUseState7'




const App = () => {
  let [show, setShow]=useState(true) 
  return (
    <div>

      {/* <InLineCss></InLineCss> */}
      {/* <TernaryOperator></TernaryOperator> */}
      {/* <LearnUseState1></LearnUseState1> */}
      {/* <LearnUseState2></LearnUseState2> */}
      {/* <LearnUseState3></LearnUseState3> */}
      {/* <LearnUseState4></LearnUseState4> */}
      {/* <WhyLernUseState5></WhyLernUseState5> */}
      {/* <LearnUsesState6></LearnUsesState6> */}
      {/* <LearnUseState7></LearnUseState7> */}
      {/* <LearnUseEffect1></LearnUseEffect1> */}
      {/* { show ? <LearnCleanUpFunction1></LearnCleanUpFunction1>:null} */}
      {/* <ReadContact></ReadContact> */}
      {/* <ContactForm></ContactForm> */}
      {/* <UpdateForm></UpdateForm> */}
      {/* <PostHouseData></PostHouseData> */}
      {/* <ReadSpecificContact></ReadSpecificContact> */}
      {/* <ReadAll></ReadAll> */}
      {/* <ReadDetail></ReadDetail> */}
      {/* <UpdateHouse></UpdateHouse> */}
      {/* <FormOne></FormOne> */}
      {/* <ReadBlog></ReadBlog> */}
      {/* <ReadSpecificBlog></ReadSpecificBlog> */}
      {/* <UpdateBlog></UpdateBlog> */}

      
      {/* <NavLink to="/"style={{marginLeft:"20px"}}>Home</NavLink>
      <NavLink to="/contact"style={{marginLeft:"20px"}}>contact</NavLink>
      <NavLink to="/about"style={{marginLeft:"20px"}}>About</NavLink> */}
      {/* <Routes>
    
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/a/:b" element= {<div>this is a and b</div>}> </Route> 
        <Route path="*" element= {<div>page not found</div>}> </Route> 
        <Route path="a/:id1/b/:id2"element={<LearnToGetParams></LearnToGetParams>}></Route>

      </Routes> */}
        {/* <button
          onClick={()=>{
          setShow(false)
          }}
          >
            hide component
        </button> */}
        {/* <NavLink to="contact/create"style={{marginLeft : "10px"}} >create contact</NavLink>
        <NavLink to="/contact" style={{marginLeft : "10px"}}>Read all contact</NavLink>
        <NavLink to="houses/create"style={{marginLeft : "10px"}} >create houses</NavLink>
        <NavLink to="/houses" style={{marginLeft : "10px"}}>Read all houses</NavLink>
        <Routes>
          <Route path='/contact/create' element={<ContactForm></ContactForm>}></Route>
          <Route path='/contact' element={<ReadContact></ReadContact>}></Route>
          <Route path='/contact/:contactId' element={<ReadSpecificContact></ReadSpecificContact>}></Route>
          <Route path='/houses/create' element={<PostHouseData></PostHouseData>}></Route>
          <Route path='/houses' element={<ReadAll></ReadAll>}></Route>
          <Route path='/houses/:houseId' element={<ReadDetail></ReadDetail>}></Route>
        </Routes> */}
        
{/* <LearnUseRef1></LearnUseRef1> */}
{/* <PassWordHideAndShow></PassWordHideAndShow> */}
<Application></Application>
    </div>
  )
}

export default App