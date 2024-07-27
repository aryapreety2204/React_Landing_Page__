import React, { useState } from "react";
import '../Scss/Footer.scss'

const MyFooter =({question,answer}) =>
{
  const [show,setShow] = useState(false);
  return (
    <>
 <div className="d-flex align-items-center main-head">
 <h3 className="fs-5">{question}</h3>
 <p className="fs-1" onClick={() => setShow(!show)}>{show?" - " : "+"}</p>
 </div>
 {show &&  <p className="answer">{answer}</p>}
    </>
  );
};
export default MyFooter;