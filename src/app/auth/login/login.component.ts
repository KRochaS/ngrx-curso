import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/IUser';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  user: IUser;
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
  }

  login() {
    this.serviceService.login(this.user).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

}
