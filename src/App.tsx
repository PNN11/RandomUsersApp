import React, { Suspense } from "react";
import UsersAppContainer from "containers/UsersAppContainer";
import ThemeProvider from "providers/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={"Loading..."}>
        <UsersAppContainer />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
