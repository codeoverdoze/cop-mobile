import React from 'react';
import { View } from 'react-native';

// components
import { StyledText } from '../../components/Typography';
import ParentScreenHeader from '../../components/ParentScreenHeader';
import AnimatedItem from '../../components/AnimatedItem';

export default function Payments() {
  return (
    <View style={styles.container}>
      <ParentScreenHeader title="Payments" />

      <View
        style={{ justifyContent: 'center', alignItems: 'center', flex: 0.7, paddingHorizontal: 20 }}
      >
        <AnimatedItem
          animation={require('../../assets/animations/payment.json')}
          style={{ width: 300, height: 300 }}
        />
        <StyledText style={{ textAlign: 'center' }}>
          Very soon, you can make payments to your congregation directly from Presby Companion
        </StyledText>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
};
