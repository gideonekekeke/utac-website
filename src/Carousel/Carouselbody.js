import { Carousel } from 'antd'
import React from 'react'
import Caousel from './Caouselstyle'
import 'antd/dist/antd.css'
import pic from '../photo/cov.jpeg'
import pic1 from '../photo/cov1.jpeg'
import pic2 from '../photo/cov2.jpeg'
import pic3 from '../photo/cov3.jpeg'







function Carouselbody() {
  const contentStyle = {
    // height: "500px",
    // color: "#fff",
    // lineHeight: "10px",
    // textAlign: "center",
    background: "#364d79",
  };
  
  return (
    <div>
    <Carousel
      autoplay
      effect="fade"
    >
      <div>
        <h3 style={contentStyle}>
            <Caousel
                pic={pic}
                direction="center"
                BG="#E5D304"
                title="UTAC is a non-profit organization"
                desc="“We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount”"
            
            
            />
     
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <Caousel
                    pic={pic1}
                    direction="center"
                    BG=""
                    title="UTAC is a non-profit organization"
                    desc="“We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount”."
                
        
        
        />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <Caousel
                   pic={pic2}
                   direction="center"
                   BG="#EF0303"
                   title="UTAC is a non-profit organization"
                   desc="“We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount”"
               
        />
     
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
 
        <Caousel
                  pic={pic3}
                  direction="center"
                  BG="#478E02"
                  title="UTAC is a non-profit organization"
                  desc="“We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount”."
              
        />
        </h3>
      </div>
    </Carousel>
    ,
  </div>
);
};


export default Carouselbody
