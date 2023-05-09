import { _Right } from '@angular/cdk/scrolling';
import { Injectable } from '@angular/core';
import { NbToastrService} from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private toastrService: NbToastrService) {}

  showInfo(message: string, duration = 7500) {
    this.toastrService.info(message, null, {
      duration,
    });
  }

  showSuccess(message: string, duration = 7500) {
    this.toastrService.success(message, null, {
      duration,
    });
  }

  showMessage(message: string, duration = 7500) {
    this.toastrService.danger(message, null, {
      duration,
    });
  }
}
