import { Component, OnInit } from '@angular/core';
import { MapServiceService } from '../../services/map-service.service';


@Component({
  selector: 'app-course-select',
  templateUrl: './course-select.component.html',
  styleUrls: ['./course-select.component.scss']
})
export class CourseSelectComponent implements OnInit {

  courses = [];

  constructor(private mapService: MapServiceService) { }

  ngOnInit(): void {
    this.mapService.getCourseData().subscribe((data: any[]) => {
      this.courses = data;
    });
  }

}
