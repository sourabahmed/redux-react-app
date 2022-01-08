
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>

            <Route path="/" element={<Header />} />
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
