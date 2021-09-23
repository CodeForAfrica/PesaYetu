import { useTour } from "@reactour/tour";
import React, { useState, useEffect } from "react";

import Line from "./Line";

const Connector = () => {
  const { isOpen, currentStep, steps } = useTour();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  useEffect(() => {
    const firstElement = document
      .querySelector(`#tutorial-title-${currentStep}`)
      ?.getBoundingClientRect();
    const secondElement = document
      .querySelector(steps[currentStep].selector)
      ?.getBoundingClientRect();
    if (firstElement && secondElement) {
      const y1 = firstElement?.top + firstElement?.height / 2;
      const y2 = secondElement?.top + secondElement?.height / 2;
      if (firstElement.left < secondElement.left) {
        setStart({
          x1: firstElement?.left + firstElement?.width + 20,
          y1,
        });
        setEnd({ x2: secondElement?.left - 20, y2 });
      } else {
        setStart({ x1: firstElement?.left - 20, y1 });
        setEnd({
          x2: secondElement?.left + secondElement?.width + 20,
          y2,
        });
      }
    }
  }, [currentStep, steps]);

  if (!(isOpen && start && end)) {
    return null;
  }

  return <Line {...start} {...end} />;
};

export default Connector;
