
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>

            <Route path="/" element={<Header />} />
            <Route path="/products" element={<Products />} />
            <Route path="product/:productId" element={<ProductDetails />} />
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
