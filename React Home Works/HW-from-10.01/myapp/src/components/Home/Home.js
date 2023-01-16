import './Home.css'
import { useState,useEffect } from 'react'

import {Link} from 'react-router-dom'
import SkillStars from '../SkillStars/SkillStars'
import SkillComp from '../SkillComp/SkillComp'



function Home(){

const [posts,setPosts] = useState([])

useEffect(() =>{
     let url = 'https://fakestoreapi.com/products'
      fetch(url)
       .then( res => res.json())
       .then( data => setPosts(data))
},[])

      

    return(
        <div className='home_wrapper'>
           {posts.map(elem => 
             <Link to={`/post/${elem.id}`} className = 'content_elem'>
                <h4>{elem.title}</h4>
                <SkillComp/>
                 
               </Link>

           )}
        </div>
    )

    
}

export default Home