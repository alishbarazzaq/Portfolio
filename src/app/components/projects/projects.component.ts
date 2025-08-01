import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
  {
    image: 'assets/images/P1.png',
    title: 'Sticky Notes App',
    description: 'Its a sticky note app where you can save your notes, update them, and delete them.',
    tag: 'Web App',
    demoLink: 'https://github.com/alishbarazzaq/Sticky-Notes'
  },
  {
    image: 'assets/images/P2.png',
    title: 'Calculator',
    description: 'I made a calculator using Figma. It performs all arithmetic operations correctly..',
    tag: 'Frontend',
    demoLink: 'https://github.com/alishbarazzaq/Calculator-'
  },
  {
    image: 'assets/images/P3.png',
    title: 'Portfolio',
    description: 'I created a complete portfolio website using the Angular framework.',
    tag: 'Frontend',
    demoLink: 'https://github.com/alishbarazzaq/Portfolio'
  }
];


  constructor() { }

  ngOnInit(): void {
  }

}
