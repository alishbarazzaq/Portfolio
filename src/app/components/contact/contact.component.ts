import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isLoading: boolean = false;

  constructor(
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const email = form.value.email;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Email',
          text: 'Please enter a valid email address (e.g. user@example.com)',
          confirmButtonColor: '#00d084'
        });
        return; // ❌ Stop here, don't save to Firestore
      }

      this.isLoading = true;

      const formData = {
        name: form.value.name,
        email: email,
        message: form.value.message,
        timestamp: new Date()
      };

      this.firestore.collection('contacts').add(formData)
        .then(() => {
          this.snackBar.open('✅ Your message has been sent successfully!', 'Close', {
            duration: 4000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
          form.resetForm();
        })
        .catch(error => {
          console.error('❌ Error saving message:', error);
          this.snackBar.open('❌ Something went wrong. Please try again.', 'Close', {
            duration: 4000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }

  copyEmail() {
    const email = "alishbarazzaq342@gmail.com"; 
    navigator.clipboard.writeText(email).then(() => {
      this.snackBar.open('📋 Email copied to clipboard!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    }).catch(err => {
      console.error('Clipboard copy failed:', err);
      this.snackBar.open('❌ Failed to copy email.', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    });
  }
}
