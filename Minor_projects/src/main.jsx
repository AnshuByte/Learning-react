import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CopyInput from "./components/CopyInput.jsx";
import EventDemo from "../../Basic_learning/src/components/EventDemo.jsx";
import LocalStorageEg from "./components/LocalStorageEg.jsx";
import Profile from "./components/Profile.jsx";
import ShoppingList from "./components/ShoppingList.jsx";
import TodoList from "./components/TodoList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <CopyInput />
    {/* <EventDemo /> */}
    <LocalStorageEg />
    <Profile />
    <ShoppingList />
    <TodoList />
  </StrictMode>
);
