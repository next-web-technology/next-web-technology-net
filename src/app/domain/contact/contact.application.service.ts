import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contact, ContactResponse } from './contact.model';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root',
})
export class ContactApplicationService {
  constructor(
    private contactService: ContactService,
    private _snackBar: MatSnackBar,
  ) {}

  send(contact: Contact): void {
    this.contactService
      .send$(contact)
      .subscribe((contactResponse: ContactResponse) => {
        if (contactResponse.status === 'success') {
          this._snackBar.open('お問い合わせ内容を送信しました', '閉じる', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        } else if (contactResponse.status === 'failure') {
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
