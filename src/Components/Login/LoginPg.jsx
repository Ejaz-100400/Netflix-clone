import React from "react"
import { Link } from "react-router-dom"
export default function LoginPg(){
  const[email,setemail]=React.useState('')
  const[pwd,setpwd]=React.useState('')
  const[alertemail,setalertemail] = React.useState(false)
  const[alertpwd,setalertpwd] = React.useState(false)

  function handleemail(event){
    const value = event.target.value;
    setemail(value);
    if(value==='' ||(!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value))){
      setalertemail(true)
    }
    else{
      setalertemail(false)
    }
  }
  function handlepwd(event){
    const value = event.target.value;
    setpwd(value);
    if(value===''|| value.length<4){
      setalertpwd(true)
    }
    else{
      setalertpwd(false);
    }
  }
  function handlesubmitbtn(e){
    if(email && pwd){

    }
  }
  console.log(alertemail)
 
    return(
        <div className="loginscreen">
            <header className="d-flex position-absolute justify-content-between align-items-center container-fluid pl-2 pr-2">
                <div className="netflix-logo">
                    <Link to='/'>
                        <img src="/assets/img/netflixlogo.png" className="netflix" />
                    </Link>
                </div>
            </header>
            <main className="main-home-pg d-grid p-5 position-relative">
                <section className="login-section d-flex flex-column gap-1 justify-content-center align-items-center pt-5  px-5">
                    <h3 className="text-left text-light ">Sign In</h3>

                    <div className="form-floating w-100">
                        <input type="email"  className="form-control login" id="floatingInput" placeholder="name@example.com"  name='email' 
                             value={email}
                             onChange={handleemail}
                             onBlur={handleemail}
                             required/>
                        <label htmlFor="floatingInput">Email</label>
                    </div>

                    <label  htmlFor="warning" className='text-warning text-left py-2 alert-box'
                    style={{opacity:alertemail?'1':'0'}}>Please enter a valid email address.</label>

                    <div className="form-floating w-100">
                        <input type="password" className="form-control login" id="floatingInput" placeholder="name@example.com"  name='password' 
                        value={pwd}
                        onChange={handlepwd}
                        onBlur={handlepwd}
                        required/>
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    <label htmlFor="warning" className='text-warning text-left py-2 alert-box mx-2'
                    style={{opacity:alertpwd?'1':'0'}}>Your password must contain between 4 and 60 characters.</label>
                    
                    <Link to='/browse' className="btn sign-in text-decoration-none w-100 py-3">
                        <button style={{backgroundColor:'#E50914',border:'none',color:'white'}} className='fw-bold'>
                            Sign In
                        </button>
                    </Link>
                    <div className="d-flex gap-2 align-items-center justify-content-center">
                    <span style={{color:'silver'}}>New to Netflix?</span><Link to='/' className="text-light mb-1 text-decoration-none"><span>Sign up Now</span></Link>
                    </div>
                    <span style={{color:'silver'}} className='pt-5'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                </section>   
            </main>
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