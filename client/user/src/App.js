import logo from './logo.svg';
import './App.css';
import { Text, Box, Heading} from '@chakra-ui/react';
import LandingPage from './componets/LandingPage';
import { render } from 'react-dom';
import LogIn from './componets/Authentication/Login';

 function App() {
  
   return( 
   <LandingPage/>
   );
  
}

export default App;