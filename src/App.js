//import logo from './logo.svg';
import './App.css';
import CartWidget from './components/CartWidget';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting={'¡Te damos la bienvenida!'}></ItemListContainer>
      <ItemList></ItemList>
      <CartWidget></CartWidget>
    </>
  );
}

export default App;
