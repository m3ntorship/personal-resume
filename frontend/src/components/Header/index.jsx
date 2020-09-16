import React from 'react'
import { ReactComponent as Dots } from './assets/dots.svg';
import avatar from './assets/avatar.png'
import '../.././css/main.css'

export const HeaderComponent = () => {
  return (
    <div className="border-b-2 border-c100 " >
      <div className="w-main-container mx-auto ">
        <span className=" text-base text-c100 " >I am</span>
        <h1>Mark parker</h1>
        <p>I am professional UI Designer and Web Developer. I am working i</p>
        <button>my services</button>
        <button>recent works</button>
        <Dots />
        <img src={avatar} alt="My Image" className=" right w-40 h-40  " />
      </div>
    </div>
  )
}