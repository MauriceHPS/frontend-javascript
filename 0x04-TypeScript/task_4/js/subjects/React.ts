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
        this.teacher &&
        this.teacher.experienceTeachingReact &&
        this.teacher.experienceTeachingReact > 0
      ) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
  export const react = new React();
}
