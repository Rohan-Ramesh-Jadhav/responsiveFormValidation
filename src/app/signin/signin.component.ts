import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';

interface IUserData{
	name:string,
	password:string
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
	faEye = faEye;
	signinData:IUserData = {name:'',password:''};
  
	signinForm = new FormGroup({
		name: new FormControl(
			this.signinData.name,
			[
				Validators.required,
				Validators.minLength(5),
				Validators.pattern(/[A-Za-z ]/g)
			]
		),

		password: new FormControl(
			this.signinData.password,
			[
				Validators.required,
				Validators.minLength(6),
				Validators.maxLength(8),
				Validators.pattern(/[A-z0-9!@#$%^&*]/g),
			],
		)
	})

	get name() { return this.signinForm.get('name') }

	get password() { return this.signinForm.get('password') }

	submitFun(){
		console.log('form submit')
	}
}
