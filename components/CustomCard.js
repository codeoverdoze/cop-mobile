import { Card, Button, Icon } from 'react-native-elements';
import React from "react";


const CustomCard = (props) => {
    return (
        <Card
            imageStyle={{ ...props.imageStyle }}
            containerStyle={{ height: 150, width: 155, borderRadius: 10, padding: -10}}
            image={props.image}
            title={props.title}
            titleStyle={props.titleStyle}
        >
            {props.children}
        </Card>
    )
};

export default CustomCard;