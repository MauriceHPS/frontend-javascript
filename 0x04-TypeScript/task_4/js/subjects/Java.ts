// Java.ts
import { Subjects } from "./Teacher";
import { Subject } from "./Subject";

export namespace Subjects {
  // Extend Teacher interface for Java experience
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (
        teacher &&
        teacher.experienceTeachingJava &&
        teacher.experienceTeachingJava > 0
      ) {
        return `Available Teacher: ${teacher.firstName}`;
      }
      return "No available teacher";
    }
  }

  export const java = new Java();
}
