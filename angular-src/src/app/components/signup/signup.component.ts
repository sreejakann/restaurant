import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
	}
	
	username: string;
	password: string;
	firstname: string;
	lastname: string;

	cancle():void{
		this.username = '';
		this.password = '';
		this.firstname = '';
		this.lastname = '';
	}

	back():void{
		this.router.navigate(['login']);
	}

}
