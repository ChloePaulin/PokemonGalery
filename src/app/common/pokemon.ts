import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon';
import { ApiResponse } from '../../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = 'https://api.pokemontcg.io/v2';

  // https://api.pokemontcg.io/v2

  constructor(private http: HttpClient) { };

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<ApiResponse<Pokemon[]>>(`${this.baseUrl}/cards`).pipe(
      map(res => res.data)
    );
  }

    getPokemonId(id:string): Observable<Pokemon[]> {
    return this.http.get<ApiResponse<Pokemon[]>>(`${this.baseUrl}/cards/${id}`).pipe(
      map(res => res.data)
    );
  }
}
