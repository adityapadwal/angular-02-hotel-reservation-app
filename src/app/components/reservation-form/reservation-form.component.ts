import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from './../../models/reservation';
import { ReservationService } from './../../services/reservation.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.reservationForm = this.formBuilder.group({
      checkInDate: new FormControl('', Validators.required),
      checkOutDate: new FormControl('', Validators.required),
      guestName: new FormControl('', Validators.required),
      guestEmail: new FormControl('', [Validators.required, Validators.email]),
      roomNumber: new FormControl('', Validators.required)
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      this.reservationService.getReservation(id).subscribe((reservation) => {
        if(reservation) {
          this.reservationForm.patchValue(reservation);
        }
      });
    }
  }

  onSubmit() {
    if(this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if(id) {
        // update
        this.reservationService.updateReservation(id, reservation).subscribe((newUpdatedReservation) => {
          console.log(`Reservation with ID: ${newUpdatedReservation.id} updated successfully`);
        })
      } else {
        this.reservationService.addReservation(reservation).subscribe((addedReservation) => {
          console.log(`Reservation with ID: ${addedReservation.id} added successfully`);
        })
      }
      this.reservationForm.reset(); // resets all values
      this.router.navigate(['/list']);
    }
  }
}
