import { Subjects } from "./Teacher";

export namespace Subjects {
  export class Subject {
    teacher: Teacher;

    setTeacher(_teacher: Teacher) {
      teacher = _teacher;
    }
  }
}
