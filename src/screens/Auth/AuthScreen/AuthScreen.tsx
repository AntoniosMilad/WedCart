import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Button from 'Common/DynamicComponents/Button/Button';
import TypographyText from 'Common/DynamicComponents/Typography/TypographyText';
import LogoImage from '../../../assets/images/svg/dummy/splash_image.svg';
import SupportIcon from "../../../assets/images/svg/dummy/support-icon.svg";
import { styles } from './styles';

const AuthScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <LogoImage style={styles.logo} />
      <TypographyText
        content={"welcome"}
        type="30_Bold"
        color="black"
        styles={styles.welcomeText}
      />
      <View style={styles.buttonContainer}>
        <Button
          title={"login"}
          onPress={() => { }}
          size="large"
          customStyle={styles.loginButton}
          textColor="white"
          textType="18_Medium"
        />
        <Button
          title={"create_account"}
          onPress={() => { navigation.navigate('ChoosePathScreen') }}
          size="large"
          customStyle={styles.createAccountButton}
          textColor="greenBlue"
          textType="18_Medium"
        />
        <TouchableOpacity
          style={styles.supportContainer}
          onPress={() => { }}
        >
          <TypographyText
            content={"login_issue"}
            type="12_Bold"
            color="darkRed3"
          />
          <View style={styles.chatContainer}>
            <TypographyText
              content={"support_chat"}
              type="12_Bold"
              color="greenBlue"
            />
            <SupportIcon />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthScreen;
