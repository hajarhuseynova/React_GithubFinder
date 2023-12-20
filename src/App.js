import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Alert from "./components/Alert";
import UserList from "./components/UserList";
import UsersContextProvider from "./contexts/UsersContext";
import AlertContextProvider from "./contexts/AlertContext";

import React from "react";

const App = () => {
  return (
    <UsersContextProvider>
      <AlertContextProvider>
        <Navbar />
        <Search />
        <Alert />
      
          <UserList />
      
      </AlertContextProvider>
    </UsersContextProvider>
  );
};

export default App;
