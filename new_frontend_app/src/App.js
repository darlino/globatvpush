import Main from './Components/Main';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <Main/>
    </ChakraProvider>
  );
}

export default App;
