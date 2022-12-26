import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // aki eu chamo o container
    <View style={styles.container}>
      {/* aki eu chamo a cor do texto */}
      <Text style={styles.text}>Salve Garai!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// mexendo nas cores aula 1, min 1h e 20
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#fff",
  },
});
