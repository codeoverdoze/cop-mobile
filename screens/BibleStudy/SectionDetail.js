import React from "react";
import {FlatList, StyleSheet, TouchableOpacity, View, ScrollView} from "react-native";
import {StyledHeader, StyledText, StyledTextInverse} from "../../components/Typography";
import {EvilIcons, Ionicons} from "@expo/vector-icons";
import TableContent from "./components/TableContent";

const SectionDetail = ({ navigation }) => {
    const sectionContent = navigation.getParam("bsgSection");

    console.log(sectionContent);
    function renderLessonContent({item: bsgLesson}) {

        return (
            <TouchableOpacity
                onPress={() => navigateToLessonDetails(bsgLesson)}
            >
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
                                S
                            </StyledTextInverse>
                        </View>
                        <View style={{justifyContent: "center"}}>
                            <StyledText style={{fontSize: 16}}>
                                Lesson { ' 1 ' }
                            </StyledText>
                            <StyledText style={{fontSize: 16}}>
                                {bsgLesson.title}
                            </StyledText>
                        </View>
                    </View>

                    <View>
                        <EvilIcons name={"chevron-right"} size={20}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

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
                     Bible Study Guide
                </StyledTextInverse>
                <View style={{paddingRight: 20}}/>
            </View>
            <View style={{paddingBottom: 70}}>
                <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                    <StyledHeader>Section Title</StyledHeader>
                    <StyledText>{sectionContent.title}</StyledText>
                </View>
                <View style={{paddingHorizontal: 20, paddingVertical: 10 }}>
                    <StyledHeader>Section Introduction</StyledHeader>
                    <StyledText>{sectionContent.introduction}</StyledText>
                </View>
                <View style={{paddingHorizontal: 20, paddingVertical: 10, borderBottomColor: '#c3c3c3', borderBottomWidth: 0.3, marginTop: 20}}>
                    <StyledHeader>Section Lessons</StyledHeader>
                </View>


                <FlatList
                    data={sectionContent.lessons}
                    renderItem={renderLessonContent}
                    keyExtractor={item => item.year}
                />


            </View>
        </View>
    );
};
export default SectionDetail;

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
