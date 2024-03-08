import { Component } from '@angular/core';
import { Iclients } from '../iclients';
import { clients } from '../clients';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('1s ease-in-out')),
    ]),
  ], 
})
export class LandingComponent {
  clients: Iclients[] = clients;
  counter: number = 0;

  toggleValue(i: number) {
    clients[i].visible = !clients[i].visible;
    clients.forEach((client) => {
      if (clients[i] != client) {
        client.visible = false;
      }
    });
  }
  constructor() {}
  ngOnInit(): void {
    setInterval(() => {
      if (this.counter < this.clients.length) {
        this.toggleValue(this.counter);
        this.counter++;
      } else {
        this.counter = 0;
      }
    }, 3000);
  }

}
