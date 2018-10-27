import React from 'react';
import {View, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import {Button, Icon, ListItem} from 'react-native-elements';
import Card from '../../components/CustomCard';
import Header from '../../components/CustomHeader';
import {StyledHeader, StyledHeaderInverse, StyledText, StyledTextInverse} from "../../components/Typography";
import Colors from "../../constants/Colors";

const list = [
    {
        name: 'Church Almanac',
        icon: 'calendar-multiselect',
        type: 'material-community',
        subtitle: 'View upcoming church events'
    },
    {
        name: 'Weekly Sermons',
        icon: 'microphone',
        type: 'material-community',
        subtitle: 'View weekly sermons in text, audio and video'
    },
];

export default class Index extends React.Component {
    static navigationOptions = {
        header: null,
    };

    navigate(screen){
        this.props.navigation.navigate(screen);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title={'Home'}/>

                <ScrollView style={styles.main}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => this.navigate('Announcements')}>
                            <Card image={require('../../assets/images/announcement-bg.jpg')}
                                  imageStyle={{
                                      height: 120,
                                      width: 154,
                                      overflow: 'hidden',
                                      borderTopStartRadius: 10,
                                      borderTopEndRadius: 10
                                  }}
                                  title={<StyledTextInverse>Announcements</StyledTextInverse>}
                                  titleStyle={{justifyContent: 'center', alignSelf: 'center'}}
                            >
                                <StyledText
                                    style={{justifyContent: 'center', alignSelf: 'center'}}>Announcements</StyledText>
                            </Card>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => this.navigate('ChurchNews')}>
                            <Card image={require('../../assets/images/news-bg.png')}
                                  imageStyle={{
                                      height: 120,
                                      width: 154,
                                      overflow: 'hidden',
                                      borderTopStartRadius: 10,
                                      borderTopEndRadius: 10
                                  }}
                                  titleStyle={{justifyContent: 'center', alignSelf: 'center'}}
                            >
                                <StyledText style={{justifyContent: 'center', alignSelf: 'center'}}>Church
                                    News</StyledText>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row'}}>

                        <TouchableOpacity onPress={() => this.navigate('DailyDevotional')}>
                            <Card image={require('../../assets/images/devotional-bg.png')}
                                  imageStyle={{
                                      height: 120,
                                      width: 154,
                                      overflow: 'hidden',
                                      borderTopStartRadius: 10,
                                      borderTopEndRadius: 10
                                  }}
                                  titleStyle={{justifyContent: 'center', alignSelf: 'center'}}
                            >
                                <StyledText style={{justifyContent: 'center', alignSelf: 'center'}}>Daily
                                    Devotional</StyledText>
                            </Card>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => this.navigate('Hymnal')}>
                            <Card image={require('../../assets/images/hymnal-bg.gif')}
                                  imageStyle={{
                                      height: 120,
                                      width: 154,
                                      overflow: 'hidden',
                                      borderTopStartRadius: 10,
                                      borderTopEndRadius: 10
                                  }}
                                  title={<StyledTextInverse>Announcements</StyledTextInverse>}
                                  titleStyle={{justifyContent: 'center', alignSelf: 'center'}}
                            >
                                <StyledText style={{justifyContent: 'center', alignSelf: 'center'}}>Hymnal</StyledText>
                            </Card>
                        </TouchableOpacity>

                    </View>

                    <View style={{ marginTop: 40}}>
                        {
                            list.map((l, i) => (
                                <ListItem
                                    key={i}
                                    avatar={<Icon name={l.icon} type={l.type} color={Colors.tintColor}/>}
                                    title={l.name}
                                    subtitle={l.subtitle}
                                />
                            ))

                        }
                    </View>
                </ScrollView>

            </View>

        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    top: {
        backgroundColor: '#F6F6F7',
        padding: 20,
        paddingTop: 50,
        height: 100,
        justifyContent: 'center',
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
    },

    main: {
        flex: 1,
        flexDirection: 'row',
    }
};
