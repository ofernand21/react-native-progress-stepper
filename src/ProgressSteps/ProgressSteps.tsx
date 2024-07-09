import React, { useState, useEffect, ReactElement } from 'react';
import { View, ViewStyle } from 'react-native';
import { times } from 'lodash';
import StepIcon from '@/ProgressSteps/StepIcon';

interface ChildProps {
  label: string;
  // Ajoutez d'autres propriétés ici si nécessaire
  [key: string]: any; // Pour permettre des props supplémentaires
}

interface ProgressStepsProps {
  isComplete?: boolean;
  activeStep?: number;
  topOffset?: number;
  marginBottom?: number;
  children: ReactElement<ChildProps>[]; // Typage des enfants avec ChildProps
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

      const child = children[i];
      const label = React.isValidElement(child) ? child.props.label : '';

      return (
        <View key={i}>
          <StepIcon
            stepCount={stepCount}
            stepNum={i + 1}
            label={label}
            isFirstStep={i === 0}
            isLastStep={i === stepCount - 1}
            isCompletedStep={isCompletedStep}
            isActiveStep={isActiveStep}
            // Ajouter d'autres props ici si nécessaire
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
        {React.isValidElement(children[currentStep]) &&
          React.cloneElement(children[currentStep], {
            setActiveStep: setActiveStep,
            activeStep: currentStep,
            stepCount: stepCount,
          })}
      </View>
    </View>
  );
};

export default ProgressSteps;
