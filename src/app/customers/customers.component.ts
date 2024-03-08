import { Component } from '@angular/core';
import { clients } from '../clients';
import { Iclients } from '../iclients';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  clients: Iclients[] = clients;
}
