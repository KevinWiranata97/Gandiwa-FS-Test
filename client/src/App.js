
import './App.css';
import { Routes, Route} from "react-router-dom"
import Homeviews from './views/HomeViews';
import Loginviews from './views/LoginViews';
import RegisterViews from './views/RegisterViews';
import { RequireAuth } from "./components/RequireAuth";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/"  element={
            <RequireAuth>
              <Homeviews />
            </RequireAuth>
          } />
        <Route path="/login" element={<Loginviews />} />
        <Route path="/register" element={<RegisterViews />} />
      </Routes>
    </div>
  );
}

export default App;
