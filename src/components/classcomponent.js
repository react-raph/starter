import React from 'react';
import {uid} from 'react-uid';

export default class ClassComponent extends React.Component{
    constructor() {
        super();
        
        // Contenu accessible mais non monitoré => pas d'influence sur le rendu => à traiter comme une constante même si on peut changer les valeurs
        this.moduledefault = {
            name: "rro"
        }

        // state : nom obligatoire pour tout ce qui est monitoré par react
        this.state = {
            listing: [
                {nom: "Darth", mail:"vader@empire.be"},
                {nom: "Yoda", mail:"greenlover@lost.be"}
            ],
            newnom: "",
            newmail: "",
            error: false
        };

        //
        //this.newContactHandler = this.newContactHandler.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    newContactHandler = (ev) => {
        ev.preventDefault();    // Désactive le comportement par défaut du form, puisqu'on met le nôtre
        /* Classic :
        let tempdata = this.state.listing;
        tempdata.push({nom:"test",mail:"testmail"});
        this.setState({listing: tempdata})
        */

       /* Recommended : */
        if (this.isMail(this.state.newmail)) {
            this.setState(prevState=>({
                listing: [...prevState.listing, {nom: this.state.newnom, mail: this.state.newmail}],
                newnom:"",
                newmail:"",
                error: false
            }));
        } else {
            this.setState(prevState=> ({error:true}));
        }
       /* setState est asynchrone et si bcp de setState, ça peut être optimisé d'un coup => on n'est pas sur de l'état
        * preState est un mot réservé réact qui contient la valeur précédente à l'instant même de l'évènement => précis
        * ... => opérateur "spread" : déploie le tableau comme si on déclarait chacun des éléments, et donc on peut continuer la déclaration d'éléments comme de si rien n'était
        */
    }

    isMail = (str) => {
        return /[a-zA-Z0-9-_.]+?@[a-zA-Z]+?\.[a-zA-Z]+/.test(str);
    }

    render = () => (
        <div>
            <p>Mon composant de classe</p>
            <ul style={styles.box}>
                {this.state.listing.map((contact) => (
                    <li key={uid(contact)}>{contact.nom} {contact.mail}</li>
                ))}
            </ul>

            <form>
                <label>Nom :</label><input type="text" value={this.state.newnom} onChange={(ev) => {console.log(ev.target.value); this.setState({newnom:ev.target.value})}} placeholder="Entrer un Nom"/>
                <label>Email :</label><input type="text" value={this.state.newmail} onChange={(ev) => {console.log(ev.target.value); this.setState({newmail:ev.target.value})}} placeholder="Entrer un Mail"/>
                <button onClick={(ev) => this.newContactHandler(ev) }>Ajouter</button>
                {this.state.error && <p>Erreur : Veillez entrer une adresse valide !</p> }
            </form>
        </div>
    )
};

// Peut-être préférable de faire un css par composant et y centraliser les classes
const styles = {
    box: {
        borderWidth: "2px",
        borderColor: "indianred",
        borderStyle: "solid",
        backgroundColor: "lightblue"
    }
};

// Semantic UI React : composant préstylés
// Pour native : "native base" et "react native element" (attention, evolue vite, pas toujours retro compatible)