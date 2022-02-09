import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "store";

import UsersContainer from "containers/UsersContainer";
import ThemeProvider from "providers/ThemeProvider";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Suspense fallback={"Loading..."}>
          <UsersContainer />
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
