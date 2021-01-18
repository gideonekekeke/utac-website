import React from 'react'
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import './style.css'
import {Button} from 'antd'

function Boding() {
  return (
    
    <div
    style = {{
        height : '570px',
        width : '100%',
        position : 'relative',

       
    }}
    
  
    >

      <div
      style = {{
        position : 'absolute',
        width : '100%',
        height : '100%',
        backgroundColor : "#122EBB"


      }}
      
      
      >
           
            <div className = 'container_conti' style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', height : '300px', flexWrap : 'wrap',fontFamily : 'poppins'}}>
               <div style = {{ display : 'flex', fontSize : '40px', fontWeight : 'bold' , justifyContent : 'center',  alignItems : 'center', color : 'white', marginTop : '100px'}}>Andela builds remote engineering teams</div>
            
            </div>
            
            <div className = 'content' style = {{display  : 'flex', justifyContent : 'center', alignItems : 'center', fontSize : '40px', marginTop : '-80px', color : '#E59922', fontWeight : 'bold', fontFamily : 'poppins'}}><LeftOutlined  style = {{fontSize : '30px', display  :'flex', alignItems : 'center', justifyContent : 'center', marginTop : '5px', fontWeight : "bold" }}/> that work <RightOutlined style = {{fontSize : '30px', marginTop : '5px'}}/></div>
           
        
                <div style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '30px'}}>
              <Button style = {{height : '35px', width : '120px', display : 'flex', alignItems : 'center', justifyContent : 'center', background : '#E59922', fontWeight : 'bold', outline : 'none'}}>GET STARTED</Button>
              </div>
              </div>
              </div>
      




  )
}

export default Boding
