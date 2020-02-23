import React from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

// components
import ChildScreenHeader from '../../components/ChildScreenHeader';
import LoadingState from '../../components/LoadingState';

const query = gql`
  query {
    notifications {
      data {
        title
        message
        createdAt
      }
    }
  }
`;

export default function Notifications() {
  const { loading, data } = useQuery(query);

  if (loading) {
    return <LoadingState />;
  }

  console.log(data);
  return (
    <Container>
      <ChildScreenHeader title="Notifications" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f4f6f8;
`;
