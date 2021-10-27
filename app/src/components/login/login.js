import React, {useState} from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput} from "react-native";
import tailwind from "tailwind-rn";
import Logo from "../../images/whatsappLogo.png";
const login = () => {
  const [text, setText] = useState('lol')
  return (
    <SafeAreaView style={tailwind("h-full bg-green-300")}>
      <View style={tailwind("pt-12 bg-green-300")}>
        <Image source={Logo} style={tailwind("mt-40 w-20 h-20 ml-36")}/>
        <View style={tailwind("border-light-blue-500 border-opacity-100 rounded-tr-3xl rounded-tl-3xl h-full bg-white ")}>
            <TouchableOpacity>
              <Text style={tailwind("m-8 p-2")}>Username :</Text>
              <TextInput 
                style={tailwind("h-12 m-8 bg-green-300 rounded-lg pl-4 text-white")}
                onChangeText={setText}
                value={text}
              />
              <Text style={tailwind("m-8 p-2")}>Password :</Text>
              <TextInput
                secureTextEntry={true}
                style={tailwind("h-12 m-8 bg-green-300 rounded-lg pl-4 text-white")}
                onChangeText={setText}
                value={text}
              />
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;
