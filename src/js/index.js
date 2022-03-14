/* 
quando clicar no pokemon da lista, temos que esconder o cartão do pokemon aberto e mostrar o cartão selecionado

Para isso vamos precisar trabalhar com dois elementos, listgem e cartão pokemon

precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

vamos precisar tabalhar com evento de clique feito pelo usuário na listagem de pokemons

-remover a classe aberto do cartão que está aberto
- ao clicar em um pokemon da listagem, pegamos o ID do pokemon para saber qual cartão mostrar
-remover a classe ativo que marca o pomemon selecionado
-adicionar a classe ativo no item da lista selecionado

*/

// Precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem pegamos o seu id para saver qual pokemon mostrar
       const idPokemonSelecionado = pokemon.attributes.id.value

       const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
       cartaoPokemonParaAbrir.classList.add('aberto')
        
       //remover a classe ativo que marca o pokemon selecionado
       const pokemonAtivoNaListagem = document.querySelector('.ativo')
       pokemonAtivoNaListagem.classList.remove('ativo')

       //adicionar a lcasse ativo no item da lista selecionado
       const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
       pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})






















