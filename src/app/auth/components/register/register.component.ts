import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/models/User';
import { RegisterUserService } from 'src/app/auth/services/register-user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  inProgress: boolean = false;
  user: User;
  error: string ='';

  constructor(private registerUserService: RegisterUserService, private Router: Router) {
    this.user = new User({email: '', username: '', name: '',id: ''});
   }

  ngOnInit(): void {
    this.inProgress = false;
    this.user = new User({email: '', username: '', name: '',id: ''});
  }

  async login(){
    this.inProgress = true;
    this.error = await this.registerUserService.register(this.user);
    this.inProgress = false;
    this.Router.navigate(['/']);
  }

}
