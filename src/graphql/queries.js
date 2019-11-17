/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeacher = `query GetTeacher($id: String!) {
  getTeacher(id: $id) {
    id
    courses
  }
}
`;
export const listTeachers = `query ListTeachers(
  $filter: TableTeacherFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      courses
    }
    nextToken
  }
}
`;
export const getCourse = `query GetCourse($id: String!, $teacherId: String!) {
  getCourse(id: $id, teacherId: $teacherId) {
    id
    teacherId
    name
    description
    students
  }
}
`;
export const getCoursesByTeacherId = `query GetCoursesByTeacherId($teacherId: String!) {
  getCoursesByTeacherId(teacherId: $teacherId) {
    id
    teacherId
    name
    description
    students
  }
}
`;
export const listCourses = `query ListCourses(
  $filter: TableCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      teacherId
      name
      description
      students
    }
    nextToken
  }
}
`;
export const getStudent = `query GetStudent($id: String!, $courseId: String!) {
  getStudent(id: $id, courseId: $courseId) {
    courseId
    id
    name
    picture
    attendanceRecords
  }
}
`;
export const getStudentsByCourseId = `query GetStudentsByCourseId($courseId: String!) {
  getStudentsByCourseId(courseId: $courseId) {
    courseId
    id
    name
    picture
    attendanceRecords
  }
}
`;
export const listStudents = `query ListStudents(
  $filter: TableStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      courseId
      id
      name
      picture
      attendanceRecords
    }
    nextToken
  }
}
`;
export const getAttendanceRecord = `query GetAttendanceRecord($id: String!, $studentId: String!) {
  getAttendanceRecord(id: $id, studentId: $studentId) {
    id
    studentId
    date
    status
  }
}
`;
export const getAttendanceRecordsByStudentId = `query GetAttendanceRecordsByStudentId($studentId: String!) {
  getAttendanceRecordsByStudentId(studentId: $studentId) {
    id
    studentId
    date
    status
  }
}
`;
export const listAttendanceRecords = `query ListAttendanceRecords(
  $filter: TableAttendanceRecordFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttendanceRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      studentId
      date
      status
    }
    nextToken
  }
}
`;
