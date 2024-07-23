import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Block from './components/Block'
import Baner from './components/Baner'
import TextInput from './components/TextInput'
import { MyTheme, useTheme } from './components/MyTheme'
import CustomTextInput from './components/TextInput'
import CustomButton from './components/Button'
const BodyApp = () => {
  // sử dụng hook để thao tác với theme
  const [hoTen, sethoTen] = useState('');
  const { theme, toggleTheme } = useTheme();
  const handlePress = () => {
    Alert.alert('Button pressed!');
  };
  const bannerUri = theme === 'light'
  ? 'https://images.pexels.com/photos/5238645/pexels-photo-5238645.jpeg?auto=compress&cs=tinysrgb&w=600'
  : 'https://i.pinimg.com/564x/1c/53/94/1c53941b621b0b47a38a0bf20f588c7c.jpg';

  return (
    <View style={[st.khung, { backgroundColor: theme === 'light' ? '#fff' : '#000' }]}>
      <Block header="MURAD" content="Your Brand" onBackPress={() => { console.log('Back clicked!') }} />
      <Baner uri_img={bannerUri} />
      <CustomTextInput mythem={theme} onChangeText={sethoTen} placeholder="Nhập nội dung" label="Họ và tên" />
      <CustomButton
        title="Press Me"
        onPress={handlePress}
        buttonStyle={st.customButton}
        textStyle={st.customButtonText}
      />
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

const App1 = () => {

  return (
    <MyTheme>
      <BodyApp />
    </MyTheme>
  )
}

export default App1

const st = StyleSheet.create({
  khung: {
    flex: 1, borderWidth: 1,
    borderColor: 'red'

  },
   button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  customButton: {
    backgroundColor: '#dc3545',
    marginVertical: 10,
    margin:5
  },
  customButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
