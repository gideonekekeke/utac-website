import React from 'react'
import './second.css'
import pic from '../img/img3.png'
import pic1 from '../img/lap.jpg'
import pic2 from '../img/man.jpg'
import pic3 from '../img/boy.png'
import sum1 from '../img/react.png'
import sum2 from '../img/nodejs.png'
import sum3 from '../img/ruby.png'
import sum4 from '../img/python.png'
import sum5 from '../img/java.png'
import sum6 from '../img/javascript.png'
import sum7 from '../img/angularjs.png'
import sum8 from '../img/php.png'
import giddy from '../img/gid.jpg'









function Second() {
  return (
    <div className = 'second_container'>
      <div className = "second_body">
      <div className = 'hundred1'>
          <h1> YOUR TEAM,</h1>
          <h2> OUR TALENT</h2>
        </div>

        <div className = 'text1'>
        <div style = {{marginTop : '-50px', marginLeft : ' ', height : 0, width : 0}}>
       <h5 style = {{marginLeft : '300px', marginLeft : '', fontSize : '12px', color : 'rgb(146, 27, 136)'}}>DEDICATED</h5>
</div>


 <div>Successful engineering teams require the right talent at the right time.</div>

<div className = 'peter'  style = {{width : 0, height  : 0, marginTop : '70px'}}><p className = 'peter' style = {{ marginLeft : '-500px', fontSize : '15px', fontWeight : 'lighter', color : 'silver'}}> We know that effective engineering teams require more than code junkies to be successful. Andela engineers are full-time technologists who engage proactively with your team, manage stakeholders effectively, and excel at communication. In addition, our reputation as a top employer on the African continent means our engineers stay for the long term.</p></div>
</div>


        <div className = 'text2'>
        <div className = 'upgrade' style = {{marginTop : '-50px', marginLeft : ' ', height : 0, width : 0}}>
       <h5 style = {{marginLeft : '300px', marginLeft : '', fontSize : '12px', color : '#49AAAF'}}>EMBEDDED</h5>
</div>Andela engineers use your company systems to support a fully embedded workflow.

<div style = {{width : 0, height  : 0, marginTop : '70px'}}><p style = {{ marginLeft : '-500px', fontSize : '15px', fontWeight : 'lighter', color : 'silver'}}> Our engineers adopt your workflows and preferred communication platforms like Slack, Microsoft teams, and more. All engineers are native English speakers and overlap with your teams for at least 5 working hours per day and dedicate the rest of their day to digging in and focusing on important tasks at hand. And, every engagement includes on-boarding to ensure your distributed team hits the ground running.</p></div>
</div>
<div className = 'self' style ={{marginTop : '-100px'}}>
<img className = 'self' style = {{height : '430px', marginTop : '-700px', marginLeft : '120px'}}src ={pic}/>
</div>



<div style = {{width  :0, height : 0, marginTop : '40px' }}>
<img style = {{height : '250px', marginTop : '-800px', marginLeft : '-1275px'}}src ={pic1}/>
</div>
<div style = {{width  :0, height : 0, marginTop : '70px' }}>
<img style = {{height : '200px', marginTop : '-50px', marginLeft : '-1200px'}}src ={pic2}/>
</div>

<div style = {{width  :0, height : 0, marginTop : '90px' }}>
<img style = {{height : '200px', marginTop : '60px', marginLeft : '-1250px'}}src ={pic3}/>
</div>

<div className = 'text3'>
        <div style = {{marginTop : '-50px', marginLeft : ' ', height : 0, width : 0}}>
       <h5 style = {{marginLeft : '300px', marginLeft : '', fontSize : '12px', color : '#49AAAF'}}>SUPPORTED</h5>
</div>Dedicated technical support and mentorship every step of the way

<div style = {{width : 0, height  : 0, marginTop : '70px'}}><p style = {{ marginLeft : '-500px', fontSize : '15px', fontWeight : 'lighter', color : 'silver'}}> Our dedicated account and engineering managers work closely with your team to ensure the continued success of your distributed engineering team. From communicating project goals to maintaining the highest level of security, we’ve seen—and done—it all.</p></div>
</div>


<div style = {{marginLeft : 'px', height : 0, width : 0}}><h5 style = {{marginLeft : '-1200px', color : '#E59922', fontSize : '15px', marginTop : '-20px'}}>OUR EXPERTISE</h5></div>


    

 

      </div>
  
      <div className = 'imaging'>
        <img src = {sum1} />
      
        <img src = {sum2}/>
        <img src = {sum3}/>
        <img src = {sum4}/>
        <img src = {sum5}/>
        <img src = {sum6}/>
        <img src = {sum7}/>
        <img src = {sum8}/>
        <img src = {sum1}/>
        <img src = {sum2}/>
       
       <div style = {{marginLeft : '500px', marginTop : '-450px', fontSize : '250px', color : '#98BE24'}}> "</div>
         <div style = {{marginLeft : '600px', marginTop : '-400px', width : '500px', height : '50px', color : '#E59922'}}> <h2 style = {{width : '500px', fontFamily : 'italic'}}>We were in the middle of the largest project we’ve undertaken as a business. There’s no way we would have been able to grow as aggressively or be as successful as we have been without our Andela team. </h2></div>

         <div style = {{height : '50px', width : '50px',borderRadius : '50px', marginLeft : '100px', marginTop : '-170px'}}>
           <img style = {{height : '100%', width : '100%', objectFit : 'cover', borderRadius : '50px', marginTop : '-500px', marginLeft : '500px'}} src = {giddy}/>
         </div>
         <div style = {{marginTop : '-230px', marginLeft : '670px', width : '1000vw', color : 'white', fontFamily : 'poppins'}}> <h5 style = {{width : '400px'}}>Gideon Ekeke</h5>
           <h4 style = {{marginTop : '-20px'}}>Web Developer</h4>
         </div>


       </div>
    </div>
  )
}

export default Second
