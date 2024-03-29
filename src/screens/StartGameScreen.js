import {TextInput, View, StyleSheet} from "react-native"
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}


export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        padding:16,
        marginTop:100,
        marginHorizontal:24,
        backgroundColor:'#4e0329',
        borderRadius:8,
        shadowColor:'black',
        shadowOffset:{width: 0, height:10},
        shadowRadius:6,
        shadowOpacity:0.25
    },
    numberInput:{
        height:50,
        width:50,
        textAlign:"center",
        fontSize:32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:"#ddb52f",
        marginVertical:8,
        fontWeight:'bold'
    }
});