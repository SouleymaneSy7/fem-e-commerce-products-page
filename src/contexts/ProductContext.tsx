/* eslint-disable react-refresh/only-export-components */
import React from "react";

type ProductCounterContextProviderPropsType = {
  children: React.ReactNode;
};

type ProductCounterContextTypes = {
  productCounter: number;
  increaseProductCounter: () => void;
  decreaseProductCounter: () => void;
  resetProductCounter: () => void;
};

export const ProductCounterContext = React.createContext(
  {} as ProductCounterContextTypes
);

const ProductCounterContextProvider = ({
  children,
}: ProductCounterContextProviderPropsType) => {
  const [productCounter, setProductCounter] = React.useState<number>(0);

  const increaseProductCounter = () => {
    setProductCounter((prev) => prev + 1);
  };

  const decreaseProductCounter = () => {
    setProductCounter((prev) => prev - 1);
    if (productCounter == 0) setProductCounter(0);
  };

  const resetProductCounter = () => {
    setProductCounter(0);
  };

  return (
    <ProductCounterContext.Provider
      value={{
        productCounter,
        increaseProductCounter,
        decreaseProductCounter,
        resetProductCounter,
      }}
    >
      {children}
    </ProductCounterContext.Provider>
  );
};

export const useProductCounter = () => {
  const context = React.useContext(ProductCounterContext);
  if (!context) {
    throw new Error("Context must be used in Product Context Provider");
  }

  return context;
};

export default ProductCounterContextProvider;
