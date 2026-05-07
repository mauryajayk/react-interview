import React from "react";
import DropdownMenu from "./DropdownMenu";
//import DarkMode from "./Darkmode";
//import SearchBar from "./SearchBar";
//import ApiData from "./ApiData";
//import DataFetch from "./DataFetch";
//import ToggleSwitch from "./ToggleSwitch";
//import ToDoList from "./ToDoList";
//import Counter from "./Counter";




function App() {
  // const items = ["Apple", "Banana", "Grapes", "Mango"];
  const items = ['Profile', 'Settings', 'Logout'];
  return (
    <div>
      {/* <Counter /> */}
      {/* <ToggleSwitch /> */}
      {/* <ToDoList /> */}
      {/* <DataFetch /> */}
      {/* <ApiData /> */}
      {/* <SearchBar items={items} /> */}
      {/* <DarkMode /> */}
      <DropdownMenu items={items} />
    </div>
  );
}

export default App;
