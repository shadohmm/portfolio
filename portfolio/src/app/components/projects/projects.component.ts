import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      id: '01',
      title: 'TOPSLICE',
      description: `A scalable MEAN stack application for ordering pizzas. Built a responsive frontend with Angular 
      and implemented robust backend logic with Node.js and PostgreSQL. Created RESTful APIs for seamless communication 
      and optimized database queries to enhance performance.`,
      techStack: ['Node.js', 'Angular', 'MongoDB', 'Express', 'TypeScript', 'JavaScript'],
      githubLink: 'https://github.com/shadohmm/TopSlice',
      image: '../../../assets/images/Topslice.png',
      altText: 'TopSlice Home Page',
    },
    {
      id: '02',
      title: 'SMART STREET LIGHT SYSTEM',
      description: `A project utilizing RFID technology for vehicle identification on streets, automatically activating 
      streetlights upon detecting a vehicle.`,
      techStack: [
        'RFID (Radio Frequency Identification)',
        'IoT',
        'MongoDB',
        'Arduino',
        'Arduino Programming Language',
        'Object Detection',
      ],
      githubLink: 'https://github.com/shadohmm/Smart-Street-Light-Management-System',
      image: '../../../assets/images/SmartStreetLight.png',
      altText: 'Smart Street Light System',
    },
  ];

}
