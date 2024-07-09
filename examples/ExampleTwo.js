import React from 'react';
import { View, Text } from 'react-native';
import { ProgressSteps, ProgressStep } from '@ouedraogo/react-native-progress-steps';

const ExampleTwo = () => {
  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center'
    }
  };

  const onNextStep = () => {
    console.log('called next step');
  };

  const onPrevStep = () => {
    console.log('called previous step');
  };

  const onSubmitSteps = () => {
    console.log('called on submit step.');
  };

  const progressStepsStyle = {
    activeStepIconBorderColor: '#686868',
    activeLabelColor: '#686868',
    activeStepNumColor: 'white',
    activeStepIconColor: '#686868',
    completedStepIconColor: '#686868',
    completedProgressBarColor: '#686868',
    completedCheckColor: '#4bb543'
  };

  const buttonTextStyle = {
    color: '#686868',
    fontWeight: 'bold'
  };

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <ProgressSteps {...progressStepsStyle}>
        <ProgressStep
          label="First"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 1!</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Second"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 2!</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Third"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 3!</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Fourth"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 4!</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Fifth"
          onPrevious={onPrevStep}
          onSubmit={onSubmitSteps}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 5!</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default ExampleTwo;