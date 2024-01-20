import { View, Text, Pressable, StyleSheet} from "react-native";
function PrimaryButton({ children }) {
    return (
        <Pressable style = {({pressed})=> pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>

    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: "#72063c",
        borderRadius:28,
        paddingVertical:8,
        paddingHorizontal:16,
        margin:4
    },
    buttonText:{
        color:"white",
        textAlign:"center",
    },
    pressed:{
        opacity:0.75,
    }
});