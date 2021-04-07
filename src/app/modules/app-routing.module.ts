import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CellComponent } from '../components/cell/cell.component';
import { ScorecardComponent } from '../components/scorecard/scorecard.component';
import { CourseSelectComponent } from '../components/course-select/course-select.component';
import { CourseDataComponent } from '../components/course-data/course-data.component';

const routes: Routes = [
  // { path: '', redirectTo: 'courses', pathMatch: 'full' },
  // { path: 'courses', component: CourseSelectComponent },
  // { path: 'data/:id', component: CourseDataComponent },
  // { path: 'scorecard/:id', component: ScorecardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
