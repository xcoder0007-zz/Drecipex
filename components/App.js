import React, { Component } from 'react'
import Recipes from './Recipes'
import Requst from 'superagent'
import styles from './css/app.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            styles: styles,
            recipes: [],
            Search:""

        }
    }


    componentWillMount() {

        this.recipeslist()
    }

    recipeslist() {
        let API = 'http://localhost:3000/recipes';
        Requst.get(API).then((response) => {
            this.setState({
                recipes:
                response.body
            })
        })
    }


    updateSearch(event) {
     this.setState({Search:event.target.value})
   
    }




    render() {

        return (

            <div className={styles.container}>

                <h1>This's The main App Component</h1>
                <input placeholder="Search..." type="text" value={this.Search} onChange={this.updateSearch.bind(this)} />
                <Recipes recipes={this.state.recipes} styles={this.state.styles} />



            </div>
        )
    }
}



export default App