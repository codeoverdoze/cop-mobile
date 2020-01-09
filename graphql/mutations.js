import { gql } from "@apollo/client";
import {exp} from "react-native-reanimated";

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
