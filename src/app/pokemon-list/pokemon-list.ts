import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../common/pokemon';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  imports: [],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonList implements OnInit {
  pokemons!:Pokemon[];

  constructor(private pokemonService:PokemonService){};

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe({
      next: 
      pokemons =>{
      this.pokemons = pokemons;
    },
    error: (err)=>{
      console.error('Erreur lors du chargement des pokemons.', err);
    }
    });
  };
}
