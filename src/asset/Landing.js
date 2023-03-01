import React from 'react'
import '../asset/Landing.css'


function Landing() {
  return (
    <>

      

        <div className="container1 ">

          {/*    ** this is main bar  *   */}

          <div className="logo-part">
            <img src="https://www.linkpicture.com/q/Envoie_logo.png" alt="no image loaded" className="logo" />
          </div>
          <div>
          <nav>
            <ul>
              <li><a href="#">Home</a> </li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Pricing</a></li>

            </ul>
          </nav>
          </div>
          <div className="register">
            <button className="login">
              Login
            </button>
            <button className="Sign-Up">
              SignUp
            </button>
          </div>

        </div>
      



      {/* ***  home ladning   banner *** */}

      <section className="container">
        <div className="  banner">

          <div className="left-part">

            <h1 className='heading1'>The Future Of</h1>
            <h1 className='heading1' id='heading11'> Email</h1>
            <p className='para'>What if someone could add to cart, checkout, schedule a meeting or register for a webinar right from their email?
            </p>
            <button className="Sign-Up">
              Try  for  free 
            </button>
          </div>

          <div className="right-part">

            <img src="https://www.linkpicture.com/q/main_banner_img.png" alt="" />
          </div>
        </div>

      </section>



    </>
  )
}

export default Landing