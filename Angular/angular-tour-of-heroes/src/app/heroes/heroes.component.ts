import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero = 'Windstorm';
  // hero:Hero = {
  //   id:1,
  //   name:'Windstorm'
  // }
  heroes:Hero[] = [];

  constructor(
    private heroService:HeroService,
    private messageService:MessageService
    ){}


  ngOnInit(): void {
    this.getHeroes();
  }



  selectedHero?: Hero;

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`Heroes Component: Selecte Hero ID= ${hero.id},  Name = ${hero.name}`);
  }
  
  getHeroes():void{
    this.heroService.getHeroes()
        .subscribe(heroes=>this.heroes=heroes);
  }




}
