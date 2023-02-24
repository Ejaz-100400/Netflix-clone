export default function Footer(){
    return(
        <div>
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