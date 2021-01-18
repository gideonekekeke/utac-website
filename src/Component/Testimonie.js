import React from 'react';
import './TestStyle.css'
import facebook from './Images/facebook.jpg'
import instagram from './Images/insta.png'
import twitter from './Images/twitter.png'
import data from './Testimmonies.json';





 const Testimonie = () => {
  
  return (
    
    <div className="TestMain_Container">
        <div className="TestMain_ContainerWrapper">
            <div className="TestMain_ContainerHolder">
                <div className="TestMain_Header_Link">
                    <div className="TestMain_Header">TESTIMONIES</div>
                    <div className="TestMain_Link">
                    <a href="" target="blank"><img src={facebook} alt="facebook icon" style={{height:"20px", margin:"10px"}}/></a>
                    <a href="" target="blank"><img src={instagram} alt="facebook icon" style={{height:"20px", margin:"10px"}}/></a>
                    <a href="" target="blank"><img src={twitter} alt="facebook icon" style={{height:"20px", margin:"10px"}}/></a>
                    </div>
                </div>

                <div className="TestMain_BodyHolder">
                    <div className="TestMain_ImageHolder">
                        Image Here
                    </div>
                    <div className="TestMain_TestimonyHolder">
                        The Writeups Here
                    </div>
                    <div className="TestMain_NameHolder">
                        PERSONS NAME
                    </div>
                </div>
            </div>
        </div>
    </div>

    
  );
}

export default Testimonie