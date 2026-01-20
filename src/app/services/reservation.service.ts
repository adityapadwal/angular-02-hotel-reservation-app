import { JsonPipe } from '@angular/common';
import { Reservation } from './../models/reservation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  // api url endpoint
  private apiUrl = 'http://localhost:3001';

  // all hotel reservations go in here
  private reservations: Reservation[] = [];

  // constructor for dependency injection
  constructor(private http: HttpClient) {

  }

  // Read reservations (return all reservations)
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  }

  // Read reservation (resturn a single reservation)
  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + "/reservation/" + id);
  }

  // Create a new reservation
  addReservation(res: Reservation): Observable<Reservation> {
    // res.id = Date.now().toString();

    // this.reservations.push(res);
    return this.http.post<Reservation>(this.apiUrl + '/reservation', res);
  }

  // Delete a reservation
  deleteReservation(id : string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/reservation/" + id);
  }

  // Update a reservation
  updateReservation(id: string, updatedReservation: Reservation): Observable<Reservation>{
    return this.http.put<Reservation>(this.apiUrl + "/reservation/" + id, updatedReservation);
  }

}
