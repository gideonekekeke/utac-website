import React from 'react'
import './gen.css'
import picture from '../../photo/cov.jpeg'
import picture1 from '../../photo/cov1.jpeg'

function General() {
  return (
    <div className = 'general' style = {{height : '700px', width : '100%', backgroundColor : 'black', marginTop : '', fontFamily : 'poppins'}}>
       <div style = {{display : 'flex', justifyContent : 'center', flexWrap: 'wrap', width : '100%', height : '100%', marginTop : '50PX'}}>



        <div className = 'educate1' style = {{display : 'flex', justifyContent : 'space-around', flexWrap : 'wrap', width : '100%', marginTop : '50px' , fontFamily : 'poppins' }}>
          <div className = 'offside1'>
            <h1  >OUR VISION,  </h1>
            <h2 >OUR GOALS</h2>
            </div>
            <div className = 'texting1'>
              <div className = 'taking' style = {{color : '#EF0303'}}>VISION</div>
            <p className = 'taking' style = {{color : 'white'}} >We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount
            An Africa where talent is nurtured and mentorship is paramount
            An Africa where talent is nurtured and mentorship is paramount
            An Africa where talent is nurtured and mentorship is paramount
            
            
            
            
            
            
            </p>
            <div  style = {{height : 0, width : 0}}>
            <img className = 'small' style = {{height : '350px', marginTop : '100px', marginLeft : 'px'}} src = {picture} />
            </div>
            </div>
        
        </div>

            

        <div className = 'educate1' style = {{display : 'flex', justifyContent : '', flexWrap : 'wrap', width : '100%', marginTop : '50px' , fontFamily : 'poppins' }}>
       
            <div style ={{marginLeft : '140px', marginTop : '-100px'}} className = 'texting2'>
              <div className = 'church' style = {{color : '#478E02'}}>GOALS</div>
            <p style = {{color : 'white'}} >We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount
            An Africa where talent is nurtured and mentorship is paramount
            An Africa where talent is nurtured and mentorship is paramount
            An Africa where talent is nurtured and mentorship is paramount
            
            
            
            
            
            
            </p>
            <img className = 'solving'style = {{height : '150px'}} src = {picture1}/>
            <img className = 'stuff' style = {{height : '150px', marginLeft : '20px'}} src = {picture1}/>
       
         
            </div>
        
        </div>

            
        
            




       </div>

       <div style = {{backgroundColor : 'rgba(0, 0, 0, 0.729)', height : '400px', width : '100%', marginTop : '-30px'}}>

       <div
          style={{
            display: "flex",
               flexDirection : 'column',
            width: "100%",
            height: "100%",
            backgroundColor: '',
            fontFamily: "Poppins",
            justifyContent: "center",
            alignItems: 'center',
            color : 'white'
          
       
          }}
        >

          <h1 style = {{color: 'white'}}>UTAC is a non-profit organization</h1>
          <div>
          <div style = {{textAlign : 'center', width : '500px'}}>“We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount”</div>
          </div>

          </div>
          </div>



       </div>

  )
}

export default General
