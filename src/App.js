
import './App.css';
import { RouterProvider } from 'react-router';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div >
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
