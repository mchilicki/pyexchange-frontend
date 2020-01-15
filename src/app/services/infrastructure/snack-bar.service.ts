import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string = 'OK', isWarning: boolean = false) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: isWarning ? ['snack-bar-warning'] : []
    });
  }
}
