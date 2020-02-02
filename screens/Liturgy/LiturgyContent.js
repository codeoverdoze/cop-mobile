import React from "react";
import {FlatList, StyleSheet, TouchableOpacity, View, ScrollView} from "react-native";
import {StyledHeader, StyledText, StyledTextInverse} from "../../components/Typography";
import {Ionicons} from "@expo/vector-icons";


const LiturgyContent = ({ navigation }) => {
    return(
        <View style={[styles.container]}>
            <View style={[styles.headerBar]}>
                <View style={{paddingLeft: 20}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons
                            name={"ios-arrow-back"}
                            size={30}
                            color="#FFFFFF"
                            style={{justifyContent: "center"}}
                        />
                    </TouchableOpacity>
                </View>
                <StyledTextInverse style={{fontSize: 20, alignSelf: "center"}}>
                    { navigation.getParam("liturgyTitle") }
                </StyledTextInverse>
                <View style={{paddingRight: 20}}/>
            </View>
            <View style={{paddingBottom: 70}}>
                <ScrollView>
                    <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                        <StyledText style={{ fontSize: 16}}>
                            { navigation.getParam("liturgyContent") }
                        </StyledText>
                    </View>
                </ScrollView>


            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F6F8"
    },

    header: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "space-between"
    },

    main: {
        paddingLeft: 20,
        paddingRight: 20
    },

    headerBar: {
        backgroundColor: "#387ecb",
        height: 80,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: 40
    },
    list: {
        marginBottom: 70
    },

    listItem: {
        padding: 15,
        borderBottomWidth: 0.3,
        borderBottomColor: "#cecece",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    circleShapeView: {
        width: 40,
        height: 40,
        borderRadius: 150 / 2,
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center"
    }
});
export default LiturgyContent;
