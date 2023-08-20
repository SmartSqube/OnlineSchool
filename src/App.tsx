import { AppComponent, GlobalStyles } from "./app.style";
import { Saidbar } from "./uiKit/saidbar/saidbar";

const Obj = {
  a: 1,
  b: 2,
  c: 3,
};

function App() {
  return (
    <>
      <GlobalStyles />
      <AppComponent>
        <Saidbar />
      </AppComponent>
    </>
  );
}

export default App;
