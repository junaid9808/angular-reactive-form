import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  buildForm = inject(FormBuilder);
  user: FormGroup = this.buildForm.group({
    selectedCountry: [''],
    city: [''],
  });
  onSubmit() {
    var formValue = this.user.value;
    console.log('Your form data : ', formValue);
    alert('data added successfully');
  }
}
