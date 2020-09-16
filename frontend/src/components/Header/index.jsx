import React from 'react'
import dots from './assets/dots.png';
import avatar from './assets/avata1r.png'
import { Button } from './../shared/button/index.js'

export const HeaderComponent = () => {
  let avatarImg = {
    backgroundImage: `url("${avatar}")`
  }
  return (
    <div className="bg-c400 border-b-2 border-c100 " >
      <div className="w-main-container mx-auto flex flex-row pt-56 ">

        <div className="mb-56 ">

          <div className="  " >
            <span className=" text-lg font-body-Rubik font-bold text-c100 mb-4 " >I am</span>
            <h1 className=" text-xxlg font-bold font-headings mb-4 " >Mark Parker</h1>
            <p className=" text-base font-body leading-1 w-4/5 mb-4 " >I am professional UI Designer and Web Developer. I am working
          in UI Park as a UI/UX Designer.</p>
          </div>


          <div className="  " >
            <Button rounded={true} customClassNames='w-56 h-16 mr-4 uppercase ' bgColor="c100" >web services</Button>
            <Button rounded={true} customClassNames='w-56 h-16 uppercase ' bgColor="c200">recent works</Button>
          </div>

        </div>

        <div className=" ml-4 mb-4  p-4 t ">
          <div className="left-4 absolute z-0 top-10" >
            <img src={dots} alt="" className=" " />
          </div>
          <div className=" z-10 " >
            <img src={avatar} alt="" className=" w-full h-full rounded-full top-2 z-10  border-white border-8 right-0 " />
          </div>
        </div>



      </div>
    </div>
  )
}