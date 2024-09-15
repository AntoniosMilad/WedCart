// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  description: {
    textAlign: 'center',
    marginVertical: 32
  },
  denyDescription:{
    textAlign: 'center',
    marginVertical: 32
  },
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
    gap: 26
  },
  stepsLeftColumnContainer:{
    alignItems: 'flex-start'
  },
  stepsRightColumnContainer:{
    alignItems: 'flex-end'
  },
  stepsTitle: {
    textAlign: 'center',
    marginBottom: 16,
  },
  step: {
    marginBottom: 8,
  },
});
