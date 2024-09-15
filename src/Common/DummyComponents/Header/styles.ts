import { StyleSheet } from "react-native";
import { color } from "Theme";

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingBottom: 10,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingHorizontal: 20,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
    },
    topHeader: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: color.drWhite,
    },
    searchContainer: {
      alignItems: 'center',

    },
    searchInput: {
      flex: 1,
      height: 36,
      color: '#333',
    },
    image: {
      width: 10,
      height: 10,
      marginBottom: 20,
    },
  });