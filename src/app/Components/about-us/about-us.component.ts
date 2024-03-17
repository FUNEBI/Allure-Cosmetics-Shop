import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { UsersService } from './../../Services/users/users.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  constructor(
    public UsersService: UsersService,
    private fb:FormBuilder,
  ){}
  usersComments: any;
  formGroup!: FormGroup;

  ngOnInit(): void {
    this.initForm()
    this.getusers()
  }

  get f() {
    return this.formGroup.controls;
  }

  initForm() {
    this.formGroup = this.fb.group({
      email: [
        '',
       Validators.compose([
         Validators.required,
         Validators.email
        ])
      ],
      
    })
  }
  getusers(){
    this.UsersService.getUsers()
      .subscribe((data:any)=>{
        if(data){
          console.log(data)
          this.usersComments = data.users.filter(function(users:any){
            return users.gender == 'male'
          })
        }
        
      })
  }
}
