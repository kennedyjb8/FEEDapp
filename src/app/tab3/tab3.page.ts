import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActiveUser} from '../ActiveUser'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public submitAttempt: boolean;
  public finishedBool = false;
  public Phase1 = false;
  public Phase2 = false;
  public Phase3 = false;
  public descriptors = [];
  OnInit(){
    this.submitAttempt = false;

  }
  public signupForm: FormGroup;
  public showInfo: boolean;
  public forDisplay: any;
  public permanentUserInfo: any;
  constructor(public formBuilder: FormBuilder) {
    this.signupForm = formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      zipCode: [''],
    });
    this.showInfo = false;
  }
  save() {
    this.forDisplay = this.signupForm.value
    console.log(this.forDisplay);
    this.submitAttempt = true;
    console.log("submitted!");
    console.log(this.signupForm.value);
    this.permanentUserInfo = this.signupForm.value;
    console.log(this.permanentUserInfo);
    this.Phase1 = true;
    this.signupForm.reset()
  };
  signupPhase2() {
    this.Phase1 = false;
    this.Phase2 = true;
    this.Phase3 = false;
  }
  signupPhase3() {
    this.Phase1 = false;
    this.Phase2 = false;
    this.Phase3 = true;
  }
  addDescriptor(descriptor) {
    if (!this.descriptors.includes(descriptor)) {
      this.descriptors.push(descriptor);
    }
    else {
      console.log('already in there');
    };
  }
  removeDescriptor(descriptor) {
    if (this.descriptors.includes(descriptor)) {
      var index = this.descriptors.indexOf(descriptor);
      if (index !== -1) this.descriptors.splice(index, 1);
    }
    else {
      console.log('ruh roh')
    };
  }
  finishedSignup(){
    this.finishedBool = true;
    console.log('done with the signup process!');
  }
}
