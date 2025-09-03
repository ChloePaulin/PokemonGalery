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
  pokemon!: Pokemon[];

  route: ActivatedRoute = inject(ActivatedRoute);

  id!: string;
  constructor(private pokemonService: PokemonService) { };

  ngOnInit(): void {
    //   this.route.paramMap.subscribe((params:ParamMap)=>{
    //   this.id=params.get('id')
    // )
    //   this.pokemon = this.pokemonService.find(this.pokemon => pokemons.id === this.id)
    // }
  }
}