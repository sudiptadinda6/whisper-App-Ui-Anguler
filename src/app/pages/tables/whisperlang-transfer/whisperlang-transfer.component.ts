import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { NbDialogService } from '@nebular/theme';
import { ShowdilogComponent } from './showdilog/showdilog.component';

enum ModelList {
  TINY = 'tiny',
  SMALL = 'small',
  BASE = 'base',
  MEDIUM = 'medium',
  LARGE = 'large',
}

const modellist = Object.entries(ModelList).map(entry => ({
  value: entry[1],
  title: entry[0],
}))


enum LanguageList {
  ENGLISH = 'English',
  GERMAN = 'German',
  SPANISH = 'Spanish',
  BENGALI = 'Bengali',
  NAPALI = 'Napali',
  JAPANESE = 'Japanese'
}

const langList = Object.entries(LanguageList).map(entry => ({
  value: entry[1],
  title: entry[0],
}))

enum modeTranction {
  TRANSLATE = 'translate',
  TRANSCRIPTION = 'transcription',
}

const tractionmode = Object.entries(modeTranction).map(entry => ({
  value: entry[1],
  title: entry[0],
}))

@Component({
  selector: 'ngx-whisperlang-transfer',
  templateUrl: './whisperlang-transfer.component.html',
  styleUrls: ['./whisperlang-transfer.component.scss']
})
export class WhisperlangTransferComponent implements OnInit {


  loading: boolean = false


  constructor(private fromBilder: FormBuilder,
    private service: TasksService,
    private dialogService: NbDialogService) { }

  @ViewChild('form') form;

  ngOnInit(): void {

  }

  list = modellist
  langListNew = langList
  typeDetailes = tractionmode
  dataDetailes: any
  myFormtralater = this.fromBilder.group({
    model: ['', [Validators.required]],
    language: ['', [Validators.required]],
    translationtype: [''],
    file: ['', [Validators.required]],
    fileSource: ['', [Validators.required]]
  });

  get f() {
    return this.myFormtralater.controls;
  }

  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myFormtralater.patchValue({
        fileSource: file
      });
    }
  }

  submitdata() {
    this.loading = true;
    const formData = new FormData();
    formData.append('file', this.myFormtralater.get('fileSource').value)
    formData.append('model', this.myFormtralater.value.model)
    formData.append('language', this.myFormtralater.value.language)
    formData.append('translationtype', this.myFormtralater.value.translationtype)
    this.service.taskfileUploadAndRead(formData).subscribe((res) => {
      this.loading = false
      this.dialogService.open(ShowdilogComponent, {
        context: {
          title: 'Trancription Result',
          content: res.message,
        },
      });
    })
    this.form.nativeElement.reset()
  }
}

