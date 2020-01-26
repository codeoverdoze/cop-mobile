import { gql } from "@apollo/client";

const loginMember = gql`
  mutation($phone: String!) {
      loginMember(input: {phone: $phone}){
          success
          message
      }
  }
`;

const validateLoginMember = gql`
    mutation($phone: String! $otp: String!){
        validateLoginMember(input: {phone: $phone otp: $otp}){
            mobileToken
        }
    }
`;


export { loginMember, validateLoginMember }
