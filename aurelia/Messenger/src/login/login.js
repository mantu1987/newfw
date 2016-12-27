import {Router} from 'aurelia-router';
//class for login
export class Login{
  static inject() { return [Router]; }
  constructor(router){
    this.router = router;
    this.username="";
    this.password="";
  }
  onSubmit(){
    if(this.username=="mantu.nigam"&&this.password=="test")
    {
      this.router.navigate("main");
    }
  }
}
