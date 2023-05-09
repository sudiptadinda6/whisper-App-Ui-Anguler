import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-showdilog',
  templateUrl: './showdilog.component.html',
  styleUrls: ['./showdilog.component.scss']
})
export class ShowdilogComponent implements OnInit {


  ngOnInit(): void {
  }
  @Input()title: string
  content: string;

  

  constructor(protected ref: NbDialogRef<ShowdilogComponent>) {}

  dismiss() {
    this.ref.close();
  }
}
