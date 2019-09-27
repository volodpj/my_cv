import React from 'react';
import './header.css';

function Header(){
    return (
        <header className="header blockStyle">
            <div className="CVPhoto">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1iwix1NKc4pfhCZw0ILxwuARwilsfrw3iethzVX60ZugBabXAQ"></img>
                <div className="CVPhoto__btn">DOWNLOAD RESUME</div>
            </div>
            <div className="CVDescription">
                <h1>HI I'M <span className="text_color">VOLODYMYR</span></h1>
                <p>web developer</p>
                <p>I have been working in the financial department and got experience in dealing with people and professional financial documentation, which requires that it be very persistent and careful about details. This experience has formed my interpersonal communication skills, analytical mindset and sense of responsibility. I am reliable and able to work under time pressure to deliver the required deadline. In addition, I have formed such personal qualities as self-improvement and self-development, an initiative in process optimization. My present career aim is to work within FrontEnd Development. Self-motivated with well developed with strong tech skills combined with a flexible attitude to work. Get on well with people at all levels, easily making good working relationships.</p>
                <div className="CVDescription__boxInfo">
                    <div>
                        <div className="CVDescription__boxInfo__info">
                            <div>Age</div>
                            <div>33</div>
                        </div>
                        <div className="CVDescription__boxInfo__info">
                            <div>Adress</div>
                            <div>Ukraine Lviv</div>
                        </div>
                        <div className="CVDescription__boxInfo__info">
                            <div>email</div>
                            <div>volod.af@gmail.com</div>
                        </div>
                    </div>
                    <div>
                        <div className="CVDescription__boxInfo__info">
                            <div>phone</div>
                            <div>0631780886</div>
                        </div>
                        <div className="CVDescription__boxInfo__info">
                            <div>website</div>
                            <div>www.developerWeb.com</div>
                        </div>
                        <div className="CVDescription__boxInfo__info">
                            <div>nationality</div>
                            <div>ukraine</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
    )
};

export default Header;