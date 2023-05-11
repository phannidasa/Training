import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  myName:string = 'Phannida';
  isDisable:boolean = false;
  firstname:string = '';
  showButton:boolean = true;
  score:number = 0;
  books: any[] = [ { title: "NobleBless", author: "Edward Price"},
                   { title: "How To Survive", author: "GD"},
                   { title: "Coward", author: "B. Burst"} ]

  confirm(){
    console.log(this.firstname);
  }
  switch(param:any){
    this.showButton = param;
  }

  //Forms
  form: any;
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      address: [{ value: null, disabled: false}, Validators.required],
      tel: [{ value: null, disabled: false}, Validators.required],
      name: [{ value: null, disabled: false}, Validators.required],
      zipcode: [{ value: null, disabled: false}, Validators.required],
    });
  }

  /* options:string = 'b';
  books: any[] = [{ inStock: 'yes'}] */
}