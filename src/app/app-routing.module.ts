import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "new",
    component: ReservationFormComponent
  },
  {
    path: "list",
    component: ReservationListComponent
  },
  {
    path: "edit/:id",
    component: ReservationFormComponent
  },
  {
    path: "**",
    component: PageNotFoundComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
