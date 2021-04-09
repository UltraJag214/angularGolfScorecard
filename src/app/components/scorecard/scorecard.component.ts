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

  holes: string[] = ['hole1', 'hole2', 'hole3', 'hole4', 'hole5', 'hole6', 'hole7', 'hole8', 'hole9', 'hole10', 'hole11', 'hole12', 'hole13', 'hole14', 'hole15', 'hole16', 'hole17', 'hole18'];

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
    if (this.savedDataService.savedData.player2 != '') {
      this.players.push({
        name: this.savedDataService.savedData.player2,
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
    if (this.savedDataService.savedData.player3 != '') {
      this.players.push({
        name: this.savedDataService.savedData.player3,
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
    if (this.savedDataService.savedData.player4 != '') {
      this.players.push({
        name: this.savedDataService.savedData.player4,
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



    

    console.log(this.savedDataService.savedData);

  }

  getTotalOut(player: Player): number {
    console.log(player);
    return player.hole1 + player.hole2 + player.hole3 + player.hole4 + player.hole5 + player.hole6 + player.hole7 + player.hole8 + player.hole9;
  }

  getTotalIn(player: Player): number {
    return player.hole10 + player.hole11 + player.hole12 + player.hole13 + player.hole14 + player.hole15 + player.hole16 + player.hole17 + player.hole18;
  }

  getTotal(player: Player): number {
    return player.hole1 + player.hole2 + player.hole3 + player.hole4 + player.hole5 + player.hole6 + player.hole7 + player.hole8 + player.hole9 + player.hole10 + player.hole11 + player.hole12 + player.hole13 + player.hole14 + player.hole15 + player.hole16 + player.hole17 + player.hole18;
  }
}
