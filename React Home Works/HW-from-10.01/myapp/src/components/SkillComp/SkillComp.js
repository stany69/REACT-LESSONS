import './SkillComp.css'
import SkillStars from '../SkillStars/SkillStars'

import { useState,useEffect } from 'react'

function SkillComp(){

    const [point,setPoint] = useState([])
    
   
    useEffect(() =>{
        let url = 'https://fakestoreapi.com/products'
        
        fetch (url)
        .then(res => res.json())
        .then(data => setPoint(data))
    },[])



 return(
        <div className="skill_wrapper">
           
        {point.map(elem=>

        <SkillStars 
          
          count_stars = {elem.rating.rate}
          key = {elem.id}
           /> 
           )}
    </div>


    )
}


export default SkillComp