import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  ImageBackground
} from "react-native";
import {
  StyledHeader,
  StyledHeaderInverse,
  StyledText,
  StyledTextInverse
} from "../../components/Typography";
import { Ionicons } from "@expo/vector-icons";
import format from "date-fns/format";
import Carousel from "react-native-snap-carousel";
import Layout from "../../constants/Layout";
import EventCard from "../../components/EventCard";
import poster from "../../assets/images/poster.jpg";
import Colors from "../../constants/Colors";

const events = [
  {
    title: "Hello",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWYyMWUyYTEtOGU2ZC00MTUwLWJkMGUtZmY3YjBhNDgyNzI4XkEyXkFqcGdeQXVyNjA3NjA0Njg@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    title: "Hello",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWYyMWUyYTEtOGU2ZC00MTUwLWJkMGUtZmY3YjBhNDgyNzI4XkEyXkFqcGdeQXVyNjA3NjA0Njg@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  }
];

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle("light-content");
  }

  navigate(screen) {
    this.props.navigation.navigate(screen);
  }

  _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={{ uri: item.image }}
          style={{
            height: Layout.window.height / 1.5,
            width: Layout.window.width,
            marginHorizontal: 5
          }}
        />

        <StyledText style={styles.title}>{item.title}</StyledText>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Carousel
          ref={c => {
            this.carousel = c;
          }}
          data={events}
          renderItem={({ item }) => (
            <>
              <ImageBackground
                source={poster}
                style={{
                  height: Layout.window.height / 1.5,
                  backgroundColor: Colors.tintColor
                }}
              >
                <View style={{ paddingVertical: 40, paddingHorizontal: 20 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: 40,
                      marginBottom: 20
                    }}
                  >
                    <Ionicons name="ios-arrow-back" color="#fff" size={25} />

                  </View>
                </View>
              </ImageBackground>
              <View
                style={{
                  alignItems: "center",
                  paddingHorizontal: 20
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <StyledHeader style={{ fontSize: 40 }}>
                    Gospel Revelation
                  </StyledHeader>

                  <View style={{ marginTop: 20, alignItems: "center" }}>
                    <StyledText>
                      21st March 2020
                    </StyledText>
                    <StyledText>
                      Independence Square, Accra
                    </StyledText>
                  </View>
                </View>
                
                <StyledHeader style={{ fontSize: 15 }}>
                  Swipe left to next event
                </StyledHeader>
              </View>
            </>
          )}
          sliderWidth={Layout.window.width}
          itemWidth={Layout.window.width}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingLeft: 40,
    paddingRight: 40
  },

  header: {
    backgroundColor: "#387ecb",
    height: 80,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 40
  },

  body: {
    paddingTop: 30,
    paddingBottom: 100,
    backgroundColor: "#FFFFFF"
  },

  bodyItem: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center"
  },

  bodyImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  bodyContent: {
    flex: 3,
    justifyContent: "center"
  }
});
