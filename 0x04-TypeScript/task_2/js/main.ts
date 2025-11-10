interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): String;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }

  d = new Director();
}

class Teacher implements TeacherInterface {
  workFromHome(): String {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }

  t = new Teacher();
}

function createEmployee(salary: string | number) {
  if (typeof salary === "number") {
    if (salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  } else {
    return new Director();
  }
}

export function isDirector(employee: string) {
  if (typeof employee === "string") {
    if (employee === "Director") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function executeWork(employee: string) {
  if (employee === "Director") return employee.workDirectorTasks();

  if (employee === "Teacher") return employee.workTeacherTasks();
}

console.log(createEmployee(500));

console.log(createEmployee(700));

console.log(createEmployee(100));
