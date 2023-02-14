import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routesArray } from './routerConfig/routerConfig';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routesArray.map((route, index) => {
          return <Route key={index} path={route.path} element={route.component}></Route>
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
