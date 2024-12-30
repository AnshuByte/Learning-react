import { StrictMode } from "react";
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Card />
    <WelcomeMessage />
    <Header />
    <MainContent />
    <ProductInfo />
    <JSXRules />
    <Greeting />
    <Footer />
    <UserList />
    <Person age={23} name="Anshu" section="A" />

    {/* <WelcomeMessage /> */}
  </StrictMode>
);
