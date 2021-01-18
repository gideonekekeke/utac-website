import React,{useState} from "react";
import NavBar from "../src/NavBar";
import Footer from "./Footer";
import SideBar from "./SideBar/SideBar";
import Body from './Body/Body'
import Firstbody from "./Firstbody/Firstbody";
import Second from "./Secondbody/Second";
import Newbody from "./NewBody/Newbody";
import Boding from "./Boding/Boding";
import Maincarousel from "./Carousel/Maincarousel";
import './foot.css'
import General from "./Carousel/General/General";

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Maincarousel/>
      <General/>
    
    {/* <Body/>
    <Firstbody/>
      <Second/>  
     <Newbody/>
     <Boding/> */}
     <div  className = 'footing' style = {{backgroundColor : '#000000', color : 'red', marginTop : '-500px'}}>
      <Footer  className = 'footing' style = {{backgroundColor : '#000000', color : 'red', marginTop : '400px'}}/>
      </div>
    </div>

   
    </>
  );
}

export default Home;
