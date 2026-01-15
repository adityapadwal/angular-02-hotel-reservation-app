import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../../components/reservation-form/reservation-form.component';
import { ReservationListComponent } from '../../components/reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "src/app/app-routing.module";
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomeModule
]
})
export class ReservationModule { }
