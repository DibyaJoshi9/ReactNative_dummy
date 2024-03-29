import React from 'react';
import {Modal,View,Image,Text,Button,StyleSheet} from 'react-native';
const PlaceDetail = props =>{
	let modalContent = null;
	if(props.selectedPlace){
		modalContent = (
			<View>
				<Image style={styles.imageContainer} source={props.selectedPlace.image}/>
				<Text>
					{props.selectedPlace.name}
				</Text>
			</View>
		)
	}

	return(
		<Modal onRequestClose = {props.onModalClosed} visible={props.selectedPlace!==null} animationType="slide">

			<View style={styles.modalContainer}>
				{modalContent}
				<View>
					<Button title="delete" color="red" onPress={props.onItemDeleted}/>
					<Button title="Close" onPress={props.onModalClosed}/>
				</View>
			</View>
		</Modal>


	)
	
}

const styles = StyleSheet.create({
	modalContainer:{
		margin:30
	},
	imageContainer:{
		width:'100%',
		height:200
	},
	placeName:{
		fontWeight: 'bold',
		textAlign:'center'
	}
});
export default PlaceDetail;