import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonList } from '../pokemon-list/pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl:string = 'https://api.pokemontcg.io/v2/cards';

  constructor(private http:HttpClient){};

  getPokemons():Observable<PokemonList[]>{
    return this.http.get<PokemonList[]>(`${this.baseUrl}`);
  }
}
