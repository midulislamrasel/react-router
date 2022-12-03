import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Order from './component/Order/Order';
import Shop from './component/Shop/Shop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/Header',
    element: <Header></Header>
  },
  {
    path: '/About',
    element: <About></About>
  },
  {
    path: 'Footer',
    element: <Footer></Footer>
  },
  {
    path: 'Order',
    element:<Order></Order>  
  },
  {
    path: 'Shop',
    element : <Shop></Shop>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Main></Main>
    </div>
  );
}

export default App;
