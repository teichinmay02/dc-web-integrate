import React from 'react'
import { Link } from 'react-router-dom'
import img from "../dc.png";


const home  = () => {
  
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="css/glider.min.css" />
          <link rel="stylesheet" href="css/main.css" />
          <link rel="stylesheet" href="css/styles.css" />
          <title>Document</title>
          <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css" />
          <header>
            <nav className="navbar" style={{backgroundColor: 'rgba(0,0,0,0.7)'}}>
              <img src="../assests/logo.png" alt="Logo" />
              <ul>
                <li><a href="#about" className="about">About</a>
                  {/* <ul class="dropdown">
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Mission</a></li>
                  <li><a href="#">Vision</a></li>
                </ul> */}
                </li>
                <li><a href="#services">Explore</a>
                  <ul className="dropdown">
                    <li><a href="#">image forensics</a></li>
                    <li><a href="#">audio forensics</a></li>
                    <li><a href="#">video forensics</a></li>
                  </ul>
                </li>
                <li><a href="#resources">Resources</a>
                  <ul className="dropdown">
                    <li><a href="#red-teaming">Red Team</a></li>
                    <li><a href="#forensics">Forensics</a></li>
                  </ul>
                </li>
                {/* <li><a href="#contact">Contact</a>
                     
                  </li> */}
              </ul>
              <div className="search">
                <a href="#" className="button">24x7 Cyber helpline</a>
              </div>
            </nav>
          </header>
          <div>
            <div className="glider-contain">
              <div className="count" id="gradient">
                <div className="count-left">
                  <p className="custom-title">Embark on the future with deepcytes</p>
                  <p>
                    Safeguarding Your Cyber Presence
                  </p>
                  <p id="contact-us">
                    In a world where the digital horizon transforms in the blink of an eye, your entire cyber presence is under a 
                    relentless siege. A new epoch in cybersecurity has dawned – and it's a revolution that defies all expectations. 
                    Welcome to the universe of DeepCytes, the forefront of technological safeguarding against the ceaseless tide of 
                    cyber vulnerabilities.
                    <br />
                  </p>
                </div>
                <div className="count-right">
                  <img src="../assests/count-on-us.svg" alt="Count on us" width="550px" loading="lazy" />
                </div>
              </div>
              <div id="services" style={{paddingTop: '92px'}}>
                <center>
                  <h1 className="serviceName" style={{color: 'white', fontSize: '40px'}}>Services</h1>
                </center>
                <div className="glider">
                  <figure>
                    <h1 className="serviceName">Image <br />Forensics</h1>
                    <section className="details">
                      Image forensics involves using tools to determine if a picture has been altered or is real.
                    </section>
                  </figure>
                  <figure>
                    <h1 className="serviceName">Video &amp; Audio <br />Forensics</h1>
                    <section className="details">
                      Video and audio forensics involves investigating and analyzing videos and audio recordings to uncover any 
                      tampering, alterations, or authenticity issues, much like digital detective work for audiovisual content.
                    </section>
                  </figure>
                  <figure>
                    <h1 className="serviceName">Memory <br />Forensics</h1>
                    <section className="details" style={{marginTop: '50px'}}>
                      {/* Added Extra Margin Because Title is Single Word */}
                      memory forensics info
                    </section>
                  </figure>
                </div>
              </div>
              <div className="resources" id="resources" style={{paddingTop: '250px'}}>
                <div className="forensics-tools" id="forensics">
                  <center>
                    <h1 className="serviceName" style={{color: 'white', fontSize: '40px'}}>Resources</h1>
                  </center>
                  <center>
                    <h1 className="serviceName" style={{color: 'white', fontSize: '25px'}}>Forensics Tools</h1>
                  </center>
                  <div className="resources-content">
                    <p style={{fontSize: '25px'}}>
                      <font style={{color: 'aqua'}}>Cyber Forensics</font>
                      <font style={{color: 'white'}}>
                        uses digital skills to uncover secrets,
                        track down cyber criminals, and solve virtual mysteries in the electrifying world of
                        cybersecurity.
                        It's a thrilling blend of investigating, gathering intel, s and outsmarting bad guys in
                        the
                        digital universe!
                      </font>
                    </p>
                    <p style={{fontSize: '25px'}}>
                      <font style={{color: 'aqua'}}>1. Image Forensics</font>
                      <font style={{color: 'white'}}>
                        Image forensics involves using tools to determine if a picture has been altered or is
                        real.
                      </font>
                    </p>
                    <div className="container">
                      <div className="card-container">
                        <figure className="card" id="card1">
                          {/* Content of the card */}
                          <img src="../assests/tools/sherlock.png" alt="Image 2" className="image" />
                        </figure>
                        <figure className="card" id="card2">
                          {/* Content of the card */}
                          <img src="../assests/tools/Ghiro.png" alt="Image 2" className="image" />
                        </figure>
                      </div>
                      <div className="card-container">
                        <figure className="card" id="card3">
                          {/* Content of the card */}
                          <img src="../assests/tools/ExifTool.png" alt="Image 2" className="image" />
                        </figure>
                        <figure className="card" id="card4">
                          {/* Content of the card */}
                          <img src="../assests/tools/Steghide.png" alt="Image 2" className="image" />
                        </figure>
                      </div>
                      <div className="info-container">
                        <div className="info" id="infoBox1">
                          {/* Information for card 1 */}
                          <h1>sherloq</h1>
                          <img src="../assests/load-unscreen.gif" style={{width: '300px'}} />
                          <br /> <h3>Unravel mysteries in digital evidence with this powerful forensic analysis tool.</h3>
                          <p />
                        </div>
                        <div className="info" id="infoBox2">
                          {/* Information for card 2 */}
                          Ghiro
                          <br />
                          <img src="../assests/tools/Ghiro.png" width="300px" height="300px" alt="" />
                          <br />
                          Illuminate the hidden details in your images and uncover the truth.
                          <br /><br />
                          <a href="#" className="button">Use Tool</a>
                          <p />
                        </div>
                        <div className="info" id="infoBox3">
                          {/* Information for card 3 */}
                          ExifTool
                          <p />
                        </div>
                        <div className="info" id="infoBox4">
                          {/* Information for card 4 */}
                          StegHide
                          <br />
                          <img src="../assests/tools/Steghide.png" width="300px" height="300px" alt="" />
                          <br />
                          Discover concealed information by detecting and extracting data hidden within digital media.
                          <br /><br />
                          <a href="#" className="button">Use Tool</a>
                          <p />
                        </div>
                      </div>
                    </div>
                    <p style={{fontSize: '25px'}}>
                      <font style={{color: 'aqua'}}>2. Video &amp; Audio Forensics</font>    
                      <font style={{color: 'white'}}>
                        Video and audio forensics involves investigating and analyzing videos and audio
                        recordings
                        to uncover any
                        tampering, alterations, or authenticity issues, much like digital detective work for
                        audiovisual content.
                      </font>
                    </p>
                    <div className="ffmpeg_container">
                      <div className="ffmpeg_card-container">
                        <figure className="ffmpeg_card" id="ffmpeg_card">
                          {/* Content of the FFmpeg card */}
                          <img src="../assests/tools/FFmpeg.png" alt="FFmpeg Image" className="image" />
                        </figure>
                      </div>
                      <div className="ffmpeg_info-container">
                        <div className="ffmpeg_info" id="ffmpeg_infoBox">
                          {/* Information for the FFmpeg card */}
                          The Swiss Army knife for multimedia forensics, capable of handling various audio and video formats.
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="red-teaming-tools" id="red-teaming">
                  <center>
                    <h1 className="serviceName" style={{color: 'white', fontSize: '25px'}}>Red Teaming Tools</h1>
                  </center>
                  <div className="red-teaming-tools-content">
                    <p style={{fontSize: '25px'}}>
                      <font style={{color: 'aqua'}}>Red Teaming</font>
                      <font style={{color: 'white'}}>
                        is the ultimate cyber adventure where you think like the attacker, probing systems for
                        weaknesses, and
                        launching simulated attacks to help organizations defend against real-world threats,
                        pushing
                        systems to
                        their limits to ensure they stay unbreakable.
                      </font>
                    </p>
                    <p style={{fontSize: '25px'}}>
                      <font style={{color: 'aqua'}}>1. Web VAPT:</font>
                      <font style={{color: 'white'}}>
                        Making websites safer by finding security weaknesses and suggesting fixes for
                        safeguarding
                        your websites from external attacks
                      </font>
                    </p>
                    <div className="webvapt_cont">
                      <div className="webvapt_card">
                        <figure className="webvapt_image" id="webvapt_image">
                          {/* Content of the FFmpeg card */}
                          <img src="../assests/tools/WhatWeb.png" alt="FFmpeg Image" className="image" />
                        </figure>
                        <figure className="webvapt_image" id="webvapt_image">
                          {/* Content of the FFmpeg card */}
                          <img src="../assests/tools/SQLmap.png" alt="FFmpeg Image" className="image" />
                        </figure>
                      </div>
                      <div className="webvapt_info_cont">
                        <div className="webvapt_info" id="webvapt_info">
                          {/* Information for the FFmpeg card */}
                          <p>ffmpeg</p>
                          <p />
                        </div>
                        <div className="webvapt_info" id="webvapt_info">
                          {/* Information for the FFmpeg card */}
                          <p>ffmpeg</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    {/*    
                      <figure class="web-vapt-icons">
                          <img src="../assests/tools/WhatWeb.png" width="200px" height="200px" alt="">
                      </figure>
                      <figure class="web-vapt-icons">
                          <img src="../assests/tools/SQLmap.png" width="300px" height="300px"  alt="">
                      </figure> */}
                    <p style={{fontSize: '25px'}}>
                      <font style={{color: 'aqua'}}>2. Mobile VAPT:</font>
                      <font style={{color: 'white'}}>
                        Ensuring mobile apps are well-protected from cyber threats through expert testing and
                        security enhancements.
                      </font>
                    </p>
                    <div className="mobile_vapt_container">
                      <div className="mobile_vapt_card-container">
                        <figure className="mobile_vapt_card" id="mobile_vapt_card5">
                          {/* Content of the mobile_vapt card */}
                          <img src="../assests/tools/MOBsf.png" alt="mobile_vapt Image" className="image" />
                        </figure>
                        <figure className="mobile_vapt_card" id="mobile_vapt_card5">
                          {/* Content of the mobile_vapt card */}
                          <img src="../assests/tools/MOBsf.png" alt="mobile_vapt Image" className="image" />
                        </figure>
                      </div>
                      <div className="mobile_vapt_info-container">
                        <div className="mobile_vapt_info" id="mobile_vapt_infoBox5">
                          {/* Information for the mobile_vapt card */}
                          <p />
                        </div>
                        <div className="mobile_vapt_info" id="mobile_vapt_infoBox5">
                          {/* Information for the mobile_vapt card */}
                          <p />
                        </div>
                      </div>
                    </div>
                    <p style={{fontSize: '25px'}}>
                      <font style={{color: 'aqua'}}>3. API VAPT:</font>
                      <font style={{color: 'white'}}>
                        Checking the safety of the "doors" that let different apps communicate, so they can't be
                        opened by malicious intruders.
                      </font>
                    </p>
                    <div className="api_vapt_container">
                      <div className="api_vapt_card-container">
                        <figure className="api_vapt_card" id="api_vapt_card5">
                          {/* Content of the api_vapt card */}
                          <img src="../assests/tools/jest.png" alt="api_vapt Image" className="image" />
                        </figure>
                      </div>
                      <div className="api_vapt_info-container">
                        <div className="api_vapt_info" id="api_vapt_infoBox5">
                          {/* Information for the api_vapt card */}
                          <p />
                        </div>
                      </div>
                    </div>
                    <p style={{fontSize: '25px'}}>
                      <font style={{color: 'aqua'}}>4 Source Code Review: </font>
                      <font style={{color: 'white'}}>
                        Inspect the secret recipe of software to ensure it's safe and secure from potential
                        attacks.
                      </font>
                    </p>
                    <div className="src_code_container">
                      <div className="src_code_card-container">
                        <figure className="src_code_card" id="src_code_card5">
                          {/* Content of the src_code card */}
                          <img src="../assests/tools/jest.png" alt="src_code Image" className="image" />
                        </figure>
                      </div>
                      <div className="src_code_info-container">
                        <div className="src_code_info" id="src_code_infoBox5">
                          {/* Information for the src_code card */}
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="about" className="video-container">
                <video width="1300px" height="auto">
                  <source src="../assests/dummy.mp4" type="video/map4" />
                </video>
                <div className="video-container-caption">
                  <div className="section1">
                    <video autoPlay loop muted poster className="back-video" width="100%">
                      <source src="../assests/dummy.mp4" type="video/mp4" />
                    </video>
                    <div className="text-container1">
                      <h1>About Deepcytes</h1>
                      <div className="aboutdc" style={{color: 'white'}}>
                        <h2 className="serviceName" style={{fontSize: '50px', fontFamily: '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif', color: 'white'}}>
                          Welcome to Our Cutting - Edge Cyber Forensics Website.</h2>
                        <p style={{fontSize: '30px'}}>where we unleash the power of digital investigation to unravel the truth
                          in a world clouded by deception. </p>
                        {/* Added Extra Margin Because Title is Single Word */}
                        <h5 style={{fontSize: '20px'}}> Our state-of-the-art Cyber Forensics platform harnesses digital
                          investigation to unveil truths in a world veiled by deception. As a Cyber Intelligence
                          powerhouse, we proudly present a range of ingenious tools empowering investigators to decipher
                          enigmas within the digital realm. Our toolkit spans diverse expertise including: <br />
                          <ul>
                            <li>
                              <font style={{color: 'aqua'}}>Image Forensics</font> —unveiling subtle manipulations in
                              images
                            </li>
                            <li>
                              <font style={{color: 'aqua'}}>Video &amp; Audio Forensics</font>, delving into audiovisual
                              content to expose tampering or authenticity issues.
                            </li>
                            <li>
                              <font style={{color: 'aqua'}}>Web, Mobile, and API VAPT</font>—fortifying digital
                              landscapes, securing websites, apps, and communication channels against lurking cyber
                              threats.
                            </li>
                            <li>
                              <font style={{color: 'aqua'}}>Source Code Review</font>—delving into software's core to
                              ensure utmost safety.
                            </li>
                          </ul>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button class="glider-prev">
                  <i class="uil uil-arrow-circle-left"></i>
              </button> */}
              {/* <button class="glider-next">
                  <i class="uil uil-arrow-circle-right"></i>
              </button> */}
              {/* <div id="dots" class="glider-dots" role="tablist"></div> */}
              <div className="count">
                <div className="count-left">
                  <p className="custom-title">YOU CAN COUNT ON US</p>
                  <img src="../assests/count-on-us.svg" alt="Count on us" width="550px" loading="lazy" />
                </div>
                <div className="count-right">
                  <p>
                    As a cybersecurity company, we promise to be at the forefront of the ever-changing threat landscape,
                    constantly updating and evolving our strategies to keep your digital assets secure. Trust us to stay
                    vigilant and proactive in safeguarding your online presence.
                  </p>
                  <p id="contact-us">
                    Really excited to get in touch with us? <br />
                    Send us an email at info@deepcytes.io <br />
                    Or follow us at @deepcytes on Facebook and Instagram <br />
                    for updates and news. <br />
                  </p>
                </div>
              </div>
              <div className="social-cards">
                <div className="email" style={{color: 'white'}}>send us an email at info@deepcytes.io</div>
                <div className="insta" />
                <div className="facebook" />
              </div>
              <div className="footer-divider" />
              <footer className="blue-footer">
                &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
                <div className="icon-container">
                  <a href="#"><img src="icon1.jpeg.jpeg" width="100px" height="100px" alt="Icon 1" /></a>
                  <a href="#"><img src="icon2.jpeg.jpeg" alt="Icon 2" /></a>
                  <a href="#"><img src="icon3.jpeg.jpeg" alt="Icon 3" /></a>
                  <a href="#"><img src="icon4.jpeg.jpeg" alt="Icon 4" /></a>
                  <a href="#"><img src="icon5.jpeg.jpeg" alt="Icon 5" /></a>
                  =======
                  <div className="footer-content">
                    <div className="footer-logo">
                      <img src="logofooter.png.png" alt="Logo" className="logo" />
                    </div>
                    <div className="icon-container">
                      <a href="#"><img src="icon1.jpeg.jpeg" alt="Icon 1" /></a>
                      <a href="#"><img src="icon2.jpeg.jpeg" alt="Icon 2" /></a>
                      <a href="#"><img src="icon3.jpeg.jpeg" alt="Icon 3" /></a>
                      <a href="#"><img src="icon4.jpeg.jpeg" alt="Icon 4" /></a>
                      <a href="#"><img src="icon5.jpeg.jpeg" alt="Icon 5" /></a>
                    </div>
                    &gt;&gt;&gt;&gt;&gt;&gt;&gt; 5eb78c5b7c6b2756ddbab4daea8e114eb6f861f4
                  </div>
                </div></footer>
            </div>
          </div>
        </div>
      );
    }

    export default home
 