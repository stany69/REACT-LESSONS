import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home/Home'
import Post from './Post/Post'




function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/' element = {<Home/>}/>
                    <Route path='/post/:id' element = {<Post/>}/>        
                   
                
                </Routes>
            </Router>
        </div>
    )
}

export default App