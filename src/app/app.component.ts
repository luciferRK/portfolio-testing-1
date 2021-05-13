import { HttpClient } from '@angular/common/http';
import { Component, ViewChild , OnInit, AfterContentInit, AfterViewInit} from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host:{
    "(window:resize)":"onWindowResize($event)"
  }
})
export class AppComponent implements OnInit,AfterContentInit{


  preloading:Boolean=true;
  navbarName:String = "Likhith R Kulal";
  changeClass:Boolean = false;
  submitted:Boolean = false;
  submitMsgColor:any = {
    "color":"rgb(0,206,0)"
  };
  submitText:String = "";
  url:string="https://script.google.com/macros/s/AKfycbyCFb0nTCXrSAD0v5lE39k7GURnRzema_Y_8hv3d-1DC4qCXspYgvaLbmlqPTIVmSQP1w/exec"
  welcomeMsg:String = "Welcome, It's Likhith RK";

  constructor(
    private scroller:ViewportScroller,
    private http:HttpClient
    ){
    this.loadScript();
    if(window.innerWidth<window.innerHeight){
      this.navbarName="Likhith RK";
    }
  }

  ngOnInit(){
    
  }

  ngAfterContentInit(){
    this.preloading=false;
  }

  
  loadScript(){
    // const scripts=[
    //   "../assets/files/main.js",
    // ];
    // for (let i = 0; i < scripts.length; i++) {
    //   const node = document.createElement('script'); 
    //   node.src = scripts[i]; 
    //   node.type = 'text/javascript'; 
    //   node.async = false; 
    //   document.getElementsByTagName('head')[0].appendChild(node); 
    // }
  }

  showResume(){
    window.open("../assets/files/LIKHITH_R_KULAL.pdf","_blank");
  }

  toggleChange(){
    this.changeClass=!this.changeClass;
  }

  menuLink(str:string){
    this.toggleChange();
    setTimeout(()=>{
      this.scroller.scrollToAnchor(str);
    },300);
  }

  alertN(str:String){
    this.toggleChange();
    setTimeout(()=>{
      alert(str);
    },300);
  }

  openPhotoSite(){
    window.open("https://flueric.wixsite.com/pic-edits","_blank");
  }

  submitngForm(form:NgForm){
    if(form.valid){
      this.submitted=true;
      this.submitText="Sending";
      this.http.get(this.url,{params:form.value})
      .subscribe(
        res=>{
          console.log(res);
          this.submitText="Message Sent";
          setTimeout(()=>{
            this.submitted=false;
          },2000);
        }
      );
    }
    else{
      this.submitMsgColor.color = "rgb(255,74,74)";
      this.submitted=true;
      this.submitText="Fill all the fields";
      setTimeout(()=>{
        this.submitted=false;
        this.submitMsgColor.color = "rgb(0,206,0)";
      },2000);
    }
  }

  onWindowResize(e:Event){
    if(window.innerWidth<window.innerHeight){
      this.navbarName="Likhith RK";
    }
  }


}
