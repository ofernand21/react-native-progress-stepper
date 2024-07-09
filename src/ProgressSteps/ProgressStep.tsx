import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, ViewStyle, ScrollViewProps } from 'react-native';
import ProgressButtons from '@/ProgressSteps/ProgressButtons';

interface ProgressStepProps {
  label?: string;
  onNext?: () => Promise<void> | void;
  onPrevious?: () => void;
  onSubmit?: () => void;
  activeStep?: number;
  nextBtnText?: string;
  previousBtnText?: string;
  finishBtnText?: string;
  stepCount?: number;
  nextBtnStyle?: ViewStyle;
  nextBtnTextStyle?: ViewStyle;
  nextBtnDisabled?: boolean;
  previousBtnStyle?: ViewStyle;
  previousBtnTextStyle?: ViewStyle;
  previousBtnDisabled?: boolean;
  scrollViewProps?: ScrollViewProps;
  viewProps?: ViewStyle;
  errors?: boolean;
  removeBtnRow?: boolean;
  scrollable?: boolean;
  children: React.ReactNode;
}

interface ColorProps {
  color: '#007AFF' | '#cdcdcd',
  fontSize?: number
}

const ProgressStep: React.FC<ProgressStepProps> = ({
  onNext,
  onPrevious,
  onSubmit,
  activeStep,
  nextBtnText = 'Next',
  previousBtnText = 'Previous',
  finishBtnText = 'Submit',
  stepCount,
  nextBtnStyle,
  nextBtnTextStyle,
  nextBtnDisabled = false,
  previousBtnStyle,
  previousBtnTextStyle,
  previousBtnDisabled = false,
  scrollViewProps,
  viewProps,
  errors = false,
  removeBtnRow = false,
  scrollable = true,
  children,
}) => {
  const handleNextStep = async () => {
    if (onNext) await onNext();
  };

  const handlePreviousStep = () => {
    if (onPrevious) onPrevious();
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit();
  };

  const renderNextButton = () => {
    const btnStyle = {
      textAlign: 'center',
      padding: 8,
      ...nextBtnStyle,
    };

    const btnTextStyle: ColorProps = {
      color: '#007AFF',
      fontSize: 18,
      ...nextBtnTextStyle,
    };

    const disabledBtnText: ColorProps = {
      color: '#cdcdcd',
    };

    const textStyle = [btnTextStyle];
    if (nextBtnDisabled) textStyle.push(disabledBtnText);

    return (
      <TouchableOpacity
        style={btnStyle}
        onPress={activeStep === (stepCount?? 1) - 1 ? handleSubmit : handleNextStep}
        disabled={nextBtnDisabled}
      >
        <Text style={textStyle}>
          {activeStep === (stepCount?? 1) - 1 ? finishBtnText : nextBtnText}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderPreviousButton = () => {
    const btnStyle = {
      textAlign: 'center',
      padding: 8,
      ...previousBtnStyle,
    };

    const btnTextStyle: ColorProps = {
      color: '#007AFF',
      fontSize: 18,
      ...previousBtnTextStyle,
    };

    const disabledBtnText: ColorProps = {
      color: '#cdcdcd',
    };

    const textStyle = [btnTextStyle];
    if (previousBtnDisabled) textStyle.push(disabledBtnText);

    return (
      <TouchableOpacity
        style={btnStyle}
        onPress={handlePreviousStep}
        disabled={previousBtnDisabled}
      >
        <Text style={textStyle}>{activeStep === 0 ? '' : previousBtnText}</Text>
      </TouchableOpacity>
    );
  };

  const buttonRow = removeBtnRow ? null : (
    <ProgressButtons
      renderNextButton={renderNextButton}
      renderPreviousButton={renderPreviousButton}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      {scrollable ? (
        <ScrollView {...scrollViewProps}>{children}</ScrollView>
      ) : (
        <View style={viewProps}>{children}</View>
      )}
      {buttonRow}
    </View>
  );
};

export default ProgressStep;
