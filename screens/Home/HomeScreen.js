import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StyledHeader, StyledHeaderInverse, StyledText } from '../../components/Typography';
import SVGIcon from '../../components/SVGIcon';
import styled from 'styled-components';

// data
import { homeItemsList } from './data';

// icons
import { activeNotificationIcon } from '../../assets/icons';

const BodyItem = props => (
  <View style={[styles.bodyItem]}>
    <View style={[styles.bodyImage]}>
      <SVGIcon source={props.image} noFill width={50} height={50} />
    </View>

    <View style={styles.bodyContent}>
      <StyledHeader style={{ fontSize: 15 }}>{props.title}</StyledHeader>
      <StyledText>{props.content}</StyledText>
    </View>
  </View>
);

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  navigate(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderContainer>
          <StyledHeaderInverse style={{ fontSize: 30 }}>Home</StyledHeaderInverse>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Notifications')}>
            <SVGIcon source={activeNotificationIcon} noFill />
          </TouchableOpacity>
        </HeaderContainer>

        <ScrollView contentContainerStyle={[styles.body]} showsVerticalScrollIndicator={false}>
          {homeItemsList.map(item => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate(item.link)}
                key={item.title}
              >
                <BodyItem
                  image={item.image}
                  title={item.title}
                  content={item.content}
                  key={item.key}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },

  body: {},

  bodyItem: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  bodyImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bodyContent: {
    flex: 3,
    justifyContent: 'center',
  },
});

const HeaderContainer = styled.View`
  background-color: #25569c;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 40px;
`;
