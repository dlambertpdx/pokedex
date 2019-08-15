import Component from './Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header>
            <img src="../../../assets/slowbro.png" alt="slowbro">
            <h1>Pokedex</h1>
        </header>
        `;
    }
}

export default Header;