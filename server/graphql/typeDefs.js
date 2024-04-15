const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Student {
    id: ID!
    userid: String!
    password: String!
  }

  type StudentInfo {
    id: ID!
    studentId: ID!
    name: String!
    college: String!
    companiesApplied: [String!]!
    daysLoggedIn: [Date!]!
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
    getDaysLoggedIn(studentId: ID!): [Date!]!

    getCollegeAdmin(adminId: ID!): CollegeAdmin
    getCompaniesList(adminId: ID!): [Company!]!
    getCollegeDomain(college: String!): String!
  }

  type Mutation {
      registerStudent(userid: String!, password: String!, college: String!): Student!
      loginStudent(userid: String!, password: String!): StudentInfo
    
    updateStudentInfo(studentId: ID!, name: String, college: String, companiesApplied: [String], daysLoggedIn: [Date]): StudentInfo!
    addStudentInfo(studentId: ID!, name: String!, college: String!, companiesApplied: [String!], daysLoggedIn: [Date!]): StudentInfo!
    deleteStudentInfo(studentId: ID!): Boolean


      registerCollegeAdmin(email: String!, password: String!): CollegeAdmin!
    updateCollegeAdmin(adminId: ID!, email: String, password: String): CollegeAdmin!
    deleteCollegeAdmin(adminId: ID!): Boolean
      loginCollegeAdmin(email: String!, password: String!): CollegeAdmin
  }
`;

module.exports = typeDefs;
