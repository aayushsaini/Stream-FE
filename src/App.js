import { Divider, Flex } from "@chakra-ui/react";
import CenterBar from "./Components/CenterBar/CenterBar";
import LeftBar from "./Components/LeftBar/LeftBar";
import Navbar from "./Components/NavBar/Navbar";
import RightBar from "./Components/RightBar/RightBar";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Flex justify="space-evenly">
        <LeftBar />
        <Divider orientation="vertical" h="100vh" w="1px" position="sticky" top={0} />
        <CenterBar />
        <Divider orientation="vertical" h="100vh" w="1px" position="sticky" top={0} />
        <RightBar />
      </Flex>
    </div>
  );
}

export default App;
