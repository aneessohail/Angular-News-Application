import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  {path:'',component:TopheadlinesComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'tech',component:TechnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
