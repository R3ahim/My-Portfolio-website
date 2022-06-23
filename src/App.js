import logo from './logo.svg';
import './App.css';
import Drawer from './component/Drawer/Drawer';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './component/Portfolio';
import Service from './component/Drawer/Service';
import Resume from './component/Drawer/Resume';
import Skills from './component/Drawer/Skills';
import AboutMe from './component/Drawer/AboutMe';
import ContactMe from './component/Drawer/ContactMe';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Drawer></Drawer>}>
        <Route index element={<Portfolio></Portfolio>}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="/service" element={<Service></Service>}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
          <Route path="/skils" element={<Skills/>}></Route>
          <Route path="/about" element={<AboutMe/>}></Route>
          <Route path="/contact" element={<ContactMe/>}></Route>
        </Route>

      </Routes>
    
    </div>
  );
}

export default App;
