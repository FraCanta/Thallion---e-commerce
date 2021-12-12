import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'


export default function CustomRoutes(){
    return <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Products" element={<Products/>}/> 
            <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
    </Router>
}