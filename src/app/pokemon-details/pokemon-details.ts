import { Component, inject } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../common/pokemon';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  imports: [],
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.css'
})
export class PokemonDetails {
  pokemon?: Pokemon;

  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private pokemonService: PokemonService) { };

ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

      if (id !== null) {
        // Abonnement à l'observable pour récupérer les pokémons
        this.pokemonService.getPokemons().subscribe({
          next: pokemons => {
            this.pokemon = pokemons.find(pokemon => pokemon.id === id);
          },
          error: err => {
            console.error('Erreur lors de la récupération des pokémons', err);
          }
        });
      }
    });
  }
}