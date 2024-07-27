import img from '../images/avtar.jpg'
import '../Scss/Card.scss'
const Card = () =>
{
  return (
    <>
    <section className="pt-5 pb-5">
     <div className="container-fluid pt-5">
        <h3 className="text-left ps-5 card-sub-head">Discover if this is the perfect fit for your journey</h3>
        <h1 className="text-left ps-5 card-head fw-bolder">Who Should Seize the Opportunity?</h1>
        <div className="row px-0 ps-5 justify-content-evenly">
           <div className="col-3 py-0 pt-5">
            <div className="card">
              <div className="card-body text-center pt-5">
                <img src={img} className="w-25 rounded-circle border"></img>
                <h3 className='pt-3'>Student</h3>
                <p className="text pt-3">With this course, you can start your career as a full-stack web developer. Ideal to start in 2nd or 3rd year of your Engineering course.</p>
              </div>
            </div>
           </div>

           <div className="col-3 py-0 pt-5">
            <div className="card">
              <div className="card-body text-center  pt-5">
                <img src={img} className="w-25 rounded-circle border "></img>
                <h3 className='pt-3'>Student</h3>
                <p className="text pt-3">With this course, you can start your career as a full-stack web developer. Ideal to start in 2nd or 3rd year of your Engineering course.</p>
              </div>
            </div>
           </div>

           <div className="col-3 py-0 pt-5">
            <div className="card">
              <div className="card-body text-center  pt-5">
                <img src={img} className="w-25 rounded-circle border"></img>
                <h3 className='pt-3'>Student</h3>
                <p className="text pt-3">With this course, you can start your career as a full-stack web developer. Ideal to start in 2nd or 3rd year of your Engineering course.</p>
              </div>
            </div>
           </div>

        </div>
     </div>
    </section>
    </>
  );
};
export default Card ;