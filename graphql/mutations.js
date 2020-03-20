import { gql } from '@apollo/client';

const loginMember = gql`
  mutation($phone: String!) {
    loginMember(input: { phone: $phone }) {
      success
      message
    }
  }
`;

const validateLoginMember = gql`
  mutation($phone: String!, $otp: String!) {
    validateLoginMember(input: { phone: $phone, otp: $otp }) {
      mobileToken
      newUser
      member {
        contact {
          primaryTelephone
        }
      }
    }
  }
`;

const onboardNewUser = gql`
  mutation($congregation: ID, $surname: String, $firstName: String) {
    onboardNewUser(
      input: { congregation: $congregation, surname: $surname, firstName: $firstName }
    ) {
      surname
      firstName
    }
  }
`;

export { loginMember, validateLoginMember, onboardNewUser };
