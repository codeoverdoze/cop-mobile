import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { StyledText, StyledTextInverse } from '../../../components/Typography';
import { useQuery, gql } from '@apollo/client';
import LoadingState from '../../../components/LoadingState';
import ChildScreenHeader from '../../../components/ChildScreenHeader';
import SVGIcon from '../../../components/SVGIcon';
import { forwardIcon } from '../../../assets/icons';
import ColorHash from 'color-hash';
import ParentScreenHeader from '../../../components/ParentScreenHeader';

const colorHash = new ColorHash();

const query = gql`
  query {
    presbyteries {
      name
      zone
      _id
    }
  }
`;

export default function Presbytery({ navigation }) {
  const { data, loading } = useQuery(query);

  function navigateToDistrictSelection(presbytery) {
    navigation.navigate('District', { presbytery });
  }

  function renderPresbytery(presbytery) {
    const firstLetterInPresbytery = presbytery.item.name.substring(0, 1);
    return (
      <TouchableOpacity onPress={() => navigateToDistrictSelection(presbytery.item)}>
        <View style={[styles.listItem]}>
          <View style={[{ flexDirection: 'row' }]}>
            <View
              style={[
                styles.circleShapeView,
                {
                  backgroundColor: colorHash.hex(firstLetterInPresbytery),
                  borderRadius: 50,
                },
              ]}
            >
              <StyledTextInverse style={{ fontSize: 16 }}>
                {firstLetterInPresbytery}
              </StyledTextInverse>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <StyledText style={{ fontSize: 16 }}>{presbytery.item.name}</StyledText>
              <StyledText style={{ fontSize: 14 }}>{presbytery.item.zone}</StyledText>
            </View>
          </View>

          <View>
            <SVGIcon source={forwardIcon} width={15} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  if (!data && loading) {
    return <LoadingState />;
  }

  if (data) {
    const { presbyteries } = data;
    return (
      <View style={[styles.container]}>
        <ParentScreenHeader title="Presbytery Selection" />
        <FlatList
          data={presbyteries}
          renderItem={renderPresbytery}
          keyExtractor={item => item._id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
  },

  main: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  headerBar: {
    backgroundColor: '#387ecb',
    height: 80,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 40,
  },
  list: {
    marginBottom: 70,
  },

  listItem: {
    padding: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: '#cecece',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  circleShapeView: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
