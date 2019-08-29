import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private route: ActivatedRoute,
              private heroesService: HeroesService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroe( params['termino']);
      console.log(this.heroes);

    });
  }

}
