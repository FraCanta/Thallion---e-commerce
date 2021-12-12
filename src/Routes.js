import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';


export default function CustomRoutes(){
    return <Router>
        <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="*" element={<div>404 - Page not Found</div>}/>
        </Routes>
    </Router>
}