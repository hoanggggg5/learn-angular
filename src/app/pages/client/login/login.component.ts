import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private userService: UserService, // cung cấp createProduct
    private router: Router, // cung cấp navigate điều hướng
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const submitData = this.loginForm.value;
    console.log(submitData);

    try {
      this.userService.login(submitData).subscribe((data) => {
        console.log(data); 
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigateByUrl('/');
      })
    } catch (error) {
      return error
    }

  }

}
