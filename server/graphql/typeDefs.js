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
    id: ID!
    userid: String!
    studentId: String!
    name: String!
    college: String!
    companiesApplied: [String]
    daysLoggedIn: [String]
  }

  type SuperAdmin {
    id: ID!
    email: String!
    password: String!
  }

  type CollegeAdmin {
    id: ID!
    email: String!
    password: String!
  }

  type Company {
    name: String!
    role: String!
    stipend: Float!
    link: String!
    expire: Int!
    desc: String!
  }

  type CollegeAdminInfo {
    id: ID!
    adminId: ID!
    companiesList: [Company!]!
    collegeDomain: String!
    collegeName: String!
  }

  type Query {
    getStudentInfo(studentId: ID!): StudentInfo
    getStudentByCollege(college: String!): [StudentInfo!]!
    getStudentCompanyApplied(company: String!): [StudentInfo!]!
    getDaysLoggedIn(studentId: ID!): [String!]!

    getCollegeAdmin(adminId: ID!): CollegeAdmin
    getCompaniesList(adminId: ID!): [Company!]!
    getCollegeDomain(college: String!): String!

    getCollegeAdminInfo(adminId: ID!): CollegeAdminInfo
    getAllCollegeAdminInfo: [CollegeAdminInfo!]!
  }

  type Mutation {
    registerStudent(userid: String!, password: String!, college: String!, confirmPassword:String!, name:String!): Student!
    loginStudent(userid: String!, password: String!): Student!
    
    addStudentInfo(studentId: String, name: String, college: String, companiesApplied: [String], daysLoggedIn: [String], userid: String): StudentInfo!
    updateStudentInfo(studentId: ID!, name: String, college: String, companiesApplied: [String], daysLoggedIn: [String]): StudentInfo!
    deleteStudentInfo(studentId: ID!): Boolean!

    registerCollegeAdmin(email: String!, password: String!): CollegeAdmin!
    loginCollegeAdmin(email: String!, password: String!): CollegeAdmin!

    createCollegeAdminInfo(adminId: ID!, collegeDomain: String!, collegeName: String!): CollegeAdminInfo!
    updateCollegeAdminInfo(adminId: ID!, collegeDomain: String, collegeName: String): CollegeAdminInfo!
    deleteCollegeAdminInfo(adminId: ID!): Boolean!
  }
`;
