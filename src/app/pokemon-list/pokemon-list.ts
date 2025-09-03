import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../common/pokemon';
import { Pokemon } from '../../models/pokemon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-pokemon-list',
  imports: [RouterLink],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonList implements OnInit {

  pokemons!: Pokemon[];

  loading: boolean = true;

  constructor(private pokemonService: PokemonService) { };

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe({
      next:
        pokemons => {
          this.pokemons = pokemons;
          this.loading = false;
        },
      error: (err) => {
        console.error('Erreur lors du chargement des pokémons.', err);
        this.loading = false;
      },
      complete:()=>{
        this.loading = false;
      }
    })
  }
}
