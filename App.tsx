/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

/**
 * Renders the App component.
 *
 * @return {JSX.Element} The rendered App component.
 */
const App = (): JSX.Element => {
  /**
   * Generate the challan handler.
   *
   * @return {void} description of return value
   */
  const onGenerateChallanHandler = (): void => {};

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={onGenerateChallanHandler}
        style={{
          elevation: 5,
          backgroundColor: '#1480c1',
          borderRadius: 7,
          paddingVertical: 15,
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Generate Challan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
