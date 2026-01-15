import { JsonPipe } from '@angular/common';
import { Reservation } from './../models/reservation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  // all hotel reservations go in here
  private reservations: Reservation[] = [];

  // constructor
  constructor() {
    const reservations = localStorage.getItem("reservations");
    this.reservations = reservations ? JSON.parse(reservations): [];
  }

  // Read reservations (return all reservations)
  getReservations(): Reservation[] {
    return this.reservations;
  }

  // Read reservation (resturn a single reservation)
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id)
  }

  // Create a new reservation
  addReservation(res: Reservation): void {
    res.id = Date.now().toString();

    this.reservations.push(res);
    this.saveReservationsToLocalStorage();
  }

  // Delete a reservation
  deleteReservation(id : string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1)
    this.saveReservationsToLocalStorage();
  }

  // Update a reservation
  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === id);
    updatedReservation.id = id;
    this.reservations[index] = updatedReservation;
    this.saveReservationsToLocalStorage();
  }

  saveReservationsToLocalStorage(): void {
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
}
