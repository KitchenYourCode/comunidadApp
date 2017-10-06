import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends Component {
	render(){
		return(
			<View style={style.container}>
				<TextInput
				style={style.input}
				placeholder="Email"
				placeholderTextColor="rgba(000,000,000,0.3)"
				returnKeyType="next"
				keyboardType="email-address"
					/>
					<TextInput
				style={style.input}
				placeholder="password"
				placeholderTextColor="rgba(000,000,000,0.3)"
				secureTextEntry
				returnKeyType="go"
					/>	
					<TouchableOpacity onPress={()=>alert("asdas")} style={style.buttonContainer}>
						<Text style={style.buttonText}>
							Login
						</Text>
					</TouchableOpacity>
				</View>
			);
	}
}
const style = StyleSheet.create({
	container:{
		padding: 20
	},
	input:{
		height:40,
		backgroundColor: "rgba(255,255,255,0.4)",
		marginBottom: 20,
		color: '#000',
		paddingHorizontal: 10
	},
	buttonContainer:{
		backgroundColor: "#d35400",
		paddingVertical: 15	
	},
	buttonText:{
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '700'
	}

})