import { Divider, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./Components/NavBar/Navbar";
import LeftBar from "./Components/LeftBar/LeftBar";
import Home from "./Pages/Home/Home"
import RightBar from "./Pages/Home/RightBar/RightBar";
import MessageBar from "./Pages/Messages/MessageBar";
import MessagesRightBar from "./Pages/Messages/MessagesRightBar";
import ChatScreen from "./Components/MessagesChatScreen/ChatScreen";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.scss"

function App() {

  const dividerBg = useColorModeValue("gray.200",);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Flex justify="space-evenly">
          <Spacer />
          <LeftBar />
          <Divider borderColor={dividerBg} orientation="vertical" h="92.5vh" w="1px" position="sticky" top="7.5vh" />
          <Switch>
            <Route exact path="/">
              <Home />
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
        <Spacer />
      </div>
    </Router>
  );
}

export default App;
