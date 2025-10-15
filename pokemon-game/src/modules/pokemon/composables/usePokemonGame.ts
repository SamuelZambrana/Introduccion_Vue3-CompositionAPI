import  {GameStatus, type PokemonListResponse}  from "../interfaces";
import { onMounted, ref } from "vue";
import pokemonApi from "../api/pokemonApi";

export const usePokemonGame = () => {

    const gameStatus = ref<GameStatus>(GameStatus.PLAYING);

    const getPokemons = async () => {
        try {
            const resp = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=650');
            console.log(resp.data.results);
            return resp.data.results;
        } catch (error) {
            console.log({ error });
            return [];
        }
    }

    onMounted(() => {
        getPokemons();
    });

    return {
        gameStatus,
        getPokemons
    };
}