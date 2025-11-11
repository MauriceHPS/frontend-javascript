// React.ts
import { Subjects } from "./Teacher";
import { Subject } from "./Subject";

export namespace Subjects {
  // Extend Teacher interface for React experience
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (
        teacher &&
        teacher.experienceTeachingReact &&
        teacher.experienceTeachingReact > 0
      ) {
        return `Available Teacher: ${teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
