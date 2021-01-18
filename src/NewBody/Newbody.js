import React from 'react'
import './style.css'
import pic from '../img/img3.png'
import {Button} from 'antd'

function Newbody() {
  return (
    <div className = 'first_cont3'>
    <div className = 'cont_body3'>
      <div className = 'hundred3'>
        <h1> SEE</h1>
        <h2 style = {{width : '800px'}}>WHAT'S NEW</h2>
      </div>
    
       <div style = {{width : '1000px', height : '600px', display : 'flex'}}>
         <div style = {{display : 'flex'}}>
           <div style = {{height : '450px', width : '400px', margin : '50px'}}>

            <img style = {{height : '300px', width : '100%'}} src = {pic}/>
                <h4 style = {{color : 'rgb(146, 27, 136)'}}>IN THE NEWS</h4>
                <h3>Andela to Double Engineering Talent Pool With Pan-African Expansion</h3>
           </div>


         </div>
         <div style = {{marginTop : '50px', marginLeft : '-20px'}}>
           <div style = {{height : '450px', width : '400px'}}>

            <img style = {{height : '300px', width : '100%'}} src = {pic}/>
                <h4 style = {{color : 'rgb(146, 27, 136)'}}>IN THE NEWS</h4>
                <h3>Andela to Double Engineering Talent Pool With Pan-African Expansion</h3>
           </div>


         </div>
         <div style = {{marginTop : '50px', marginLeft : '30px'}}>
           <div style = {{height : '450px', width : '400px'}}>

            <img style = {{height : '300px', width : '100%'}} src = {pic}/>
                <h4 style = {{color : 'rgb(146, 27, 136)'}}>IN THE NEWS</h4>
                <h3>Andela to Double Engineering Talent Pool With Pan-African Expansion</h3>
           </div>


         </div>
        



       </div>
     



      </div>
      <div style = {{display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
      <Button style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '-200px', height : '50px', backgroundColor : '#E59922', outline : 'none'}}>SEE WHAT'S NEW</Button>
      </div>
      </div>

  )
}

export default Newbody
