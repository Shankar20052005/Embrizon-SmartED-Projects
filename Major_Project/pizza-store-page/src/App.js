import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import DisplayAllItems from "./DisplayAllItems";
import AddNewItem from "./AddNewItem";
import UpdateItem from "./UpdateItem";
import Contact from "./Contact";
import {Routes, Route} from 'react-router-dom';

function App(){
  return(
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/display-all-items" element={<DisplayAllItems/>}/>
        <Route path="/add-item" element={<AddNewItem/>}/>
        <Route path="/update-item/:id" element={<UpdateItem/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
      </Routes>
      
    </>
  )
}

export default App;