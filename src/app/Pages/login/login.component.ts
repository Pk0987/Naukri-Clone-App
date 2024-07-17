import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginObj: any = {
    "UserName" : "",
    "Password" : ""
  }
  constructor(
    private job: JobService,
    private route: Router
  ){}

  onLogin(){
    this.job.login(this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert('Login Successfull');
        localStorage.setItem('JobLoginUser', JSON.stringify(res.data));
        this.route.navigateByUrl('/home');
      }else{
        alert(res.message)
      }
    })
  }
}
