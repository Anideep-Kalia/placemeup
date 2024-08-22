import { gql } from 'graphql-tag';

export const FETCH_COLLEGE_DOMAIN = gql`
  query GetCollegeDomain($collegeName: String!) {
    getCollegeDomain(collegeName: $collegeName)
  }
`;

export const GET_COMPANIES_LIST = gql`
  query GetCompaniesList {
    getCompaniesList{
      name
      role
      stipend
      link
      expire
      desc
    }
  }
`;

export const FETCH_ALL_COLLEGE_INFO = gql`
query getAllCollegeInfo
  {
    getAllCollegeInfo {
      id
      adminId
      collegeDomain
      collegeName
      companiesList {
        name
        role
        stipend
        link
        expire
        desc
      }
    }
  }
`;


