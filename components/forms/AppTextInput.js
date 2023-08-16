import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import appStyles from '../../config/styles';

export default function AppTextInput({ icon, width = '100%', ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={appStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={appStyles.colors.medium}
        style={appStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appStyles.colors.light,
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    padding: 12,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});
