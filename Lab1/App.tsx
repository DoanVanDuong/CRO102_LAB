import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Block from './components/Block'
import Baner from './components/Baner'
import TextInput from './components/TextInput'
import { MyTheme, useTheme } from './components/MyTheme'
import CustomTextInput from './components/TextInput'
import CustomButton from './components/Button'
const BlockThongTin = () => {
  const [hoTen, sethoTen] = useState('');
  const handlePress = () => {
    Alert.alert('Button pressed!');
  };
  return (
    <View>
      <Text style={{color:'blue',fontSize:20,marginLeft:5,marginTop:10,fontStyle:'italic'}}>Thông tin sinh viên</Text>
      <CustomTextInput  onChangeText={sethoTen} placeholder="Nhập tên" label="Họ và tên" />
      <CustomTextInput onChangeText={sethoTen} placeholder="Nhập địa chỉ" label="Địa chỉ" />
      <CustomTextInput onChangeText={sethoTen} placeholder="Nhập số điện thoại" label="Số điện thoại" />
      <CustomButton
        title="Submit"
        onPress={handlePress}
        buttonStyle={st.customButton2}
        textStyle={st.customButtonText}
      />
    </View>
  )
}
const BlockKhoaHoc = () => {
  const [khoaHoc, setkhoaHoc] = useState('');
  const handlePress = () => {
    Alert.alert('Button pressed!');
  };
  return (
    <View>
      <Text style={{color:'red',fontSize:20,marginLeft:5,marginTop:10,fontStyle:'italic'}}>Thông tin khóa học</Text>
      <CustomTextInput  onChangeText={setkhoaHoc} placeholder="Nhập khóa học" label="Tên khóa học" />
      <CustomTextInput onChangeText={setkhoaHoc} placeholder="Nhập lớp" label="Lớp học" />
      <CustomButton
        title="Search"
        onPress={handlePress}
        buttonStyle={st.customButton}
        textStyle={st.customButtonText}
      />
    </View>
  )
}
const BodyApp = () => {
 
  const { theme, toggleTheme } = useTheme();
 

  return (
    <View style={[st.khung, { backgroundColor: theme === 'light' ? '#fff' : '#000' }]}>
      <View style={{ alignItems: 'center', margin: 10,width:'100%' }}>
        <Image style={{ width: '40%', height: 50 }} source={{ uri: 'https://ap.poly.edu.vn/images/logo.png' }} />
      </View>
      <BlockThongTin/>
      <BlockKhoaHoc/>
      <TouchableOpacity
        style={[st.button, { backgroundColor: theme === 'light' ? '#018786' : '#fff' }]}
        onPress={toggleTheme}
      >
        <Text style={{ color: theme === 'light' ? '#fff' : '#000' }}>
          Đổi giao diện
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const App = () => {

  return (
    <MyTheme>
      <BodyApp />
    </MyTheme>
  )
}

export default App

const st = StyleSheet.create({
  khung: {
    flex: 1, borderWidth: 1,
    borderColor: 'red'

  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 5,
  },
  customButton: {
    backgroundColor: '#dc3545',
    marginVertical: 10,
    margin: 5
  },
  customButton2: {
    backgroundColor: '#6200EE',
    marginVertical: 10,
    margin: 5
  },
  customButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
