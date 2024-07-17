import { Component } from '@angular/core';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  employeObj: any = {
    
      "EmployerId": 0,
      "CompanyName": "",
      "EmailId": "",
      "MobileNo": "",
      "PhoneNo": "",
      "CompanyAddress": "",
      "City": "",
      "State": "",
      "PinCode": "",
      "LogoURL": "",
      "GstNo": ""
    }

    jobSeekerObj : any =
    {
      "JobSeekerId": 0,
      "FullName": "",
      "EmailId": "",
      "MobileNo": "",
      "ExperienceStatus": "",
      "ResumeUrl": "",
      "JobSeekerSkills":[],
      "JobSeekerWorkExperiences":[]
    }

    isJobSeeker : boolean = true; 
    constructor(private job:JobService){}

    register(){
      this.job.registerEmpolyer(this.employeObj).subscribe((res:any)=>{
          if(res.result){
            alert(res.message)
          }else{
            alert(res.message)
          }
      })
    }
    registerNewJobSeeker(){
      this.job.registerNewJobSeeker(this.jobSeekerObj).subscribe((res:any)=>{
        if(res.result){
          alert(res.message)
        }else{
          alert(res.message)
        }
      })
    }
}
