import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home/Home'
import Post from './Post/Post'
import SkillComp from './SkillComp/SkillComp'




function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/' element = {<Home/>}/>
                    <Route path='/post/:id' element = {<Post/>}/>
                    <Route path='/skillcomp' element = {<SkillComp/>}/>
                    
                   
                
                </Routes>
            </Router>
        </div>
    )
}

export default App