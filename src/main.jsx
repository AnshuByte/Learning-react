import { StrictMode } from "react";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import JSXRules from "./components/JSXRules.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MainContent from "./components/MainContent.jsx";
import Greeting from "./components/Greeting.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import UserList from "./components/UserList.jsx";
import Person from "./components/Person.jsx";
import Card from "./components/Card.jsx";
import Password from "./components/Password.jsx";
import Weather from "./components/Weather.jsx";
import UserStatus from "./components/UserStatus.jsx";
import Greetings from "./components/Greetings.jsx";
import { SiApacherocketmq } from "react-icons/si";
import ButtonClick from "./components/ButtonClick.jsx";
import UseState from "./components/UseState.jsx";
import App1 from "./App1.jsx";
import PrevCount1 from "./components/PrevCount1.jsx";
import Example1 from "./components/Example1.jsx";
import EventDemo from "./components/EventDemo.jsx";
import Counter from "./components/Counter.jsx";
import TodoList from "./components/TodoList.jsx";
import LocalStorageEg from "./components/LocalStorageEg.jsx";
import Profile from "./components/Profile.jsx";
import ShoppingList from "./components/ShoppingList.jsx";
const styles = {
  color: "black",
  backgroundColor: "Green",
  // padding: "30px",
  margin: "20px",
  borderRadius: "10px",
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <ShoppingList />
    <Profile />
    <LocalStorageEg />
    <TodoList />
    <Counter />
    <EventDemo />
    <Example1 />

    <PrevCount1 />
    <App1 />
    <UseState />
    <ButtonClick />
    <SiApacherocketmq size={40} color="blue" />
    <GiNinjaHeroicStance
      style={{
        color: "black",
        backgroundColor: "Green",
        // padding: "30px",
        // margin: "20px",
        borderRadius: "10px",
      }}
    />
    <Greetings timeOfDay="morning" />
    <Password />
    <UserStatus isAdmin={false} loggedIn={true} />

    <Card />
    <Weather temprature={23} />
    <WelcomeMessage />
    <Header />
    <MainContent />
    <ProductInfo />
    <JSXRules />
    <Greeting />
    <Footer />

    <UserList />
    <Person age={23} name="Anshu" section="A" /> */}

    {/* <WelcomeMessage /> */}
  </StrictMode>
);
