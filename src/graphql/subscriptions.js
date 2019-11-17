/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeacher = `subscription OnCreateTeacher($id: String, $courses: [String]) {
  onCreateTeacher(id: $id, courses: $courses) {
    id
    courses
  }
}
`;
export const onUpdateTeacher = `subscription OnUpdateTeacher($id: String, $courses: [String]) {
  onUpdateTeacher(id: $id, courses: $courses) {
    id
    courses
  }
}
`;
export const onDeleteTeacher = `subscription OnDeleteTeacher($id: String, $courses: [String]) {
  onDeleteTeacher(id: $id, courses: $courses) {
    id
    courses
  }
}
`;
export const onCreateCourse = `subscription OnCreateCourse(
  $id: String
  $teacherId: String
  $name: String
  $description: String
  $students: [String]
) {
  onCreateCourse(
    id: $id
    teacherId: $teacherId
    name: $name
    description: $description
    students: $students
  ) {
    id
    teacherId
    name
    description
    students
  }
}
`;
export const onUpdateCourse = `subscription OnUpdateCourse(
  $id: String
  $teacherId: String
  $name: String
  $description: String
  $students: [String]
) {
  onUpdateCourse(
    id: $id
    teacherId: $teacherId
    name: $name
    description: $description
    students: $students
  ) {
    id
    teacherId
    name
    description
    students
  }
}
`;
export const onDeleteCourse = `subscription OnDeleteCourse(
  $id: String
  $teacherId: String
  $name: String
  $description: String
  $students: [String]
) {
  onDeleteCourse(
    id: $id
    teacherId: $teacherId
    name: $name
    description: $description
    students: $students
  ) {
    id
    teacherId
    name
    description
    students
  }
}
`;
export const onCreateStudent = `subscription OnCreateStudent(
  $courseId: String
  $id: String
  $name: String
  $picture: String
  $attendanceRecords: [String]
) {
  onCreateStudent(
    courseId: $courseId
    id: $id
    name: $name
    picture: $picture
    attendanceRecords: $attendanceRecords
  ) {
    courseId
    id
    name
    picture
    attendanceRecords
  }
}
`;
export const onUpdateStudent = `subscription OnUpdateStudent(
  $courseId: String
  $id: String
  $name: String
  $picture: String
  $attendanceRecords: [String]
) {
  onUpdateStudent(
    courseId: $courseId
    id: $id
    name: $name
    picture: $picture
    attendanceRecords: $attendanceRecords
  ) {
    courseId
    id
    name
    picture
    attendanceRecords
  }
}
`;
export const onDeleteStudent = `subscription OnDeleteStudent(
  $courseId: String
  $id: String
  $name: String
  $picture: String
  $attendanceRecords: [String]
) {
  onDeleteStudent(
    courseId: $courseId
    id: $id
    name: $name
    picture: $picture
    attendanceRecords: $attendanceRecords
  ) {
    courseId
    id
    name
    picture
    attendanceRecords
  }
}
`;
export const onCreateAttendanceRecord = `subscription OnCreateAttendanceRecord(
  $id: String
  $studentId: String
  $date: String
  $status: String
) {
  onCreateAttendanceRecord(
    id: $id
    studentId: $studentId
    date: $date
    status: $status
  ) {
    id
    studentId
    date
    status
  }
}
`;
export const onUpdateAttendanceRecord = `subscription OnUpdateAttendanceRecord(
  $id: String
  $studentId: String
  $date: String
  $status: String
) {
  onUpdateAttendanceRecord(
    id: $id
    studentId: $studentId
    date: $date
    status: $status
  ) {
    id
    studentId
    date
    status
  }
}
`;
export const onDeleteAttendanceRecord = `subscription OnDeleteAttendanceRecord(
  $id: String
  $studentId: String
  $date: String
  $status: String
) {
  onDeleteAttendanceRecord(
    id: $id
    studentId: $studentId
    date: $date
    status: $status
  ) {
    id
    studentId
    date
    status
  }
}
`;
