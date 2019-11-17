/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeacher = `mutation CreateTeacher($input: CreateTeacherInput!) {
  createTeacher(input: $input) {
    id
    courses
  }
}
`;
export const updateTeacher = `mutation UpdateTeacher($input: UpdateTeacherInput!) {
  updateTeacher(input: $input) {
    id
    courses
  }
}
`;
export const deleteTeacher = `mutation DeleteTeacher($input: DeleteTeacherInput!) {
  deleteTeacher(input: $input) {
    id
    courses
  }
}
`;
export const createCourse = `mutation CreateCourse($input: CreateCourseInput!) {
  createCourse(input: $input) {
    id
    teacherId
    name
    description
    students
  }
}
`;
export const updateCourse = `mutation UpdateCourse($input: UpdateCourseInput!) {
  updateCourse(input: $input) {
    id
    teacherId
    name
    description
    students
  }
}
`;
export const deleteCourse = `mutation DeleteCourse($input: DeleteCourseInput!) {
  deleteCourse(input: $input) {
    id
    teacherId
    name
    description
    students
  }
}
`;
export const createStudent = `mutation CreateStudent($input: CreateStudentInput!) {
  createStudent(input: $input) {
    courseId
    id
    attendanceRecords
  }
}
`;
export const updateStudent = `mutation UpdateStudent($input: UpdateStudentInput!) {
  updateStudent(input: $input) {
    courseId
    id
    attendanceRecords
  }
}
`;
export const deleteStudent = `mutation DeleteStudent($input: DeleteStudentInput!) {
  deleteStudent(input: $input) {
    courseId
    id
    attendanceRecords
  }
}
`;
export const createAttendanceRecord = `mutation CreateAttendanceRecord($input: CreateAttendanceRecordInput!) {
  createAttendanceRecord(input: $input) {
    id
    studentId
    date
    status
  }
}
`;
export const updateAttendanceRecord = `mutation UpdateAttendanceRecord($input: UpdateAttendanceRecordInput!) {
  updateAttendanceRecord(input: $input) {
    id
    studentId
    date
    status
  }
}
`;
export const deleteAttendanceRecord = `mutation DeleteAttendanceRecord($input: DeleteAttendanceRecordInput!) {
  deleteAttendanceRecord(input: $input) {
    id
    studentId
    date
    status
  }
}
`;
