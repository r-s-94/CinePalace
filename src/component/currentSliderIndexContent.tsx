import { createContext } from "react";

interface CurrentSliderIndexDatatype {
  currentSliderIndex: number;
  setCurrentSliderIndex: (value: number) => void;
}

export const currentSliderIndexContent =
  createContext<CurrentSliderIndexDatatype>({
    currentSliderIndex: 0,
    setCurrentSliderIndex: () => {},
  });
