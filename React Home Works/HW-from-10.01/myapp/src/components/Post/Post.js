import './Post.css'
import {useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'

import SkillComp from '../SkillComp/SkillComp'


  export default function Post(){
    const [post,setPost] = useState([])
    let {id} = useParams()

    useEffect(() =>{
        let url = 'https://fakestoreapi.com/products'
        fetch (url)
        .then(res => res.json())
        .then(data => setPost(data.find(elem => elem.id ==id)))
    },[])





   
   return(
    <div>
      {(post)?
      <div className='post_item' >
        <h4>{post.title}</h4>
        <img src={post.image}
             className='post_photo'
             alt='post_photo'
             />
             <p>Price:{post.price}</p>
             <p>Description: {post.description}</p>
             <SkillComp/>
      </div>:
       <p>Товар не найден</p>
      }
      </div>

    )
}
