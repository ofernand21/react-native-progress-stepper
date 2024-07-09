import React from 'react';
import { View, Text } from 'react-native';
import { ProgressSteps, ProgressStep } from '@ouedraogo/react-native-progress-steps';

const ExampleOne = () => {
  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center',
    },
  };

  const onNextStep = () => {
    console.log('called next step');
  };

  const onPaymentStepComplete = () => {
    alert('Payment step completed!');
  };

  const onPrevStep = () => {
    console.log('called previous step');
  };

  const onSubmitSteps = () => {
    console.log('called on submit step.');
  };

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <ProgressSteps>
        <ProgressStep
          label="Payment"
          onNext={onPaymentStepComplete}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>Payment step content</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Shipping Address"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>Shipping address step content</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Billing Address"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>Billing address step content</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Confirm Order"
          onPrevious={onPrevStep}
          onSubmit={onSubmitSteps}
          scrollViewProps={defaultScrollViewProps}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>Confirm order step content</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default ExampleOne;