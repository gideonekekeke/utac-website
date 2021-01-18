import React from 'react'
import './style.css'
import pic from '../img/b1.png'
import pic1 from '../img/img2.png'
import pic2 from '../img/img9.png'
import put1 from '../img/google.png'
import put2 from '../img/micro.png'
import put3 from '../img/face.png'
import put4 from '../img/uda.png'
import put5 from '../img/pul1.png'

function Firstbody() {
  return (
    <div className = 'first_cont'>
      <div className = 'cont_body'>
        <div className = 'hundred'>
          <h1> WE BUILD BETTER</h1>
          <h2>REMOTE TEAMS</h2>
        </div>
        <div className = 'text'> Hundreds of engineering teams scale smarter with Andela.</div>

    


      </div>
     
      <div style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '-100px',width : '100vw', flexWrap : 'wrap', }}>
      <div style = {{height : '300px', width : '700px', justifyContent : 'center', alignItems : 'center', flexWrap : 'wrap', display : 'flex'}}>
      <div style = {{height : '1px', width : '270px', backgroundColor : 'black', display : 'flex', justifyContent : 'center', alignItems : 'center', marginLeft : '-380px' , marginTop : '-100px'}}></div>
      <div style = {{height : '1px', width : '270px', backgroundColor : 'black', display : 'flex', justifyContent : 'center', alignItems : 'center', marginLeft :'120px', marginTop : '-100px'}}></div>
      <img className = 'first_img' style = {{height : '200px', marginLeft : '700px', marginTop : '-400px'}}src = {pic}/>

        
        </div>
      
          
      </div>
      <div className = 'global' style = {{marginTop : '-300px', marginLeft : '250px', width : '150px', fontSize : '17px', fontWeight :'bold'}}><div className = 'global1'> Global talent sourcing</div>
      <h1 style = {{fontFamily : 'poppins', fontSize : '45px', color : '#6BBABE', marginTop : '10px'}}>200,000
        </h1>
        <h5 style = {{marginTop : '-25px', color : '#6BBABE'}}>applications</h5>
         <p style = {{width : '300px', fontSize : '12px'}}>Our expert talent team ensures we source the right talent at the right time.</p>
      </div>
        
         
      <div className = "best" style = {{marginTop : '-300px', marginLeft : '250px', width : '150px', fontSize : '17px', fontWeight :'bold'}}>Best in class assessments
      <h1 style = {{fontFamily : 'poppins', fontSize : '45px', color : '#DF1995', marginTop : '10px'}}>2%
        </h1>
        <h5 style = {{marginTop : '-25px', color : '#DF1995'}}>get offers</h5>
         <p style = {{width : '300px', fontSize : '12px', }}>We assess engineering skills against a robust competency framework.</p>
      </div>




      <div style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '',width : '100vw', flexWrap : 'wrap', }}>
      <div style = {{height : '300px', width : '700px', justifyContent : 'center', alignItems : 'center', flexWrap : 'wrap', display : 'flex'}}>
      <div className = 'line'style = {{height : '1px', width : '270px', backgroundColor : 'black', display : 'flex', justifyContent : 'center', alignItems : 'center', marginLeft : '-380px' , marginTop : '-100px'}}></div>
      <div  className = 'line'style = {{height : '1px', width : '270px', backgroundColor : 'black', display : 'flex', justifyContent : 'center', alignItems : 'center', marginLeft :'120px', marginTop : '-100px'}}></div>
      <img  className = 'phone'style = {{height : '300px', marginLeft : '1000px', marginTop : '-600px'}}src = {pic1}/>
        </div>
      </div>


      <div className = 'data' style = {{marginTop : '-250px', marginLeft : '250px', width : '150px', fontSize : '17px', fontWeight :'bold'}}> <div className = 'dating'>Data-driven matching</div>
      <h1 style = {{fontFamily : 'poppins', fontSize : '45px', color : '#98BE24', marginTop : '10px'}}>96%
        </h1>
        <h5 style = {{marginTop : '-25px', color : '#98BE24'}}>successful match rate</h5>
         <p style = {{width : '300px', fontSize : '12px'}}>We evaluate your technical and cultural needs to match you with engineers who are passionate about your company.</p>
      </div>

      <div className = 'structure' style = {{marginTop : '-250px', marginLeft : '250px', width : '150px', fontSize : '17px', fontWeight :'bold'}}>Global Infrastructure & HR
      <h1 style = {{fontFamily : 'poppins', fontSize : '45px', color : '#FBAE30', marginTop : '5px', width : '300px'}}>20+ month
        </h1>
        <h5 style = {{marginTop : '-25px', color : '#FBAE30', width : '300px'}}> long-term engagements</h5>
         <p style = {{width : '300px', fontSize : '12px'}}>We provide engineers with everything they need to develop software—remotely and securely.</p>
      </div>



      <div style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '-100px',width : '100vw', flexWrap : 'wrap', }}>
      <div style = {{height : '300px', width : '700px', justifyContent : 'center', alignItems : 'center', flexWrap : 'wrap', display : 'flex'}}>
    
      <img className = 'phone1' style = {{height : '250px', marginLeft : '800px', marginTop : '-400px'}}src = {pic2}/>

        
        </div>
      
          
      </div>
      <h3 className ='shifting' style = {{marginTop : '-100px', display : 'flex', justifyContent : 'center', alignItems : 'center', marginLeft : '250px'}}>Preferred training partner of</h3>

      <div className = 'image_holder1'>
                   <img src = {put1}/>
                   <img src = {put2}/>
                   <img src = {put3}/>
                   <img src = {put4}/>
                   <img src = {put5}/>
                 
              

               </div>



    </div>
  )
}

export default Firstbody
