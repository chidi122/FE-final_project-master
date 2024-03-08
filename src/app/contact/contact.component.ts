// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrl: './contact.component.css'
// })
// export class ContactComponent {

//   contactForm!: FormGroup; 

//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit(): void {
//     this.contactForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       message: ['', Validators.required]
//     });
//   }

//   submitForm(): void {
//     if (this.contactForm.valid) {
//       console.log('Form submitted:', this.contactForm.value);
//     } else {
//       console.log('Form is invalid. Please fill in all required fields.');
//     }
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  message: string = '';

  constructor() { }

  sendMessage() {
    // Implement your logic to send the message
  }
}
