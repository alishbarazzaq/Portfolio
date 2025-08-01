import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  successMessage: string = '';

  onSubmit() {
    // ✅ You can add real submission logic here (e.g., send to Firebase)

    // Show confirmation message
    this.successMessage = '✅ Your message has been sent successfully!';

    // Auto-hide the message after 4 seconds
    setTimeout(() => {
      this.successMessage = '';
    }, 4000);
  }
}
