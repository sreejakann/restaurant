import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	userdetails: string[] = ['admin', 'non-admin'];
	selectedValue: string;
	usertypes: string[] = ['user', 'not-user'];
  constructor() { }

  ngOnInit() {
		
	}
	userType(e){
		console.log(e);
	}
}

