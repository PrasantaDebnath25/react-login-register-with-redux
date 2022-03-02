import React from 'react'   
import './Footer.css'
import imgs from '../../Layout/bar.png'
    function Footer () {
        
        return (

        <footer class="section footer-classic context-dark bg-image" >
        <div class="container">
        {/* <div class="row">
		<div class="span4 well" >
            <form accept-charset="UTF-8" action="" method="POST">
                <textarea class="span4" id="new_message" name="new_message"
                placeholder="Type in your message" rows="5"></textarea>
                <h6 class="pull-right">320 characters remaining</h6>
                <button class="btn btn-info" type="submit">Post New Message</button>
            </form>
        </div>
	</div> */}


          <div class="row row-30">
            <div class="col-md-4 col-xl-5">
              <div class="pr-xl-4"><a class="brand" href="index.html"><img class="brand-logo-light" src={imgs} alt="" width="100" height="60" srcset="images/agency/logo-retina-inverse-280x74.png 2x" /></a>
                <p>This i.</p>
                
                <p class="rights"><span>© </span><span class="copyright-year">2020</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div class="col-md-4">
              <h5>Contacts</h5>
              <dl class="contact-list">
                <dt>Address:</dt>
                <dd>798 South Park Avenue</dd>
              </dl>
              <dl class="contact-list">
                <dt>email:</dt>
                <dd><a href="mailto:#">prasanta@gmail.com</a></dd>
              </dl>
              <dl class="contact-list">
                <dt>phones:</dt>
                <dd><a href="tel:#">9685632560</a> <span>or</span> <a href="tel:#">9865321545</a>
                </dd>
              </dl>
            </div>
            <div class="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul class="nav-list">
                <li><a href="#">Profile</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacts</a></li>
                
              </ul>
            </div>
          </div>
        </div>
        <div class="row no-gutters social-container">
          <div class="col"><a class="social-inner" href="#"><span class="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
          <div class="col"><a class="social-inner" href="#"><span class="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
          <div class="col"><a class="social-inner" href="#"><span class="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
          <div class="col"><a class="social-inner" href="https://www.google.com/"><span class="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
        </div>
      </footer>
           
        )
    }
export default  Footer;