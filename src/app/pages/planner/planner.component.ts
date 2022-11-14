import { Component } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

export interface PlannerTask {
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  faTrash = faTrash;
  plannerTasks: PlannerTask[] = [];
  inputValue = '';

  addTask(): void {
    if (this.inputValue) {
      const newTask = { text: this.inputValue, done: false };
      this.plannerTasks.push(newTask);
      this.inputValue = '';
    }
  }
  deleteTask(index: number): void {
    this.plannerTasks.splice(index, 1);
  }
  showCompletedTasks(): string {
    let counter = 0;
    for (const task of this.plannerTasks) {
      if (task.done == true) {
        counter++;
      }
    }

    return 'You have completed ' + counter + ' of ' + this.plannerTasks.length + ' tasks!';
  }
}
