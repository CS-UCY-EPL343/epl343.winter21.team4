import logo from './logo.svg';
import './App.css';
import { Text, Box, Heading, ChakraProvider} from '@chakra-ui/react';
import LandingPage from './componets/LandingPage';
import { render } from 'react-dom';
import LogIn from './componets/Authentication/Login';
import Main from './componets/Main';

 function App() {
  
   return( 


    <ChakraProvider>
      <Main/>
    </ChakraProvider>
   
   );
  
}

export default App;