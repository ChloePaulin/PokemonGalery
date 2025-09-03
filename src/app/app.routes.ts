import { Routes } from '@angular/router';
import { PokemonList } from './pokemon-list/pokemon-list';
import { PokemonDetails } from './pokemon-details/pokemon-details';

export const routes: Routes = [
    {
        path: "pokemons/:id",
        component: PokemonDetails,
        pathMatch: 'full'
    },
    {
        path: "pokemons",
        component: PokemonList,
        pathMatch: 'full'
    },
    {
        path: "",
        component: PokemonList,
        pathMatch: 'full'
    },
];
