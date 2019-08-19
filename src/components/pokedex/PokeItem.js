import Component from '../app/Component.js';

class PokeItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;
        return /*html*/`
        <li class="poke-item">
        <a class="pokemon-name" href="${pokemon.pokedex}" target="_blank">
            <h3 class="pokemon-name">${pokemon.pokemon}</h3>
        </a>
            <div class="image-container">
                <img src="${pokemon.url_image}" alt="${pokemon.pokemon}">
            </div>
            <ul class="stats-container">
                <li class="stats">Attack: ${pokemon.attack}</li>
                <li class="stats">Defense: ${pokemon.defense}</li>
            </ul>
        </li>
        `;
    }
}

export default PokeItem;