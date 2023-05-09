import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TasksService } from '../tasks.service';
import { NotificationService } from '../notification.service';


enum TaskStatus {
  DONE = 'done',
  IN_PROGRESS = 'in-progress',
  CANCELLED = 'cancelled',
  CREATED = 'created',
  DELETED = 'deleted',
}
const taskList = Object.entries(TaskStatus).map(entry => ({
  value: entry[1],
  title: entry[0],
}))

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      description: {
        title: 'description',
        type: 'string',
      },
      status: {
        title: 'status',
        type: 'html',
        valuePrepareFunction: (cell, row, companyList) => {
          const task = taskList.find(x => x.value === cell);
          if (task) {
            return task.title;
          }
          else {
  
            return cell;
          }
        },
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: taskList,
          }
        }
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  //ALL TASK DETAILS IN TABLES 

  constructor(private service: TasksService, private toastrService: NotificationService) {
    this.service.taskDetailes().subscribe((result) => {
      this.source.load(result)
      this.toastrService.showSuccess("*****Table Task Successfully Refresh !!!!!")
    });
    ;
  }

  //DELETE TASK

  onDeleteConfirm(event): void {

    if (window.confirm('Are you sure you want to delete?')) {
      let idTask: string = event.data._id;
      this.service.taskDelete(idTask).subscribe((result) => {
        this.toastrService.showSuccess(result.massage)
      }, (error) => {
        this.toastrService.showMessage(error.error.massage)
      })
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  //EDIT TASK

  onEditConfirm(event): void {

    if (window.confirm('Are you sure you want to edit?')) {
      let taskUpdate: any = event.newData
      this.service.taskEdit(taskUpdate).subscribe((result) => {
        this.toastrService.showSuccess(result.massage)
      }, (error) => {
        this.toastrService.showMessage(error.error.massage)
      })
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  //CREATE TASK 

  onCreateConfirm(event): void {
    if (window.confirm('Are you sure you want to create?')) {
      let newData = event.newData
      this.service.taskCreate(newData).subscribe((result) => {
        this.toastrService.showSuccess(result.massage)
      }, (error) => {
        this.toastrService.showMessage(error.error.message)
      }
      )
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
