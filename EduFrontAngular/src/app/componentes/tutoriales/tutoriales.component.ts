import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../../interfaces/tutorial';
import { TutorialesService } from '../../servicios/tutoriales.service';

@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.component.html',
  styleUrls: ['./tutoriales.component.css']
})
export class TutorialesComponent implements OnInit {

  listaTutoriales : Tutorial[] = []

  constructor(private tutorialService : TutorialesService ) { }

  ngOnInit(): void {
    this.getListaTutoriales()
  }

  getListaTutoriales(){
    this.tutorialService.getTutoriales().subscribe(respuesta =>{
      this.listaTutoriales = respuesta
    })
  }

}
