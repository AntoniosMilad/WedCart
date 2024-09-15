import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import TypographyText from 'Common/DynamicComponents/Typography/TypographyText';
import { useNavigation } from '@react-navigation/native';
import ScreenHeader from 'Common/DynamicComponents/ScreenHeader/ScreenHeader';
import { styles } from './styles';
import AdditionalCourses from '../../../assets/images/svg/dummy/additional_courses.svg'
import EgyptianCurriculum from '../../../assets/images/svg/dummy/egyptian_curriculum.svg'

const ChoosePathScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScreenHeader 
        navigation={navigation} 
        showLogo={true}
      />
      <View style={styles.optionWrapper}>
        <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.optionButton}>
            <AdditionalCourses />
            <TypographyText 
                content="كورسـات إضافية" 
                type="16_Bold" 
                color="black" 
            />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton}>
            <EgyptianCurriculum />
            <TypographyText 
                content="المنهج المصـري" 
                type="16_Bold" 
                color="black" 
            />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChoosePathScreen;
