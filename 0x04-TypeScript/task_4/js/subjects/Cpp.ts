import { Subjects } from "./Teacher";
import { Subject } from "./Subject";

export namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (
        teacher &&
        teacher.experienceTeachingC &&
        teacher.experienceTeachingC > 0
      ) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
  export const cpp = new Cpp();
}
