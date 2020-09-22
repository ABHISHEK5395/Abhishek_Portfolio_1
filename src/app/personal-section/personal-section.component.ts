import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-section',
  templateUrl: './personal-section.component.html',
  styleUrls: ['./personal-section.component.css']
})
export class PersonalSectionComponent implements OnInit {

  name : string = "Abhishek Gawande"
  education : string = "EDUCATION"

  constructor() { }

  ngOnInit(): void {
  }

}
