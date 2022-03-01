import pokemonApi from '@/api/pokemonApi';

describe('pokemonApi', () => {
    test('axios debe estar conf con la url correcta', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
});