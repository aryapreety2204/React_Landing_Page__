import React, { useState } from "react";
import { Question } from "./api";
import MyIntroduction from "./MyIntroduction";



const Introduction = () =>
{
  const [data,setData]=useState(Question);
  return(
    <>
    <section>
      {
        data.map((Elem)=>
        {
          const {id , Question , Answer}= Elem;
          return <MyIntroduction key={id}{...Elem}></MyIntroduction>;
        })
      }
    </section>
    </>
  );
};
export default Introduction;