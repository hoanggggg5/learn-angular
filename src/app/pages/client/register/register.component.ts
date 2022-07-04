import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router, 
  ) { 
    this.registerForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const submitData = this.registerForm.value;
    console.log(submitData);

    try {
      this.userService.register(submitData).subscribe((data) => {
        console.log(data); 
      })
    } catch (error) {
      return error
    }
  }
}
