import { Injectable } from '@angular/core';

@Injectable()
export class PersonelService {
  getPersonels() {
  }
  addPersonel(personel: { id: number; name: string; email: string }) {
    // Logic to add personal
  }
  removePersonel(id: number) {
    // Logic to remove personal
  }
}