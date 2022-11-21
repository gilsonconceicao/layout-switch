import './App.css';
import Users from './components/layoutGrid/UsersGrid';
import UsersRow from './components/layoutRow/UsersRow';
import SelectView from './components/SelectView/SelectView';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
        <SelectView/>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/viewTable' element={<UsersRow/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
} 

export default App;
