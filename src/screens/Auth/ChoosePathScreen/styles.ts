import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  logo: {
    marginTop: 60,
    marginBottom: 40,
  },
  optionWrapper: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
  optionButton: {
    alignItems: 'center',
    width: '45%',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  optionImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
});
