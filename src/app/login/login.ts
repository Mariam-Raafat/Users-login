import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
role:string =''
users:User[]=[
  {
    profilePicture: "imgs/user_person_profile_account_icon_259562.svg",
    userName: "mariam Rafat",
    email: "mariam@gmail.com",
    phoneNumber: "0123",
    birthdate: "2001-5-5",
    roleChip: "admin" 
  },
  {
    profilePicture: "imgs/user_person_profile_account_icon_259562.svg",
    userName: "mariam_rafat",
    email: "mariam@gmail.com",
    phoneNumber: "456",
    birthdate: "2001-5-5",
    roleChip: "user" 
  },
  {
   profilePicture: "imgs/user_person_profile_account_icon_259562.svg",
    userName: "mariam_rafat",
    email: "mariam@gmail.com",
    phoneNumber: "789",
    birthdate: "2001-5-5",
    roleChip: "moderator" 
  }
]
filteredUsers:User[]=this.users;
search(){
const targetRole = this.role.trim().toLowerCase();
if (targetRole) {
  this.filteredUsers = this.users.filter(user => user.roleChip === targetRole)
}else{
  this.filteredUsers = this.users;
}
}
}
