import React from 'react'
import { Link } from 'react-router-dom';
export default function Login(){
    const[emailstate,setemailstate]=React.useState(false);
    return(
        <div>
        <header className="d-flex position-absolute justify-content-between align-items-center container-fluid pl-2 pr-2">
          <div className="netflix-logo">
              <Link to='/home'>
                <img src="/assets/img/netflixlogo.png" className="netflix" />
              </Link>
          </div>
          <div className="lang-sign-in d-flex position-relative align-items-center">
            <div className="position-relative globe">
              <i className="fa-solid fa-globe text-light" />
            </div>
            <select name="lang" className="header-lang text-light text-center">
              <option name="English">English</option>
              <option name="English">हिन्दी</option>
            </select>
            <input type="button" defaultValue="Sign In" className="btn sign-in" />
          </div>
        </header>
        {/* MAIN HOME PG */}
        <main className="main-home-pg d-grid p-5">
          <div className="position-relative main--content text-center">
            <div className="text-light">
              <h1>Unlimited movies, TV shows and more.</h1>
              <span>Watch anywhere. Cancel anytime.</span><br /><br />
              <span>Ready to watch? Enter your email to create or restart your membership.</span>
            </div>
            <div className="form-group d-flex align-items-center justify-content-center mt-3">
              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  
                name='email' required/>
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <button type="submit" className="btn getstarted">
                <Link to='/browse'className='text-decoration-none text-light'>
                    Get Started <i className="fa-solid fa-chevron-right fa-1x" />
                </Link>
               </button>
            </div>
            <label htmlFor="warning" className='text-warning pt-3'>Email id is required</label>
          </div>
        </main>
        <div className="bor" />
        <section className="video-container pt-5 pl-4 pr-4 d-grid">
          {/* VIDEO SEC-1 */}
          <div className="container  video-sec d-flex position-relative text-light justify-content-around align-items-center">
            <article className="video-container-content">
              <h2 className="content-title">Enjoy on your TV.</h2>
              <span className="content-par w-25">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and <br />more.</span>
            </article>
            <div className="img-container position-relative overflow-hidden">
              <video autoPlay playinline muted loop className="position-absolute tvscreen">
                <source src="/assets/img/video-tv1.m4v" type="video/mp4" />
              </video>
              <div className="tvimg">
                <img src="/assets/img/tv.png" className="position-relative" />
              </div>
            </div>
          </div>
        </section>
        <div className="bor" />
        {/* VIDEO SEC 2 */}
        <section className="video-container pt-5 d-grid">
          <div id="video-sec-even" className="container p-2 video-sec d-flex position-relative text-light justify-content-around align-items-center">
            <div className="img-container position-relative">
              <div className="tvimg position-relative">
                <img src="/assets/img/mobile-0819.jpg" className="position-relative" />   
              </div>
              <div className="img-box position-relative d-flex align-items-center justify-content-center">
                <img src="/assets/img/boxshot.png" width={40} />
                <div className="img-box-name">
                  <span>Stranger Things</span>
                  <br />
                  <span className="text-primary">Downloading</span>
                </div>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" width={60} />
              </div>
            </div>
            <article className="video-container-content">
              <h2 className="content-title">Download your shows to watch offline.</h2>
              <span className="content-par w-25">Save your favourites easily and always have something to watch.</span>
            </article>
          </div>
        </section>
        <div className="bor" />
        <section className="video-container pt-5 d-grid">
          {/* VIDEO SEC-3 */}
          <div className="container p-2 video-sec d-flex position-relative text-light justify-content-around align-items-center">
            <article className="video-container-content">
              <h2 className="content-title">Watch everywhere.</h2>
              <span className="content-par w-50">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
            </article>
            <div className="img-container position-relative overflow-hidden">
              <video autoPlay playinline muted loop className="position-absolute" id="video2">
                <source src="/assets/img/video-devices-in.m4v" type="video/mp4" />
              </video>
              <div className="tvimg">
                <img src="/assets/img/device-pile-in-removebg-preview.png" className="position-relative" />
              </div>
            </div>
          </div>
        </section>
        <div className="bor" />
        <section className="video-container pt-5 d-grid">
          {/* VIDEO SEC-4 */}
          <div id="video-sec-even" className="container p-2 video-sec d-flex position-relative text-light justify-content-around align-items-center">
            <div className="img-container position-relative">
              <div className="tvimg position-relative">
                <img src="/assets/img/children.png" className="position-relative" />   
              </div>
            </div>
            <article className="video-container-content">
              <h2 className="content-title">Create profiles for children.</h2>
              <span className="content-par w-25">Save your favourites easily and always have something to watch.</span>
            </article>
          </div>
        </section>
        <div className="bor" />
        {/* FREQ QUESTION SEC */}
        <section className="frequent-ques pt-5 d-flex">
          <h2 className="content-title text-center text-light">Frequently Asked Question</h2>
          <div className="accordion container-fluid pt-4" id="accordionExample">
            <div className="accordion accordion-flush position-relative" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    What is Netflix?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br /><br />
                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</div>
                </div>
              </div>
              <div className="accordion-item mt-2">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    How much does Netflix cost?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</div>
                </div>
              </div>
              <div className="accordion-item mt-2">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Where can I watch Netflix?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br /><br />
                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</div>
                </div>
              </div>
              <div className="accordion-item mt-2">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    How do I cancel?
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div>
                </div>
              </div>
              <div className="accordion-item mt-2">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    Where can I watch Netflix?
                  </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-collapseFive" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>
                </div>
              </div>
              <div className="accordion-item mt-2">
                <h2 className="accordion-header" id="flush-headingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    Is Netflix good for kids?
                  </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-collapseSix" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br /><br />
                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group d-flex align-items-center justify-content-center  pb-5">
            <span className="text-center p-3 mt-2 text-light freq-desc">Ready to watch? Enter your email to create or restart your membership.</span>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <button type="submit" className="btn getstarted">Ge Started <i className="fa-solid fa-chevron-right" /></button>
          </div>
        </section>
        <div className="bor" />
        {/* FOOTER */}
        <footer className="footer-section p-4">
          <div className="footer container position-relative d-grid">
            <span>Questions? Call 000-800-919-1694</span>
            <div className="footer-sec-part desk">
              <ul className="list-unstyled pt-4">
                <li className="p-1">FAQ</li>
                <li className="p-1">Investor Relations</li>
                <li className="p-1">Privacy</li>
                <li className="p-1">Speed Test</li>
              </ul>
              <ul className="list-unstyled pt-4">
                <li className="p-1">Help Centre</li>
                <li className="p-1">Jobs</li>
                <li className="p-1">Cookie Preferences</li>
                <li className="p-1">Legal Notices</li>
              </ul>
              <ul className="list-unstyled pt-4">
                <li className="p-1">Account</li>
                <li className="p-1">Ways to watch</li>
                <li className="p-1">Corporate Information</li>
                <li className="p-1">Only Netflix</li>
              </ul>
              <ul className="list-unstyled pt-4">
                <li className="p-1">Ways to watch</li>
                <li className="p-1">Corporate Information</li>
                <li className="p-1">Only Netflix</li>
              </ul>
            </div>
            {/* mobile part */}
            <div className="footer-sec-part mob">
              <ul className="list-unstyled pt-4">
                <li className="p-1">FAQ</li>
                <li className="p-1">Account</li>
                <li className="p-1">Investor Relations</li>
                <li className="p-1">Ways to Watch</li>
                <li className="p-1">Privacy</li>
                <li className="p-1">Corporate Information</li>
                <li className="p-1">Speed Test</li>
                <li className="p-1">Only on Netflix</li>
              </ul>
              <ul className="list-unstyled pb-4">
                <li className="p-1">Help Centre</li>
                <li className="p-1">Media Centre</li>
                <li className="p-1">Jobs</li>
                <li className="p-1">Cookie Preferences</li>
                <li className="p-1">Contact Us</li>
                <li className="p-1">Legal Notices</li>
              </ul>
            </div>
            <div className="position-relative align-items-center">
            </div>
            <div className id="language-select">
              <select name="lang" className="footer-lang col-2-sm p-2 d-flex"> 
                <option name="English">English</option>
                <option name="Hindi">हिन्दी</option>
              </select>
            </div>
            <span className="mt-4">Netflix India</span>
          </div>  
        </footer>
      </div>
    )
}