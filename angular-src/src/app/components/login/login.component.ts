import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

 username: string = '';
 password: string = '';
 errorFlag: Boolean;
	ngOnInit(){

	}
	// router1 :Router;
	constructor(private router:Router){

	}
  loginClicked() {
    if (this.username && this.username.trim() !== '' && this.password && this.password.trim() !== ''){
			if(this.username == 'admin' && this.password == 'admin'){
				this.username = '';
				this.password = '';
				this.errorFlag = false;
				this.router.navigate(['user']);
			}
			this.username = '';
			this.password = '';
			this.errorFlag = false;
    }else {
      this.errorFlag = true;
    }
	}
	
	singup():void{
		this.router.navigate(['signup']);
	}


}
