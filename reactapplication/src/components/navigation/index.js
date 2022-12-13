import React from "react";
import './style.css';

function Navigation () {
    return ( 
        <nav>
            <div>
                <div className="menu">
                    <div className="text_menu">
                      <p>RS-1200 Prototype 35</p>
                      <p>Free Responsive Template</p>
                    </div>
                    <div className="contacts">
                        <p className="email">info@domain.com / +xx xxx xxxxxxxxxx</p>
                    </div>
                </div>
            </div>
            <div className="menu_burger">
                <div className="homepage">HOMEPAGE</div>
                <div className="pages">PAGES</div>
                <div className="elements">ELEMENTS</div>
                <div className="portfolio">POTRTFOLIO LAYOUTS</div>
                <div className="gallery">GALLERY LAYAOUTS</div>
                <div className="link_text">LINK TEXT</div>
                <div className="long_text">A VERY LONG LINK TEXT</div>
            </div>
        </nav>
    );
}

export default Navigation;