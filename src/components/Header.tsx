import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'red',
    width: '100%',
    height: 70,
    marginTop: 20,
    borderStyle: 'dashed',
  },
  headerText: {
    fontSize: 36,
    color: 'white',
  },
});

export default Header;
