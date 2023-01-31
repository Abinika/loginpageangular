import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

formdata = {name:""};
submit=false;

formdata1 = {email:""};
formdata2={password:""};
  onSubmit(){
console.log(this.formdata)
  }
}
