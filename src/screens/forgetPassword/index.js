import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {moderateScale, getWidth} from '../../helper';
import Images from '../../assets';
import {NavigationController} from '../../navigation/NavigationController';

const ForgetPassword = () => {
  const [email, setEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.vectorArrow}>
        <TouchableOpacity style={styles.vec}>
          <Image style={styles.vector2} source={Images.Vector2} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.vec}>
          <Image style={styles.vector1} source={Images.Vector1} />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.return}>
          <Text style={styles.text}>Change Password</Text>
          <TouchableOpacity onPress={() => NavigationController.goBack()}>
            <Text style={styles.text1}>Return</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.Email}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={val => {
            setEmail(val);
          }}
          placeholder="Email"
          value={email}
        />
        <TouchableOpacity style={styles.checkLogin}>
          <Image style={styles.vector} source={Images.Vector} />
          <Text style={styles.CheckEmail}>check Email </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPassword;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4f6',
  },
  vectorArrow: {
    flexDirection: 'row',
  },
  return: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(18),
  },
  text: {
    color: '#206d8c',
    fontWeight: '500',
    fontSize: moderateScale(24),
  },
  text1: {
    color: '#556A7D',
    fontWeight: '400',
    fontSize: moderateScale(16),
    marginTop: moderateScale(8),
  },
  Email: {
    marginTop: moderateScale(34),
    marginLeft: moderateScale(18),
  },
  input: {
    marginTop: moderateScale(10),
    // backgroundColor: '#D3DEE8',
    borderColor: '#D3DEE8',
    borderWidth: 1,
    borderRadius: moderateScale(8),
    marginHorizontal: moderateScale(18),
  },
  checkLogin: {
    backgroundColor: '#007BB3',
    marginHorizontal: moderateScale(18),
    marginTop: moderateScale(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'center',
    height: moderateScale(48),
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(14),
  },
  CheckEmail: {
    marginLeft: moderateScale(10),
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  body: {
    marginTop: moderateScale(120),
  },
  vector1: {
    marginTop: moderateScale(15),
    marginRight: moderateScale(50),
  },
  vector2: {
    marginLeft: moderateScale(20),
  },
});
