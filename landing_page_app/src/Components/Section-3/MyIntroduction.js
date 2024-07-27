import React, { useState } from "react";
import { Question } from "./api";
import '../Scss/Learning.scss';

const MyIntroduction = ({Question, Answer})=>
{
  const [show,setshow] = useState(false);
  return(
    <>
      <div className="d-flex into-section">
        <p  className="fs-1" onClick={()=> setshow(!show)} >{show?" - " : "+"}</p>
        <h3 className="my-head fs-5">{Question}</h3>
      </div>
      <div className="into-part-A">
      {show && <p  className="Answer">{Answer}</p>}
      </div>

    </>
  );
}
export default MyIntroduction;