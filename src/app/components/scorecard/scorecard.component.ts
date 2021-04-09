import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/interfaces/player';
import { CourseDataService } from 'src/app/services/course-data.service';
import { SavedDataService } from 'src/app/services/saved-data.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {
  courseId: string;
  courseData;
  teebox;
  players: Player[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private courseDataService: CourseDataService,
    private savedDataService: SavedDataService,
    private route: Router
  ) {
    this.courseId = this.activeRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.courseDataService.getCourseById(this.courseId);

    this.courseDataService.getRequest().subscribe((data: any[]) => {
      this.courseData = data
    });

    if (this.savedDataService.savedData == undefined) {
      this.route.navigate(['/data/', this.courseId])
    } else {
      this.teebox = this.savedDataService.savedData.teebox - 1;
    }

    if (this.savedDataService.savedData.player1 != '') {
      this.players.push({
        name: this.savedDataService.savedData.player1,
        hole1: 0,
        hole2: 0,
        hole3: 0,
        hole4: 0,
        hole5: 0,
        hole6: 0,
        hole7: 0,
        hole8: 0,
        hole9: 0,
        hole10: 0,
        hole11: 0,
        hole12: 0,
        hole13: 0,
        hole14: 0,
        hole15: 0,
        hole16: 0,
        hole17: 0,
        hole18: 0
      })
    }

  }
}
