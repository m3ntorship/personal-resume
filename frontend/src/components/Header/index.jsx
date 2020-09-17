import React from 'react'
import dots from './assets/dots3.png';
import avatar from './assets/avatar2.png'
import { Button } from './../shared/button/index.js'

export const HeaderComponent = () => {
  return (
    <header className=" w-full border-c100 border-b-4 bg-c400 " >
      <div className="container flex flex-row pt-32 relative  ">

        <div className="w-1/2 mb-48 mt-8 ">

          <div className="  " >
            <span className=" text-c100 font-body text-xlg font-medium leading-1 ">I am</span>
            <h1 className=" text-c200  text-xxlg font-headings" >Mark Parker</h1>
            <p className="text-c300 font-body leading-1 mb-12 " >I am professional UI Designer and Web Developer. I am working
          in UI Park as a UI/UX Designer.</p>
          </div>


          <div className="  " >
            <Button rounded={true} customClassNames='w-56 h-16 mr-4' bgColor="c100" >web services</Button>
            <Button rounded={true} customClassNames='w-56 h-16' bgColor="c200">recent works</Button>
          </div>

        </div>


        <div className="w-1/2 ">
          <img src={dots} alt="" className=" absolute w-64  mb-32 ml-6 -top-20 transform  translate-x-4 " />
          <img src={avatar} alt="" className=" relative rounded-full border-8 border-white ml-16 " />
        </div>




      </div>

    </header>
  )
}