import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../../components/reservation-form/reservation-form.component';
import { ReservationListComponent } from '../../components/reservation-list/reservation-list.component';



@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReservationModule { }
