export interface User{
profilePicture:string,
userName:string,
email:string,
phoneNumber:string,
birthdate:string,
roleChip: 'admin' | 'user' |'moderator'
}