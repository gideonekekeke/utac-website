import React from 'react'
import pic from '../photo/cov.jpeg'
import { Button } from "antd";

function Caousel({pic, direction, title, desc,  BG}) {
  return (
    <div>
      <div
      style = {{
      display : 'flex', 
      flexDirection: "column",
      width : '100%',
      height : '600px',
      backgroundImage : `url(${pic})`,
      backgroundRepeat : 'no-repeat',
      backgroundSize : 'cover'
      }}
      >
   
   <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "600px",
            backgroundColor: 'rgba(0%, 0%, 0%, 0.76)',
            fontFamily: "Poppins",
            justifyContent: "center",
            alignItems: direction,
              padding: "0 50px",
       
          }}
        >

<div
            style={{
              fontSize: "40px",
                fontFamily : 'poppins',
              margin: "0px",
              lineHeight: "1.8",
              color  :'white'
           
            }}
          >
           {title}
          </div>

          <div
            style={{
              width: "500px",
              color : 'white',
              textAlign :'center'
            }}
          >
           {desc}
          </div>
          <Button
            style={{
              width: "150px",
              height: "40px",
              textTransform: "uppercase",
               background : BG,
               fontWeight : 'bold',
               fontFamily : 'poppins',
              color: "black",
            }}
          >
            Get Started
          </Button>

         </div>


      </div>
    </div>
  )
}

export default Caousel
