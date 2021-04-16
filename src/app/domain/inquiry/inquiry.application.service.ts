import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Inquiry, InquiryResponse } from '../../domain/inquiry/inquiry.model';
import { InquiryService } from '../../domain/inquiry/inquiry.service';

@Injectable({
  providedIn: 'root',
})
export class InquiryApplicationService {
  constructor(
    private inquiryService: InquiryService,
    private _snackBar: MatSnackBar,
  ) {}

  send(inquiry: Inquiry): void {
    this.inquiryService
      .send$(inquiry)
      .subscribe((inquiryResponse: InquiryResponse) => {
        if (inquiryResponse.status === 'success') {
          this._snackBar.open('お問い合わせ内容を送信しました', '閉じる', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        } else if (inquiryResponse.status === 'failure') {
          this._snackBar.open(
            'お問い合わせ内容の送信が拒否されました',
            '閉じる',
            {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            },
          );
        } else {
          this._snackBar.open(
            'お問い合わせ内容の送信で不明なエラーが発生しました',
            '閉じる',
            {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            },
          );
        }
      });
  }
}
