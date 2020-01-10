import React from 'react';
import {FlatList, Image, SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {StyledHeader, StyledHeaderInverse, StyledText} from "../../components/Typography";
import { Ionicons } from '@expo/vector-icons';
import FamilyCardAvatar from "../../components/FamilyCardAvatar";
import MembershipIcon from "../../components/MembershipIcons";

const userProfileImage = require("../../assets/images/placeholder-image.png");
const storiesData = [
    {
        id: 1,
        imageURI: 'https://i.pravatar.cc/100',
        name: 'Effie',
    },
    {
        id: 2,
        imageURI: 'https://i.pravatar.cc/101',
        name: '__Abyna',
    },
    {
        id: 3,
        imageURI: 'https://i.pravatar.cc/102',
        name: 'Derrick',
    },
    {
        id: 4,
        imageURI: 'https://i.pravatar.cc/103',
        name: 'Alfread',
    },
    {
        id: 5,
        imageURI: 'https://i.pravatar.cc/104',
        name: 'James',
    },
    {
        id: 6,
        imageURI: 'https://i.pravatar.cc/105',
        name: 'Henry',
    },
];
const MembershipDetails = () => {
    return(
        <View style={[styles.container]}>
            <View style={[styles.headerBar]}>
                <StyledHeaderInverse style={{ alignSelf: "flex-start"}}>Membership Details </StyledHeaderInverse>
            </View>
            <View>
                <ScrollView>
                    <View style={{backgroundColor: '#fff', paddingVertical: 10, borderBottomColor: '#c3c3c3', borderBottomWidth: 0.3}}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 20,  }}>
                            <View style={{flex: 3}}>
                                <Image
                                    source={userProfileImage}
                                    style={{ height: 90, width: 90}}
                                />
                            </View>
                            <View style={{flex: 7, justifyContent: 'center'}}>
                                <StyledHeader>Michael Agbo Tettey Soli</StyledHeader>
                                <StyledText>Young Adult Fellowship</StyledText>
                                <StyledText>PCG/NLA/PXT/0273</StyledText>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10}}>
                            <View style={{flexDirection: 'row'}}>
                                <MembershipIcon source={require('../../assets/icons/ringing-phone.svg')} height={20} width={20}/>
                                <StyledText style={{marginLeft: 5}}>+233(0)540-710-554</StyledText>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <MembershipIcon source={require('../../assets/icons/phone.svg')} height={20} width={20}/>
                                <StyledText style={{marginLeft: 5}}>+233(0)540-710-554</StyledText>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 20,
                        }}
                        >
                            <View style={{flexDirection: 'row'}}>
                                <MembershipIcon source={require('../../assets/icons/gmail.svg')} height={20} width={20}/>
                                <StyledText style={{marginLeft: 5}}>agbotettey@gmail.com</StyledText>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#ffff', marginTop: 10, paddingVertical: 10, borderBottomColor: '#c3c3c3', borderBottomWidth: 0.3}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
                            <StyledHeader>Family</StyledHeader>
                            <StyledText>Add New</StyledText>
                        </View>
                        <View style={{paddingVertical: 10}}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                data={storiesData}
                                renderItem={({ item }) => <FamilyCardAvatar imageURI={item.imageURI} profileName={item.name} />}
                            />
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#ffff', marginTop: 10, borderBottomColor: '#c3c3c3', borderBottomWidth: 0.3}}>
                        <View style={{flexDirection: 'row', paddingVertical: 10, borderBottomColor: '#c3c3c3', borderBottomWidth: 0.3}}>
                            <View style={{ flexDirection: 'row', flex:  1}}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 20}}>
                                    <MembershipIcon source={require('../../assets/icons/couple.svg')} />
                                </View>
                                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                                    <StyledText>Marital Status</StyledText>
                                    <StyledHeader>Single</StyledHeader>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <MembershipIcon source={require('../../assets/icons/purposeful-man.svg')} />
                                </View>
                                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                                    <StyledText>Communicant Status</StyledText>
                                    <StyledHeader>Communicant</StyledHeader>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', paddingVertical: 10, borderBottomColor: '#c3c3c3', borderBottomWidth: 0.3, paddingHorizontal: 20}}>
                            <View style={{ flexDirection: 'row'}}>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <MembershipIcon source={require('../../assets/icons/user-account.svg')} />
                                </View>
                                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                                    <StyledText>Non Generational Group</StyledText>
                                    <StyledHeader>Bible Study & Prayer Group (BSPG)</StyledHeader>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', paddingVertical: 10, borderBottomColor: '#c3c3c3', borderBottomWidth: 0.3}}>
                            <View style={{ flexDirection: 'row', flex:  1}}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 20}}>
                                    <MembershipIcon source={require('../../assets/icons/admin-settings-male.svg')} />
                                </View>
                                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                                    <StyledText>Session Member</StyledText>
                                    <StyledHeader>No</StyledHeader>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <MembershipIcon source={require('../../assets/icons/thinking-male.svg')} />
                                </View>
                                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                                    <StyledText>Baptism Status</StyledText>
                                    <StyledHeader>Baptized</StyledHeader>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', paddingVertical: 10, borderBottomColor: '#c3c3c3', borderBottomWidth: 0.3, paddingHorizontal: 20}}>
                            <View style={{ flexDirection: 'row'}}>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <MembershipIcon source={require('../../assets/icons/address.svg')} />
                                </View>
                                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                                    <StyledText>Residential Address</StyledText>
                                    <StyledHeader>No. 22, Down Town - Old Ashongman</StyledHeader>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', paddingVertical: 10, borderBottomColor: '#c3c3c3', borderBottomWidth: 0.3, paddingHorizontal: 20}}>
                            <View style={{ flexDirection: 'row'}}>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <MembershipIcon source={require('../../assets/icons/real-estate.svg')} />
                                </View>
                                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                                    <StyledText>Home Town</StyledText>
                                    <StyledHeader>Ada Foah, Greater Accra</StyledHeader>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', paddingVertical: 10, borderBottomColor: '#c3c3c3', borderBottomWidth: 0.3, paddingHorizontal: 20}}>
                            <View style={{ flexDirection: 'row'}}>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <MembershipIcon source={require('../../assets/icons/landlord.svg')} />
                                </View>
                                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                                    <StyledText>Next of Kin</StyledText>
                                    <StyledHeader>Cynthia Owusu-Antwi | 0244923099</StyledHeader>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>

    )
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
        flex: 3
    },

    mainItem: {
        backgroundColor: "#FFFFFF",
    },

    headerBar: {
        backgroundColor: "#387ecb",
        height: 80,
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: 40,
    },
});

export default MembershipDetails;
