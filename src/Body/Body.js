import React from "react";
import pic from '../img/po.jpg'
import set1 from '../img/viacom.png'
import set2 from '../img/per.png'
import set3 from '../img/invision.png'
import set4 from '../img/pul.png'
import set5 from '../img/co.png'
import set6 from '../img/square.png'
import set7 from '../img/li.png'
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import './body.css'
import {Button} from 'antd'
function Body() {
  return (
    <div
    style = {{
        height : '570px',
        width : '100%',
        position : 'relative',
        backgroundImage : `url(${pic})`,
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center',
        backgroundSize :'cover',
       
    }}
    
  
    >

      <div
      style = {{
        position : 'absolute',
        width : '100%',
        height : '100%',
        backgroundColor : "rgba(19, 47, 181,0.9)"


      }}
      
      
      >
           
            <div className = 'container_conti' style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', height : '300px', flexWrap : 'wrap',fontFamily : 'poppins'}}>
               <div className  = 'loving' style = {{ display : 'flex', fontSize : '40px', fontWeight : 'bold' , justifyContent : 'center',  alignItems : 'center', color : 'white', marginTop : '100px'}}>Andela builds remote engineering teams</div>
            
            </div>
            
            <div className = 'contenting' style = {{display  : 'flex', justifyContent : 'center', alignItems : 'center', fontSize : '40px', marginTop : '-80px', color : '#E59922', fontWeight : 'bold', fontFamily : 'poppins'}}><LeftOutlined  style = {{fontSize : '30px', display  :'flex', alignItems : 'center', justifyContent : 'center', marginTop : '5px', fontWeight : "bold" }}/> that work <RightOutlined style = {{fontSize : '30px', marginTop : '5px'}}/></div>
            
            <p style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', color : 'white', marginLeft : '70px',}}>
         Doing remote well is hard. We’ve helped hundreds of companies
               build and manage high performing teams. 
               </p>
                <div style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '30px'}}>
              <Button style = {{height : '35px', width : '120px', display : 'flex', alignItems : 'center', justifyContent : 'center', background : '#E59922', fontWeight : 'bold', outline : 'none'}}>GET STARTED</Button>
              </div>
              <h4 style = {{justifyContent : 'center', display : 'flex', alignItems : 'center', fontFamily : 'poppins', color : 'white', marginTop : '60px'}}>TRUSTED BY LEADING TECH COMPANIES</h4>

               <div className = 'image_holder'>
                   <img src = {set1}/>
                   <img src  = {set2}/>
                   <img src  = {set3}/>
                   <img src  = {set4}/>
                   <img src  = {set5}/>
                   <img src  = {set6}/>
                   <img src  = {set7}/>

               </div>




       
         </div>
       
          
         
           
         </div>
   

   

  )
}
  
export default Body;