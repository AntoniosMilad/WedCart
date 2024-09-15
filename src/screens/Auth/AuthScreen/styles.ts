import { StyleSheet } from "react-native";
import { color } from "Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 40
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    resizeMode: 'contain',
    marginBottom: 10,
  },
  welcomeText: {
    marginBottom: 40,
    textAlign: 'center',
  },
  loginButton: {
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  createAccountButton: {
    borderWidth: 1,
    borderColor: color.greenBlue_Two,
    backgroundColor: color.white,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  supportContainer: {
    gap: 5,
    alignItems: 'center',
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
});