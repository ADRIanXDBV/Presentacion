import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  constructor(private xd: Router) { }//crear

  ngOnInit(): void {
  }
nav(){
this.xd.navigate(['seg'])
}//
}
