import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import Images from '../../assets';
import Button from '../../components/Button';

import {moderateScale, getWidth} from '../../helper';
import {RoutesName} from '../../navigation';
import {NavigationController} from '../../navigation/NavigationController';

const Login = () => {
  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.tinyLogo} source={Images.logo} />
        <View style={styles.body}>
          {/* tai khoan */}
          <TextInput
            style={styles.input}
            onChangeText={value => {
              setText(value);
            }}
            placeholder="Tai khoan"
            value={text}
          />
          {/* password */}
          <TextInput
            style={styles.input1}
            onChangeText={val => {
              setPassword(val);
            }}
            placeholder="Mat khau"
          />
          {/* dang nhap */}
          <Button
            text="Log In"
            textColor={'#fff'}
            backgroundColor="#007BB3"
            width={moderateScale(339)}
            onPress={() => alert(`${text} ${password}`)}
          />
          {/* chua co taikhoan _FIX */}
          <View style={styles.viewTextForgetPassword}>
            <Text
              style={styles.textFogetPassword}
              onPress={() =>
                NavigationController.navigate(RoutesName.ForgetPassword)
              }>
              Forgot Password
            </Text>
            <Text style={styles.taikhoan}>
              {`Chua co tai khoan? `}
              <Text style={styles.dangky}>Dang ky</Text>
            </Text>
          </View>
          {/* login with */}
          <TouchableOpacity style={styles.touchLogin}>
            <Text style={styles.textLogin}>login with </Text>
          </TouchableOpacity>
          {/* facebook */}
          <Button
            text="Login with Facebook"
            textColor={'#fff'}
            backgroundColor="#1877F2"
            width={moderateScale(218)}
            icon={Images.fb}
          />
          {/* google */}
          <Button
            text="Login with Google"
            textColor={'#025DD7'}
            backgroundColor="#fff"
            borderColor="#2F80ED"
            borderWidth={1}
            width={moderateScale(218)}
            icon={Images.google}
          />
          <View style={{height: moderateScale(30)}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  textHeader: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(22),
    marginBottom: moderateScale(16),
    marginLeft: moderateScale(28),
  },
  textContent: {
    fontSize: moderateScale(15),
    color: '#828282',
  },
  textName: {
    marginLeft: moderateScale(28),
    fontSize: moderateScale(13),
    marginBottom: moderateScale(8),
    color: '#1B1A1A',
    lineHeight: moderateScale(20),
  },

  textPassword: {
    marginLeft: moderateScale(28),
    fontSize: moderateScale(13),
    marginTop: moderateScale(14),
    marginBottom: moderateScale(8),
    color: '#1B1A1A',
    lineHeight: moderateScale(20),
  },

  viewTextForgetPassword: {
    flexDirection: 'row',
    marginTop: moderateScale(24),
    width: getWidth(),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(18),
  },
  container: {
    backgroundColor: '#f1f4f6',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D3DEE8',
    fontSize: moderateScale(16),
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(14),
    color: '#4F4F4F',
    marginHorizontal: moderateScale(18),
    height: moderateScale(48),
    marginBottom: moderateScale(18),
  },
  input1: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D3DEE8',
    fontSize: moderateScale(16),
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(14),
    color: '#4F4F4F',
    marginHorizontal: moderateScale(18),
    height: moderateScale(48),
  },
  dangnhap: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(32),
    marginHorizontal: moderateScale(18),
    height: moderateScale(48),
    // backgroundColor: 'yellow',
  },
  textButton1: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    paddingRight: moderateScale(16),
  },

  tinyLogo: {
    marginTop: moderateScale(87),
    alignSelf: 'center',
    marginLeft: moderateScale(21),
    marginRight: moderateScale(22),
    marginBottom: moderateScale(87),
    height: moderateScale(90),
    width: moderateScale(332),
  },
  body: {
    // borderTopRightRadius: moderateScale(32),
    // borderTopLeftRadius: moderateScale(32),
  },
  viewNameContent: {
    marginLeft: moderateScale(28),
    marginRight: moderateScale(28),
  },
  eye: {
    height: moderateScale(16),
    width: moderateScale(16),
  },
  taikhoan: {
    fontSize: moderateScale(15),
    lineHeight: moderateScale(22),
  },
  textFogetPassword: {
    fontSize: moderateScale(15),
    color: '#0364D9',
    lineHeight: moderateScale(22),
  },
  dangky: {
    fontSize: moderateScale(15),
    color: '#0364D9',
    lineHeight: moderateScale(22),
  },
  touchLogin: {
    marginTop: moderateScale(80),
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#007BB3',
    width: moderateScale(247),
  },
  textLogin: {
    color: '#007BB3',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    fontFamily: 'Roboto',
    alignSelf: 'center',
  },
  line: {
    color: '#007BB3',
    // width: moderateScale(247),
    marginBottom: moderateScale(6),
    marginHorizontal: moderateScale(64),
  },
});
