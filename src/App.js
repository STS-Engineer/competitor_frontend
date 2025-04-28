import React from 'react';
import './App.css';
import Form from './Component/form';
import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MappTest from './Component/mappTets';
import Map from './Component/map';
import Mapbox from './Component/mapbox';



 
function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Routes>
                        <Route path="/form" element={<Form />} />
                        <Route path="/" element={<Homepage />} />
                        <Route path="/map" element={<Map/>} />
                        <Route path="/mapTest" element={<MappTest/>} />
                        <Route path="/mapbox" element={<Mapbox/>} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}
 export default App;
