const { gql } = require('apollo-server-express');

module.exports = gql`
  type Student {
    id: ID!
    userid: String!
    password: String!
    college: String!
    name:String!
    token:String!
  }

  type StudentInfo {
    id: ID
    userid: String
    name: String!
    college: String!
    companiesApplied: [Company]
    daysLoggedIn: [String]
  }

  type SuperAdmin {
    id: ID!
    email: String!
    password: String!
  }

  type CollegeAdmin {
    id: ID!
    adminId: String!
    password: String!
    college: String!
    name:String!
    token:String!
  }

  type Company {
    name: String!
    role: String!
    stipend: Float!
    link: String!
    expire: Int!
    desc: String!
  }
  
  input CompanyInput {
    name: String!
    role: String!
    stipend: Float!
    link: String!
    expire: Int!
    desc: String!
  }

  type CollegeInfo {
    id: ID
    adminId: ID
    companiesList: [Company!]!
    collegeDomain: String!
    collegeName: String!
  }

  type Query {
    getAllStudents:[StudentInfo!]! #
    getStudentInfo(userid: String!): StudentInfo #
    getStudentByCollege(college: String!): [StudentInfo!]! #
    getDaysLoggedIn: [String!]! #
    getStudentCompanyApplied(company: String!): [StudentInfo!]!

    getCollegeAdmin(adminId: ID!): CollegeAdmin

    getAllCollegeInfo: [CollegeInfo!]! #
    getCollegeInfo(adminId: ID!): CollegeInfo #
    getCompaniesList(adminId: ID!): [Company!]! #
    getCollegeDomain(college: String!): String! #
  }

  type Mutation {
    registerStudent(userid: String!, password: String!, college: String!, confirmPassword:String!, name:String!): Student! #
    loginStudent(userid: String!, password: String!): Student! #
    
    
    registerCollegeAdmin(adminId: String!, password: String!, college: String!, confirmPassword:String!, name:String!): CollegeAdmin! #
    loginCollegeAdmin(adminId: String!, password: String!): CollegeAdmin! #

    addStudentInfo: StudentInfo! #
    addCompanyToStudentInfo(company: CompanyInput!): StudentInfo! #
    updateStudentInfo(name: String, companiesApplied: [CompanyInput], daysLoggedIn: [String]): StudentInfo!
    deleteStudentInfo(userid:String!): Boolean! #
    

    createCollegeInfo(collegeDomain: String!, collegeName: String!): CollegeInfo! #
    addCompanyToCollegeInfo(company: CompanyInput!): CollegeInfo! #
    updateCollegeInfo(collegeDomain: String, collegeName: String, company: [CompanyInput]): CollegeInfo!
    deleteCollegeInfo(adminId: ID!): Boolean!
    }
`;
