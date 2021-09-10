import { Divider, Flex, useColorModeValue } from "@chakra-ui/react";
import CenterBar from "./Components/CenterBar/CenterBar";
import LeftBar from "./Components/LeftBar/LeftBar";
import Navbar from "./Components/NavBar/Navbar";
import RightBar from "./Components/RightBar/RightBar";
import "./App.scss"

function App() {

  const dividerBg = useColorModeValue("gray.200",);

  return (
    <div className="App">
      <Navbar />
      <Flex justify="space-evenly">
        <LeftBar />
        <Divider borderColor={dividerBg} orientation="vertical" h="100vh" w="1px" position="sticky" top={0} />
        <CenterBar />
        <Divider borderColor={dividerBg} orientation="vertical" h="100vh" w="1px" position="sticky" top={0} />
        <RightBar />
      </Flex>
    </div>
  );
}

export default App;
