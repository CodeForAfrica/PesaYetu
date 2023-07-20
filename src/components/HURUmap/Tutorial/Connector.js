import { useTour } from "@reactour/tour";
import React, { useState, useEffect } from "react";

import Line from "./Line";

function Connector() {
  const { isOpen, currentStep, steps } = useTour();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  useEffect(() => {
    const firstElement = document
      .querySelector(`#tutorial-title-${currentStep}`)
      ?.getBoundingClientRect();

    const secondElement = document
      .querySelector(steps[currentStep]?.selector)
      ?.getBoundingClientRect();

    if (firstElement && secondElement) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      const y1 = firstElement?.top + firstElement?.height / 2;
      // eslint-disable-next-line no-unsafe-optional-chaining
      const y2 = secondElement?.top + secondElement?.height / 2;
      if (firstElement.left < secondElement.left) {
        setStart({
          // eslint-disable-next-line no-unsafe-optional-chaining
          x1: firstElement?.left + firstElement?.width + 20,
          y1,
        });
        // eslint-disable-next-line no-unsafe-optional-chaining
        setEnd({ x2: secondElement?.left - 20, y2 });
      } else {
        // eslint-disable-next-line no-unsafe-optional-chaining
        setStart({ x1: firstElement?.left - 20, y1 });
        setEnd({
          // eslint-disable-next-line no-unsafe-optional-chaining
          x2: secondElement?.left + secondElement?.width + 20,
          y2,
        });
      }
    } else {
      setStart(undefined);
      setEnd(undefined);
    }
  }, [currentStep, steps]);

  if (!(isOpen && start && end)) {
    return null;
  }

  return <Line {...start} {...end} />;
}

export default Connector;
