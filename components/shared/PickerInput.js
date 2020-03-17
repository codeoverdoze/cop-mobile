import React, { useState } from "react"
import RNPickerSelect from 'react-native-picker-select';
import Colors from "../../constants/Colors";
import styled from "styled-components";
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import {View} from "react-native";

const CustomPickerInput = ({label, options, placeholder}) => {
    placeholder = {value: null, label: placeholder, color: "#eeeeee" };
    const [attribute, setAttribute] = useState(false);
    return (
        <FormContainer>
            <InputHeader>{ label }</InputHeader>
            <View style={{ flexDirection: "row", borderWidth: 0.8, borderColor: attribute ? Colors.tintColor : '#e3e3e3', paddingHorizontal: 10,
                backgroundColor: "#ffffff",paddingVertical: 10, justifyContent: "center",
                borderRadius: 5,
            }}>
                <RNPickerSelect
                    textInputProps={{ style: {
                            fontFamily: "regular",
                        } }}
                    onValueChange={(value) => console.log(value)}
                    items={options}
                    placeholder={placeholder}
                />
                <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "center"}}>
                  <EvilIcons name="chevron-down" size={30} color="black" />
                </View>
            </View>
        </FormContainer>

    );
};

const FormContainer = styled.View`
	padding-horizontal: 0px;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const InputHeader = styled.Text`
	font-family: "bold";
	margin-bottom: 10px;
`;

export default CustomPickerInput;
