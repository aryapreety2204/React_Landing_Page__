import '../Scss/Learning.scss'; 
import Introduction from './Introduction';


const Learning = () =>
{
  return (
    <>
    <section className="pt-5">
      <div className="container-fluid learn-section">
        <div className="container pt-5">
          <p className="text-center learn-pera">Curated in three sections covering in-depth study of DS Algo, Computer Science Fundamentals, Low level design and System Design</p>
          <h1 className="text-center learn-head fw-bold">Your Learning Roadmap</h1>
          {/* navbar start */}
           <nav className="">
            <div className="d-flex justify-content-evenly pt-5 nav-section pb-3">
              <a className="active text-decoration-none fs-3 nav-sec">Beginner</a>
              <a className="text-decoration-none fs-3">Intermediate</a>
              <a className="text-decoration-none fs-3">Advance</a>
            </div>
            <div className="line-sec text-center"></div>
           </nav>
          <div className='justify-content-center pt-5 text-center px-5 my-button'>
          <Introduction></Introduction>
            <div className='py-3'>
            <button className="btn text-align-center fs-6 fst-Roboto fw-400px">Download Plan</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Learning;