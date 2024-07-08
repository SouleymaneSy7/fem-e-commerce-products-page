import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductCounterContextProvider from "./contexts/ProductContext";

const App = () => {
  return (
    <ProductCounterContextProvider>
      <Header />
      <Main />
      <Footer />
    </ProductCounterContextProvider>
  );
};

export default App;
