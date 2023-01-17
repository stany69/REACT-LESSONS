

import './SkillStars.css'


function SkillStars(props){
    const {count_stars} = props

     function generateStars(num){
        let array = []
        for (let i = 0 ; i < 5 ; i++ ){
            if (num > i ){
                array.push('fa fa-star active')
            }else{
                array.push('fa fa-star')
            }
        }
        return array
     }

      let stars_data = generateStars(Math.round(count_stars))

        return(

          <div className='skill_elem'>
           <p className = 'stars_num'>{count_stars}</p>
           <div className = 'stars_set'>
             {stars_data.map(elem => <span className = {elem}></span>)} 
            </div>
          </div>
          
    )
}


export default SkillStars