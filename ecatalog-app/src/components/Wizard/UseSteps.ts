import { useState, useCallback, useEffect } from "react";

interface UseStepsProps {
  initialStep?: number;
  totalSteps: number;
}

const useSteps = ({ initialStep = 1, totalSteps }: UseStepsProps) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [isFinished, setIsFinished] = useState(false);

  const prevStep = useCallback(() => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  }, []);

  useEffect(() => {
    console.log("Current Step = ", currentStep);
  }, [currentStep]);

  const goToNextStep = useCallback(() => {
    if (currentStep === totalSteps) {
      setIsFinished(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  }, [totalSteps]);

  return { currentStep, prevStep, goToNextStep, isFinished };
};

export default useSteps;
