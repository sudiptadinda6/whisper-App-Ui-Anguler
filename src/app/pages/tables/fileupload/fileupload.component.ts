import { Component,  OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'ngx-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})

export class FileuploadComponent implements OnInit {

  constructor(private service: TasksService, private toastrService: NotificationService) { }

  @ViewChild('form') form;

  ngOnInit(): void {
  }

  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });



  get f() {
    return this.myForm.controls;
  }

  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
   
  }
  submit() {
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource').value);

    this.service.taskfileUpload(formData).subscribe((res) => {
      this.toastrService.showSuccess(res.massage)
    },
     (error) => {
      this.toastrService.showMessage(error.error.message)
    })
      this.form.nativeElement.reset() 
  }
}
