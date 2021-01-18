import React from 'react'
import './style.css'
import fed from '../../photo/cov3.jpeg'
import fed1 from '../../photo/cov1.jpeg'
import fed2 from '../../photo/cov2.jpeg'

import pic from '../../img/b1.png'
import pic1 from '../../img/img2.png'
import pic2 from '../../img/img9.png'
import put1 from '../../img/google.png'
import put2 from '../../img/micro.png'
import put3 from '../../img/face.png'
import put4 from '../../img/uda.png'
import put5 from '../../img/pul1.png'
import General from '../General/General'


function Start() {
  return (
    <div style = {{display  : 'flex', height : '1000px', width : '100%', fontFamily : 'poppins', marginTop : '50px', margin : '',}}>
      <div style = {{width : '100%', display : 'flex', justifyContent : 'center', flexWrap : 'wrap', height : '100%'}}>
        <div className = 'educate' style = {{display : 'flex', justifyContent : 'space-around', flexWrap : 'wrap', width : '100%', margin : '' }}>
          <div className = 'offside'>
            <h1 >WE FEED AND  </h1>
            <h2 >EDUCTATE THE POOR</h2>
            </div>
            <div className = 'texting'>
            <p >We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount</p>
            <div  style = {{height : 0, width : 0}}>
            <img className = 'small' style = {{height : '200px', marginTop : '200px', marginLeft : '150px'}} src = {fed1} />
            </div>
            </div>
        
        </div>


         <div  style = {{ display : 'flex',width : '100%', justifyContent : 'space-around', flexWrap : 'wrap', marginTop : '-50px'}}>
           <div className = 'bringing' style = {{marginLeft : '70px'}}>
           <div style = {{height  :'1px', width  : '300px', backgroundColor : 'black'}}></div>
           <div style = {{fontSize : '20px', fontWeight : 'bold'}} >Total fed in Boundary</div>
           <div style = {{fontSize : '50px', color : '#EF0303', fontWeight : '' }} > 20,000 </div>
           <div style = {{ color : '#EF0303', marginTop : '-10px' }}>people</div>
           <div style = {{width : '270px'}}>We see an Africa where every child’s is fed and educated</div>

           </div>
           <div className = 'codelab' style = {{marginRight : '30px'}}>
           <div style = {{height  :'1px', width  : '300px', backgroundColor : 'black'}}></div>
           <div style = {{fontSize : '20px', fontWeight : 'bold'}}>Total fed in Ojo Road</div>
           <div style = {{fontSize : '50px', color : '#E5D304', }}> 40,000 </div>
           <div style = {{color : '#E5D304', marginTop : '-10px' }}>people</div>
           <div style = {{width : '270px'}}>We see an Africa where every child’s is fed and educated</div>

           </div>
            <div className = 'capture'>
           <img className = 'capture' style = {{height : '250px'}} src = {fed}/>
           </div>
        



         </div>


         

         <div  style = {{ display : 'flex',width : '100%', justifyContent : 'space-around', flexWrap : 'wrap', marginTop : '-100px'}}>
           <div className = 'bringing1' style = {{marginLeft : '70px'}}>
           <div style = {{height  :'1px', width  : '300px', backgroundColor : 'black'}}></div>
           <div style = {{fontSize : '20px', fontWeight : 'bold'}} >Total fed in Wilmer</div>
           <div style = {{fontSize : '50px', color : '#478E02', fontWeight : '' }} > 10,000 </div>
           <div style = {{ color : '#478E02', marginTop : '-10px' }}>people</div>
           <div style = {{width : '270px'}}>We see an Africa where every child’s is fed and educated</div>

           </div>
           <div className = 'codelab1' style = {{marginLeft : ''}}>
           <div style = {{height  :'1px', width  : '300px', backgroundColor : 'black'}}></div>
           <div style = {{fontSize : '20px', fontWeight : 'bold'}}>Total fed in Tolu</div>
           <div style = {{fontSize : '50px', color : '#E5D304', }}> 45,000 </div>
           <div style = {{color : '#E5D304', marginTop : '-10px' }}>people</div>
           <div style = {{width : '270px'}}>We see an Africa where every child’s is fed and educated</div>

           </div>
            <div className = 'capture1'>
           <img className = 'capture1' style = {{height : '250px', marginRight : '50px'}} src = {fed2}/>
           </div>
        



         </div>
       
    
       
        





         <h3  style = {{marginTop : '50px'}}>Meet our Prefered sponsors</h3>

           
   

      </div>
      

   
    </div>
  )
}

export default Start
