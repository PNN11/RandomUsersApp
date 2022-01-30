import React from "react";
import UsersAppContainer from "containers/UsersAppContainer";
import ThemeProvider from "providers/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <UsersAppContainer />
    </ThemeProvider>
  );
};

export default App;
