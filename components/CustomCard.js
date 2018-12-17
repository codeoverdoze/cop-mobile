import { Card, Button, Icon } from 'react-native-elements';
import React from "react";


const CustomCard = (props) => {
    return (
        <Card
            imageStyle={{ ...props.imageStyle }}
            containerStyle={{ borderRadius: 10, margin: 20 }}
            image={props.image}
        >
            {props.children}
        </Card>
    )
};

export default CustomCard;