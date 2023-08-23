import { useState } from "react";
import { GlobalStyles } from "./app.styles";
import { NavigationLayout } from "./layouts";
import { StateProvider } from "./store/provoder";
import { View } from "./views/view";

function App() {
  return (
    <StateProvider>
      <GlobalStyles />
      <View />
    </StateProvider>
  );
}

export default App;
