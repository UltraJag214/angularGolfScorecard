import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../../services/course-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.component.html',
  styleUrls: ['./course-data.component.scss']
})
export class CourseDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
