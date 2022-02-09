import React, { Suspense } from "react";

import UsersContainer from "containers/UsersContainer";
import ThemeProvider from "providers/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={"Loading..."}>
        <UsersContainer />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
