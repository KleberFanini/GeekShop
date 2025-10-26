import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, NgClass, ReactiveFormsModule, RouterLink],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  activeTab: 'login' | 'register' = 'login';
  loginForm: FormGroup;
  registerForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  setTab(tab: 'login' | 'register') {
    this.activeTab = tab;
  }

  handleLogin() {
    if (this.loginForm.invalid) return;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      console.log('Login', this.loginForm.value);
      this.router.navigate(['/']);
    }, 1500);
  }

  handleRegister() {
    if (this.registerForm.invalid) return;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      console.log('Register', this.registerForm.value);
      this.router.navigate(['/']);
    }, 1500);
  }
}
