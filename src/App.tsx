import { GlobalStyles } from "./app.style";
import { NavigationLayout } from "./layouts";

function App() {
  const activeView: string = "page2";
  return (
    <>
      <GlobalStyles />
      {activeView === "page1" && (
        <NavigationLayout>Гимис колбис</NavigationLayout>
      )}
      {activeView === "page2" && (
        <NavigationLayout>Другой контент</NavigationLayout>
      )}
    </>
  );
}

export default App;
