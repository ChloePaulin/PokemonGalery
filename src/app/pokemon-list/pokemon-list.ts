import { Component } from '@angular/core';
import { PokemonService } from '../common/pokemon';

@Component({
  selector: 'app-pokemon-list',
  imports: [],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonList {
  pokemons!:Pokemon[];

}
