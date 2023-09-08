import './App.css';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
   import Student from './components/Student';
   import Appbar1 from './components/Appbar';
 import Form from './components/Form';
function App() {
  return (
   <div className='App'>
     <Appbar1/>
     
   <BrowserRouter>
   <Routes> 
    <Route index element={<Form/>}/>
    <Route path='/login' element={<Form/>}/> 
    <Route path='/home' element={<Student/>}/>
 
      

       
       </Routes> 
      </BrowserRouter>  
      
     </div>


   
  );
}


export default App;