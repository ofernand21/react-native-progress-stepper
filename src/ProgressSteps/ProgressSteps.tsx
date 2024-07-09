import React, { useState, useEffect, ReactElement } from 'react';
import { View, ViewStyle } from 'react-native';
import { times } from 'lodash';
import StepIcon from './StepIcon';

interface ProgressStepsProps {
  isComplete?: boolean;
  activeStep?: number;
  topOffset?: number;
  marginBottom?: number;
  children: ReactElement[];
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({
  isComplete = false,
  activeStep = 0,
  topOffset = 30,
  marginBottom = 50,
  children,
}) => {
  const [stepCount, setStepCount] = useState(0);
  const [currentStep, setCurrentStep] = useState(activeStep);

  useEffect(() => {
    setStepCount(React.Children.count(children));
  }, [children]);

  useEffect(() => {
    setCurrentStep(activeStep);
  }, [activeStep]);

  const renderStepIcons = () => {
    return times(stepCount, (i) => {
      const isCompletedStep = isComplete ? true : i < currentStep;
      const isActiveStep = isComplete ? false : i === currentStep;

      return (
        <View key={i}>
          <StepIcon
            stepNum={i + 1}
            label={(children[i] as ReactElement<any>).props.label}
            isFirstStep={i === 0}
            isLastStep={i === stepCount - 1}
            isCompletedStep={isCompletedStep}
            isActiveStep={isActiveStep}
          />
        </View>
      );
    });
  };

  const setActiveStep = (step: number) => {
    if (step >= stepCount - 1) {
      setCurrentStep(stepCount - 1);
    } else if (step > -1 && step < stepCount - 1) {
      setCurrentStep(step);
    }
  };

  const styles: { [key: string]: ViewStyle } = {
    stepIcons: {
      position: 'relative',
      justifyContent: 'space-evenly',
      alignSelf: 'center',
      flexDirection: 'row',
      top: topOffset,
      marginBottom: marginBottom,
    },
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.stepIcons}>{renderStepIcons()}</View>
      <View style={{ flex: 1 }}>
        {React.cloneElement(children[currentStep] as ReactElement, {
          setActiveStep: setActiveStep,
          activeStep: currentStep,
          stepCount: stepCount,
        })}
      </View>
    </View>
  );
};

export default ProgressSteps;
