import { Component, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
  
 
})
export class HomeComponent {
  showModal: boolean = false;
  videoUrl!: SafeResourceUrl;

  @ViewChild('videoFrame') videoFrame!: ElementRef;

  constructor(private sanitizer: DomSanitizer,private router: Router) {}

   goToContact(): void {
    this.router.navigate(['/contact']);
  }

  openVideoModal() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/TsLIttbu40k?autoplay=1'
    );
    this.showModal = true;
  }

  closeVideoModal() {
    this.showModal = false;
    // Stop video by resetting the iframe src
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }
}



