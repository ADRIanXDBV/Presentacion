import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  constructor(private tuvieja: Router) { }

  ngOnInit(): void {
  }
  
BV(){
  this.tuvieja.navigate([''])
}
}
