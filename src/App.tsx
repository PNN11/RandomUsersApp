import React, { Suspense } from "react";
import UsersAppContainer from "containers/UsersAppContainer";
import ThemeProvider from "providers/ThemeProvider";
import { Provider } from "react-redux";
import store from "store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Suspense fallback={"Loading..."}>
          <UsersAppContainer />
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
