import Header from "./components/Header";
import Main from "./components/Main";
import ProductCounterContextProvider from "./contexts/ProductContext";

const App = () => {
  return (
    <ProductCounterContextProvider>
      <Header />
      <Main />
    </ProductCounterContextProvider>
  );
};

export default App;
