import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CellComponent } from '../components/cell/cell.component';
import { ScorecardComponent } from '../components/scorecard/scorecard.component';
import { CourseSelectComponent } from '../components/course-select/course-select.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CourseSelectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
