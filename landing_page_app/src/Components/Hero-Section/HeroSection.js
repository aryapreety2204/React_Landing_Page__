import  '../Scss/Hero-Section.scss';
import img from '../images/image 528.png'
import img1 from '../images/unsplash_o1SKqmgSDbg.png'
import img2 from '../images/unsplash_tZc3vjPCk-Q.png'
import img3 from '../images/unsplash_L0nipfx-Ry4.png'

const HeroSection = () =>
{
  return (
<>
<section>
  <div class="container-fluid hero-section">
     <div className="pt-5 Hero">
        <div className="row px-0">
          <div className="col py-0">
            <h1 className="ms-5 fw-bolder hero-head w-100">Design Faster & Better</h1>
            <p  className="ms-5 w-75 fs-3 pt-1 hero-pera">With 30 Days of UI/UX Bootcamp</p>
           <div className="ps-5 hero-btn"> 
              <button className="btn text-align-center fs-6 fst-Roboto fw-400px">Get Started</button>
           </div>
          </div>
          <div class="col py-0">
            <div className="img-fluid image-section">
              <img src={img1} className="w-150 image1"></img>
              <img src={img2} className=" w-5 image2"></img>
              <img src={img3} className=" w-5 image3"></img>
            </div>
          </div>
        </div>
        {/* hero-body start */}
        <div className="row px-0 pt-5 ms-5 mb-5">
          <div className="col py-0">
            <h3 className="w-75 hero-body-head text-align-left">Elevate Your Skills 🔥</h3>
            <p className="hero-body-pera text-align-left">Join Datacode's 30-Day UI/UX Bootcamp for Unmatched Benefits!</p>
          </div>
          <div className="col py-0">
          <img src={img} className="pb-4"></img>
            <h6 className="hero-body-sub-head text-align-left">E30 Days Hands-on</h6>
            <p className="hero-body-pera text-align-left">New problem each day for next 30 days</p>
          </div>
          <div className="col py-0">
          <img src={img} className="pb-4"></img>
          <h6 className="hero-body-sub-head  text-align-left">Personalized Feedback</h6>
            <p className="hero-body-pera text-align-left">Receive personalized feedback and mentorship from professionals </p>
          </div>
          <div className="col py-0">
          <img src={img} className="pb-4"></img>
          <h6 className="hero-body-sub-head text-align-left">Networking Opportunities</h6>
            <p className="hero-body-pera text-align-left">Online shopping for retail sales direct to consumers</p>
          </div>
        </div>
     </div>
  </div>
          {/* navbar start  */}

  <nav class="navbar navbar-expand-lg">
    <div class="container ms-5 border nav-body-section">
        <div class="collapse navbar-collapse justify-content-evenly mb-2 text-capitalize navbar-section">
          <a href>Overview</a>
          <a href>Roadmap</a>
          <a href>Requirements</a>
          <a href>Reviews</a>
          <a href>FAQ</a>   
        </div>
    </div>
</nav>
</section>
</>
  );
};
export default HeroSection;