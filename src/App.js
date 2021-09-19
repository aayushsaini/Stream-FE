import { Divider, Flex, useColorModeValue } from "@chakra-ui/react";
import CenterBar from "./Components/CenterBar/CenterBar";
import LeftBar from "./Components/LeftBar/LeftBar";
import Navbar from "./Components/NavBar/Navbar";
import RightBar from "./Components/RightBar/RightBar";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import "./App.scss"
import MessageBar from "./Components/MessageBar/MessageBar";
import MessagesRightBar from "./Components/MessagesRightBar/MessagesRightBar"
import ChatScreen from "./Components/MessageBar/ChatScreen/ChatScreen";

function App() {

  const dividerBg = useColorModeValue("gray.200",);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Flex justify="space-evenly">
          <LeftBar />
          <Divider borderColor={dividerBg} orientation="vertical" h="92.5vh" w="1px" position="sticky" top="7.5vh" />
          <Switch>
            <Route exact path="/">
              <CenterBar />
              <Divider borderColor={dividerBg} orientation="vertical" h="92.5vh" w="1px" position="sticky" top="7.5vh" />
              <RightBar />
            </Route>
            <Route exact path="/messages">
              <MessageBar />
              <Divider borderColor={dividerBg} orientation="vertical" h="92.5vh" w="1px" position="sticky" top="7.5vh" />
              <MessagesRightBar />
            </Route>
            <Route exact path="/messages/:userId">
              <ChatScreen />
              <Divider borderColor={dividerBg} orientation="vertical" h="92.5vh" w="1px" position="sticky" top="7.5vh" />
              <MessagesRightBar />
            </Route>
          </Switch>
        </Flex>
      </div>
    </Router>
  );
}

export default App;
