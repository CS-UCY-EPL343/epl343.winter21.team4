import { 
    Text,
    Box, 
    Heading, 
    Button, 
    Stack,
    Icon,
    } from '@chakra-ui/react';
import {AiFillCar} from 'react-icons/ai'
import LogIn from '../Authentication/Login';
export default function LandingPage() {
     const login = LogIn();
    return(
        <Stack 
            bgColor='green.300'
            alignContent='center' 
            textAlign='centre' 
            display='flex' 
            flexDirection='column' 
            boxSize='3xl'
            blockSize='full'
            width='full'
            height='xl'

        >
            <Box alignSelf='center'>
                <Icon alignItems='center' as={AiFillCar} boxSize='3xs' alignContent='center'/>
            </Box>
            
            <Stack width='52'alignSelf='center'>
                <Button color='blue.100' >landing page </Button>
                <Button onClick={login}>LOG IN </Button>
                <Button>landing page </Button>
                <Button>landing page </Button>
            </Stack>
        </Stack>
    );
}

