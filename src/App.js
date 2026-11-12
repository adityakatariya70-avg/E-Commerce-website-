import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Singleproduct from './Singleproduct';

function App(){

    return (
    <BrowserRouter basename="/E-Commerce-website-/">

        <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/product/:id" element={<Singleproduct/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App;