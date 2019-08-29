import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public servicio: HeroesService,
              private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe( termino: string) {
    if( termino.length <1){
      return;
    }
    this.router.navigate(['/search', termino]);
    console.log(termino);
    }

}
