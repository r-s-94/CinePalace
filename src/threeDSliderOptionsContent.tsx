import { createContext } from "react";

interface CurrentSliderIndexDatatype {
  threeDSliderOptions: ThreeDSliderOptions;
  setThreeDSliderOptions: (threeDSliderOptions: ThreeDSliderOptions) => void;
}

export interface ThreeDSliderOptions {
  currentSliderIndex: number;
  currentRotatePosition: number;
}

export const threeDSliderOptionsContent =
  createContext<CurrentSliderIndexDatatype>({
    threeDSliderOptions: {
      currentSliderIndex: -1,
      currentRotatePosition: 0,
    },
    setThreeDSliderOptions: () => {},
  });
