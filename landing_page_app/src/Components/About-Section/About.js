import '../Scss/About.scss'

const About = () =>
{
  return(
    <>
   <section className="pb-5">
   <div className="container-fluid mt-5">
      <div className="row px-0">
        <div className="col-8 py-0">
          <h3 className="about-head ms-5">About Bootcamp</h3>
          <p className="px-0 about-pera ms-5">Full Stack Blockchain Development course is a live mentor-led certification program with by iNeuron. In this course you will learn the entire stack required to work in Permissionless Blockchain development. This course focuses on latest Blockchain industry standards like Ethereum Blockchain, Solidity, Decentralized Autonomous Organisations, Decentralized Finance, Non Fungible Tokens, Polygon Network, Polkadot Blockchain, Oracles along with complete development stack in Javascript and many more Blockchain concepts.</p>
        </div>
        <div className="col py-0 ps-5">
          <div className="card w-100">
           <div className="card-body">
              <h5 class="card-title card-A">30 Days of UI/UX Bootcamp</h5>
              <li className="mt-3">Certificate of Participation</li>
              <li className="mt-2">Exclusive Courses</li>
              <li className="mt-2">Lifetime Access</li>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <h5 className="fw-bold fs-5">$ 149</h5>
                <button className="btn btn-sm px-4 py-2">Enroll Now</button>
              </div>
           </div>
          </div>
            <div className="pt-3">
              <div  className="card">
                <div className="card-body ">
                  <h5 className="card-2-body-head">Details</h5>
                </div>
             </div>
            </div>
            <div className="row px-0 pt-3 about-sec">
               <div className="col">
                <h5 className="px-0 py-0 fw-light">Duration</h5>
                <h6 className="px-o py-0">30 Days</h6>
               </div>
               <div className="col">
                <h5 className="px-0 py-0 fw-light">Problems</h5>
                <h6 className="px-o py-0">30 Problems</h6>
               </div>
            </div>
        </div>
      </div>
    </div>
   </section>
    </>
  );
};
export default About;