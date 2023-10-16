import './App.css';
import Form from './components/Form';
import TryFire from './components/TryFire';
import YupForm from './components/YupForm';
import UpdateExist from './components/UpdateExist';
import { Route, Routes, useParams } from 'react-router-dom';
import Notification from './components/Notification';

function App() {
  // const {id} = useParams()


  
  return (
    <div>
    <Notification/>
    {/* <Notification/> */}
    <Routes>
      <Route path='/' element={<TryFire/>}/>
      <Route path='/:id' element={<UpdateExist/>}/>
    </Routes>
    </div>
  );
}

export default App;
