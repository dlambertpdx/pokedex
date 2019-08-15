import Component from './Component.js';
import Header from './Header.js';
import PokeList from '../pokedex/PokeList.js';

class App extends Component {

    onRender(dom){
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
        let pokeList;
        let pokeListDOM;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                pokeList = new PokeList({ poke: data });
                pokeListDOM = pokeList.renderDOM();
                const pokeDex = dom.querySelector('.list-section');
                pokeDex.appendChild(pokeListDOM);
            });
    }
    
    renderHTML() {
        return /*html*/`
        <div>
        <!-- header goes here -->
        
        <main>
            <section class="options-section">
                <!-- filter goes here -->        
            </section>
                
            <section class="list-section">
                <!-- cat list goes here -->        
            </section>
        </main>
    </div> 
        `;
    }
}

export default App;