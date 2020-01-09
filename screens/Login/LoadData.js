import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {StyledHeader, StyledHeaderInverse, StyledText} from "../../components/Typography";
import Colors from "../../constants/Colors";
import {gql, useQuery} from "@apollo/client";


const queries = gql`
    query {
        memberProfile{
            firstName
            middleName
            surname
            communicant
            contact {
                primaryTelephone
                secondaryTelephone
                email
                nextOfKin {
                    name
                    telephone
                }
            }
            congregation {
                name
                location
                catechist
                phone
                residentPastor
                district {
                    name
                    presbytery {
                        name
                    }
                }
            }
        }
    }
`

function LoadData({ navigation }) {
    const { loading, data, error } = useQuery(queries);

    if(data){
        setTimeout(() => {
            navigation.navigate('Main')
        }, 3000)
    }

    if(error){
        console.log('error', error)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator color={Colors.tintColor}/>
            <StyledHeader>Please wait</StyledHeader>
            <StyledText>We are loading your church details</StyledText>
        </View>
    )
}

export default LoadData