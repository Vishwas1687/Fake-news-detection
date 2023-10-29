import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/Homepage';
import Private from './auth/Private';
import CreatePost from './pages/CreatePost';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';
function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/user' element={<Private/>}>
      
      </Route>

      <Route path='/create-post' element={<CreatePost/>}/>
      
    </Routes>
    </BrowserRouter>
    </AuthContextProvider>
    
  );
}

export default App;
