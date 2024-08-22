import gql from 'graphql-tag';

export const LOGIN_STUDENT = gql`
  mutation LoginStudent($password: String!, $userid: String!) {
    loginStudent(password: $password, userid: $userid) {
      id
      token
      userid
    }
  }
`;

export const UPDATE_STUDENT_INFO = gql`
  mutation UpdateStudentInfo($userid: String!) {
    updateStudentInfo(userid: $userid) {
      id
      userid
      daysLoggedIn
    }
  }
`;

export const REGISTER_STUDENT = gql`
  mutation RegisterStudent(
    $userid: String!,
    $college: String!,
    $password: String!,
    $confirmPassword: String!,
    $name: String!
  ) {
    registerStudent(
      userid: $userid,
      college: $college,
      password: $password,
      confirmPassword: $confirmPassword,
      name: $name
    ) {
      id
      token
      userid
      name
      college
    }
  }
`;
