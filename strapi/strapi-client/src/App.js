import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
function App() {
  return (
    <div>
      <h1>Product Management</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default App;
