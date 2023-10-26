import React from "react";

class Index extends React.Component{
    render(){
        return(
        <div>
           <header>
        <nav class="navbar" style="background-color: rgba(0,0,0,0.7);">
            <img src="../assests/logo.png" alt="Logo" />
            <ul>
                <li><a href="#about" class="about">About</a>
                    
                </li>
                <li><a href="#services">Explore</a>
                    <ul class="dropdown">
                        <li><a href="#">image forensics</a></li>
                        <li><a href="#">audio forensics</a></li>
                        <li><a href="#">video forensics</a></li>
                    </ul>
                </li>
                <li><a href="#resources">Resources</a>
                    <ul class="dropdown">
                        <li><a href="#red-teaming">Red Team</a></li>
                        <li><a href="#forensics">Forensics</a></li>
                    </ul>
                </li>
              
            </ul>
            <div class="search">
                <a href="#" class="button">24x7 Cyber helpline</a>
            </div>
        </nav>
    </header>
    <div>


    <div class="glider-contain">
        <div class="count" id="gradient">

            <div class="count-left">
                <p class="custom-title">Embark on the future with deepcytes</p>
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
    
            <div class="count-right">
                <img src="../assests/count-on-us.svg" alt="Count on us" width="550px" loading="lazy" />
               
            </div>
    
        </div>
        <div id="services" style="padding-top: 92px;">

            <center>
                <h1 class="serviceName" style="color: white; font-size: 40px;">Services</h1>
            </center>
            <div class="glider">
                <figure>
                    <h1 class="serviceName">Image <br />Forensics</h1>
                    <section class="details">
                        Image forensics involves using tools to determine if a picture has been altered or is real.
                    </section>
                </figure>

                <figure>
                    <h1 class="serviceName">Video & Audio <br />Forensics</h1>
                    <section class="details">
                        Video and audio forensics involves investigating and analyzing videos and audio recordings to uncover any 
                        tampering, alterations, or authenticity issues, much like digital detective work for audiovisual content.
                    </section>
                </figure>

                <figure>
                    <h1 class="serviceName">Memory <br />Forensics</h1>
                    <section class="details" style="margin-top: 50px">
                      
                       memory forensics info
                    </section>
                </figure>

            </div>
        </div>
        <div class="resources" id="resources" style="padding-top: 250px;">
            <div class="forensics-tools" id="forensics">
                <center>
                    <h1 class="serviceName" style="color: white; font-size: 40px;">Resources</h1>
                </center>
                <center>
                    <h1 class="serviceName" style="color: white; font-size: 25px;">Forensics Tools</h1>
                </center>

                <div class="resources-content">
                    <p style="font-size: 25px;">
                        <font style="color: aqua;">Cyber Forensics</font>
                        <font style="color: white;">
                            uses digital skills to uncover secrets,
                            track down cyber criminals, and solve virtual mysteries in the electrifying world of
                            cybersecurity.
                            It's a thrilling blend of investigating, gathering intel, s and outsmarting bad guys in
                            the
                            digital universe!
                        </font>
                    </p>

                    <p style="font-size: 25px;">
                        <font style="color: aqua;">1. Image Forensics</font>
                        <font style="color: white;">
                            Image forensics involves using tools to determine if a picture has been altered or is
                            real.
                        </font>
                    </p>

                    <div class="container">
                        <div class="card-container">
                            <figure class="card" id="card1">
                               
                                <img src="../assests/tools/sherlock.png" alt="Image 2" class="image" />
                            </figure>
                            
                            <figure class="card" id="card2">
                             
                                <img src="../assests/tools/Ghiro.png" alt="Image 2" class="image" />
                            </figure>
                        </div>
                        
                        <div class="card-container">
                            <figure class="card" id="card3">
                             
                                <img src="../assests/tools/ExifTool.png" alt="Image 2" class="image" />
                            </figure>
                            
                            <figure class="card" id="card4">
                           
                
                                <img src="../assests/tools/Steghide.png" alt="Image 2" class="image" />
                            </figure>
                        </div>
                        <div class="info-container">
                            <div class="info" id="infoBox1">
                            
                                <h1>sherloq</h1>
                                <img src="../assests/load-unscreen.gif" style="width: 300px;" />
                               <br /> <h3>Unravel mysteries in digital evidence with this powerful forensic analysis tool.</h3>

                                <p></p>
                            </div>
                            <div class="info" id="infoBox2">
                        
                                Ghiro
                                <br />
                                <img src="../assests/tools/Ghiro.png" width="300px" height="300px" alt="" />
                                <br />
                                Illuminate the hidden details in your images and uncover the truth.
                                <br /><br />
                                <a href="#" class="button">Use Tool</a>
                                <p></p>
                            </div>
                            <div class="info" id="infoBox3">
                               
                                ExifTool
                                <p></p>
                            </div>
                            <div class="info" id="infoBox4">
                               
                                StegHide
                                <br />
                                <img src="../assests/tools/Steghide.png" width="300px" height="300px" alt="" />
                                <br />
                                Discover concealed information by detecting and extracting data hidden within digital media.
                                <br /><br />
                                <a href="#" class="button">Use Tool</a>
                                <p></p>
                            </div>
                        </div>
                        
                    </div>

                    <p style="font-size: 25px;">
                        <font style="color: aqua;">2. Video & Audio Forensics</font>    
                        <font style="color: white;">
                            Video and audio forensics involves investigating and analyzing videos and audio
                            recordings
                            to uncover any
                            tampering, alterations, or authenticity issues, much like digital detective work for
                            audiovisual content.
                        </font>
                    </p>

                    <div class="ffmpeg_container">
                        <div class="ffmpeg_card-container">
                            <figure class="ffmpeg_card" id="ffmpeg_card">
                                
                                <img src="../assests/tools/FFmpeg.png" alt="FFmpeg Image" class="image" />
                            </figure>
                           
                        </div>
                        <div class="ffmpeg_info-container">
                            <div class="ffmpeg_info" id="ffmpeg_infoBox">
                                
                                The Swiss Army knife for multimedia forensics, capable of handling various audio and video formats.
                                <p></p>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>

            <div class="red-teaming-tools" id="red-teaming">
                <center>
                    <h1 class="serviceName" style="color: white; font-size: 25px;">Red Teaming Tools</h1>
                </center>

                <div class="red-teaming-tools-content">

                    <p style="font-size: 25px;">
                        <font style="color: aqua;">Red Teaming</font>
                        <font style="color: white;">
                            is the ultimate cyber adventure where you think like the attacker, probing systems for
                            weaknesses, and
                            launching simulated attacks to help organizations defend against real-world threats,
                            pushing
                            systems to
                            their limits to ensure they stay unbreakable.
                        </font>
                    </p>

                    <p style="font-size: 25px;">
                        <font style="color: aqua;">1. Web VAPT:</font>
                        <font style="color: white;">
                            Making websites safer by finding security weaknesses and suggesting fixes for
                            safeguarding
                            your websites from external attacks
                        </font>
                    </p>
                    
                    <div class="webvapt_cont">
                        <div class="webvapt_card">
                            <figure class="webvapt_image" id="webvapt_image">
                                
                                <img src="../assests/tools/WhatWeb.png" alt="FFmpeg Image" class="image" />
                            </figure>
                            <figure class="webvapt_image" id="webvapt_image">
                               
                                <img src="../assests/tools/SQLmap.png" alt="FFmpeg Image" class="image" />
                            </figure>
                        </div>
                        <div class="webvapt_info_cont">
                            <div class="webvapt_info" id="webvapt_info">
                                
                                <p>ffmpeg</p>
                                <p></p>
                            </div>
                            <div class="webvapt_info" id="webvapt_info">
                                
                                <p>ffmpeg</p>
                                <p></p>
                            </div>
                        </div>
                    </div>

                    <p style="font-size: 25px;">
                        <font style="color: aqua;">2. Mobile VAPT:</font>
                        <font style="color: white;">
                            Ensuring mobile apps are well-protected from cyber threats through expert testing and
                            security enhancements.
                        </font>
                    </p>

                    <div class="mobile_vapt_container">
                        <div class="mobile_vapt_card-container">
                            <figure class="mobile_vapt_card" id="mobile_vapt_card5">
                          
                                <img src="../assests/tools/MOBsf.png" alt="mobile_vapt Image" class="image" />
                            </figure>
                            <figure class="mobile_vapt_card" id="mobile_vapt_card5">
                              
                                <img src="../assests/tools/MOBsf.png" alt="mobile_vapt Image" class="image" />
                            </figure>
                        </div>
                        <div class="mobile_vapt_info-container">
                            <div class="mobile_vapt_info" id="mobile_vapt_infoBox5">
                               
                               
                                <p></p>
                            </div>
                            <div class="mobile_vapt_info" id="mobile_vapt_infoBox5">
                 
                                
                                <p></p>
                            </div>
                        </div>
                    </div>

                    <p style="font-size: 25px;">
                        <font style="color: aqua;">3. API VAPT:</font>
                        <font style="color: white;">
                            Checking the safety of the "doors" that let different apps communicate, so they can't be
                            opened by malicious intruders.
                        </font>
                    </p>

                    <div class="api_vapt_container">
                        <div class="api_vapt_card-container">
                            <figure class="api_vapt_card" id="api_vapt_card5">
                               
                                <img src="../assests/tools/jest.png" alt="api_vapt Image" class="image" />
                            </figure>
                            
                        </div>
                        <div class="api_vapt_info-container">
                            <div class="api_vapt_info" id="api_vapt_infoBox5">
                              
                                
                                <p></p>
                            </div>
                            
                        </div>
                    </div>

                    <p style="font-size: 25px;">
                        <font style="color: aqua;">4 Source Code Review: </font>
                        <font style="color: white;">
                            Inspect the secret recipe of software to ensure it's safe and secure from potential
                            attacks.
                        </font>
                    </p>

                    <div class="src_code_container">
                        <div class="src_code_card-container">
                            <figure class="src_code_card" id="src_code_card5">
                
                                <img src="../assests/tools/jest.png" alt="src_code Image" class="image" />
                            </figure>
                            
                        </div>
                        <div class="src_code_info-container">
                            <div class="src_code_info" id="src_code_infoBox5">
                         
                                <p></p>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>

            
        </div>

        <div id="about" class="video-container" >
            <video width="1300px" height="auto">
                <source src="../assests/dummy.mp4" type="video/map4"/ >
            </video>

            <div class="video-container-caption">
                <div class="section1">
                    <video autoplay loop muted poster="" class="back-video" width="100%">
                        <source src="../assests/dummy.mp4" type="video/mp4" />
                    </video>
                    <div class="text-container1">
                        <h1>About Deepcytes</h1>
                        <div class="aboutdc" style="color: white;">
                            <h2 class="serviceName"
                                style="font-size: 50px; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; color: white;"
                                >
                                Welcome to Our Cutting - Edge Cyber Forensics Website.</h2>
                            <p style="font-size: 30px">where we unleash the power of digital investigation to unravel the truth
                                in a world clouded by deception. </p>
                            
                            <h5 style="font-size: 20px;"> Our state-of-the-art Cyber Forensics platform harnesses digital
                                investigation to unveil truths in a world veiled by deception. As a Cyber Intelligence
                                powerhouse, we proudly present a range of ingenious tools empowering investigators to decipher
                                enigmas within the digital realm. Our toolkit spans diverse expertise including: <br />
                                <ul>
                                    <li>
                                        <font style="color: aqua;">Image Forensics</font> —unveiling subtle manipulations in
                                        images
                                    </li>
                                    <li>
                                        <font style="color: aqua;">Video & Audio Forensics</font>, delving into audiovisual
                                        content to expose tampering or authenticity issues.
                                    </li>
                                    <li>
                                        <font style="color: aqua;">Web, Mobile, and API VAPT</font>—fortifying digital
                                        landscapes, securing websites, apps, and communication channels against lurking cyber
                                        threats.
                                    </li>
                                    <li>
                                        <font style="color: aqua;">Source Code Review</font>—delving into software's core to
                                        ensure utmost safety.
                                    </li>
                                </ul>
                            </h5>
                        </div>
                    </div>
                </div>
        
                
                
            </div>
            

        </div>
       


        <div class="count">

            <div class="count-left">
                <p class="custom-title">YOU CAN COUNT ON US</p>
                <img src="../assests/count-on-us.svg" alt="Count on us" width="550px" loading="lazy" />
            </div>

            <div class="count-right">
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

        <div class="social-cards">
            <div class="email" style="color: white;">send us an email at info@deepcytes.io</div>
            <div class="insta"></div>
            <div class="facebook"></div>
        </div>







        
        

 <div class="footer-divider"></div>
        <footer class="blue-footer">
            <div class="icon-container">
                <a href="#"><img src="icon1.jpeg.jpeg" width="100px" height="100px" alt="Icon 1" /></a>
                <a href="#"><img src="icon2.jpeg.jpeg" alt="Icon 2" /></a>
                <a href="#"><img src="icon3.jpeg.jpeg" alt="Icon 3" /></a>
                <a href="#"><img src="icon4.jpeg.jpeg" alt="Icon 4" /></a>
                <a href="#"><img src="icon5.jpeg.jpeg" alt="Icon 5" /></a>
            </div>
        </footer>
       







    </div>
   

</div>
        </div>
    );    
}
}

export default  Index;