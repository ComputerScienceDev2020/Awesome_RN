import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {moderateScale} from '../../helper';

const Button = props => {
  const {
    text,
    textColor,
    borderWidth,
    borderColor,
    backgroundColor,
    icon,
    width,
    onPress,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          width: width,
          borderColor: borderColor,
          borderWidth: borderWidth || 0,
        },
      ]}>
      <ViewIcon icon={icon} />
      <Text style={[styles.textStyle, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const ViewIcon = ({icon}) => {
  if (icon) return <Image style={styles.icon} source={icon} />;
  else return null;
};

export default Button;
const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    paddingVertical: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    marginTop: moderateScale(16),
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
  },
  icon: {
    height: moderateScale(20),
    width: moderateScale(20),
    marginRight: moderateScale(12),
  },
});
