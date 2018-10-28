import { Card, Button, Icon } from 'react-native-elements';
import React from "react";


const CustomCard = (props) => {
    return (
        <Card
            imageStyle={{ ...props.imageStyle }}
            containerStyle={{ borderRadius: 10 }}
            image={props.image}
            title={props.title}
            titleStyle={props.titleStyle}
        >
            {props.children}
        </Card>
    )
};

export default CustomCard;