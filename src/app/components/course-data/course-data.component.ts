import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseDataService } from 'src/app/services/course-data.service';
import { SavedDataService } from 'src/app/services/saved-data.service';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.component.html',
  styleUrls: ['./course-data.component.scss']
})
export class CourseDataComponent implements OnInit {
  courseId: string;
  courseData;

  matFormGroup: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private courseDataService: CourseDataService,
    public fb: FormBuilder,
    private savedDataService: SavedDataService
  ) { 
    this.courseId = this.activeRoute.snapshot.params.id;

    this.matFormGroup = fb.group({
      teebox: [''],
      player1: ['', [this.noDuplicates]],
      player2: [''],
      player3: [''],
      player4: ['']
    });
  }

  ngOnInit(): void {
    this.courseDataService.getCourseById(this.courseId);

    this.courseDataService.getRequest().subscribe((data: any[]) => {
      this.courseData = data
      console.log(data)
    });
  }

  onSubmit() {
    this.savedDataService.savedData = this.matFormGroup.value;
  }

  noDuplicates(control) {
    // console.log(control)
  }

}
