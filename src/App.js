import { Divider, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./Components/NavBar/Navbar";
import LeftBar from "./Components/LeftBar/LeftBar";
import Home from "./Pages/Home/Home"
// import RightBar from "./Pages/Home/RightBar/RightBar";
import MessageBar from "./Pages/Messages/MessageBar";
import MessagesRightBar from "./Pages/Messages/MessagesRightBar";
import ChatScreen from "./Components/MessagesChatScreen/ChatScreen";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.scss"
import PostPage from "./Pages/Posts/PostPage";

function App() {

  const dividerBg = useColorModeValue("gray.200",);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Flex justify="space-evenly">
          <Spacer />
          <LeftBar />
          <Divider className="separators" borderColor={dividerBg} orientation="vertical"  w="1px" position="sticky" top="62px" />
          <Switch>
            <Route exact path="/">
              <Home />
              <Divider className="separators" borderColor={dividerBg} orientation="vertical" w="1px" position="sticky" top="62px" />
              {/* <RightBar /> */}
              <MessagesRightBar />
            </Route>
            <Route exact path="/messages">
              <MessageBar />
              <Divider className="separators" borderColor={dividerBg} orientation="vertical" w="1px" position="sticky" top="62px" />
              <MessagesRightBar />
            </Route>
            <Route exact path="/messages/:userId">
              <ChatScreen />
              <Divider className="separators" borderColor={dividerBg} orientation="vertical" w="1px" position="sticky" top="62px" />
              <MessagesRightBar />
            </Route>
            <Route exact path="/post/:postId">
              <PostPage />
              <Divider className="separators" borderColor={dividerBg} orientation="vertical" w="1px" position="sticky" top="62px" />
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
