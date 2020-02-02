import React from 'react';
import {StyleSheet, View} from "react-native";
import {StyledText, StyledTextInverse} from "../../../components/Typography";
import {EvilIcons} from "@expo/vector-icons";

const TableContent = ({ contentLabel }) => {
    return(
        <View style={[styles.listItem]}>
            <View style={[{flexDirection: "row"}]}>
                <View
                    style={[
                        styles.circleShapeView,
                        {
                            backgroundColor: `rgb(${Math.floor(
                                Math.random() * 255
                            )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                                Math.random() * 255
                            )})`,
                            borderRadius: 50
                        }
                    ]}
                >
                    <StyledTextInverse style={{fontSize: 16}}>
                        { contentLabel.substr(0,1) }
                    </StyledTextInverse>
                </View>
                <View style={{justifyContent: "center"}}>
                    <StyledText style={{fontSize: 18}}>
                        {contentLabel}
                    </StyledText>
                </View>
            </View>

            <View>
                <EvilIcons name={"chevron-right"} size={20}/>
            </View>
        </View>
    );
}

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

export default TableContent;
