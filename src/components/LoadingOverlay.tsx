import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

type LoadingOverlayProps = {
  enabled: boolean;
};

const LoadingOverlay = ({enabled}: LoadingOverlayProps) => {
  if (enabled) {
    return (
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>Loading...</Text>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlayText: {
    color: 'white',
    fontSize: 32,
  },
});

export default LoadingOverlay;
