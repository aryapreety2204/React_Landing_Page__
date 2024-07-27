import React, { useState } from 'react'
import { question } from './FooterApi';
import MyFooter from './MyFooter';
import '../Scss/Footer.scss'



const Footer = () =>
{
  const [data,setData]=useState(question);
  return (
    <>
    <section className='pt-5'>
      
      <div className='text-center'>
        <h3 className='fs-6 fw-bold foot-sub-head'>Your Questions, Answered</h3>
        <h1 className=' fw-bolder foot-head py-1 fs-1'>Dive into Our FAQs</h1>
      </div>
      <div className="px-5 main-div ">
    {
      data.map((curElem)=>{
        const {id, question, answer }= curElem;
        return <MyFooter key={id} {...curElem}></MyFooter>;
      })
    }
    </div>
    </section>
    </>
  );
};
export default Footer;