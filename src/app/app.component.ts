import { Component, ElementRef, ViewChild, HostListener, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('cursorCircle') cursorCircle!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    const circle = this.cursorCircle.nativeElement;
    circle.style.top = `${e.clientY}px`;
    circle.style.left = `${e.clientX}px`;

    const target = e.target as HTMLElement;

    // Check if hovering over button, link, or interactive
    if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('hover-target')) {
      this.renderer.addClass(circle, 'cursor-white');
    } else {
      this.renderer.removeClass(circle, 'cursor-white');
    }
  }

  @HostListener('document:click')
  onClick(): void {
    const circle = this.cursorCircle.nativeElement;
    circle.style.transform = 'translate(-50%, -50%) scale(1.8)';
    setTimeout(() => {
      circle.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 150);
  }
}
