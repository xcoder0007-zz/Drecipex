import React, {Component } from 'react'
import Recipes from './Recipes'


class App extends Component {

constructor(){
        super();
    this.state = {
        recipes: [
            {
                _Id : '3423342',
                User:'123233dds2',
                Title:'Recipe #1',
                Ingredients : 'Ingredients #1',
                Directions  : 'Directions #1'
            },
            {
                _Id : '3422342',
                User:'111233dds2',
                Title:'Recipe #2',
                Ingredients : 'Ingredients #2',
                Directions  : 'Directions #2'
            },{
                _Id : '34223242',
                User:'120033dds2',
                Title:'Recipe #3',
                Ingredients : 'Ingredients #3',
                Directions  : 'Directions #3'
            },{
                _Id : '34444342',
                User:'100dds2',
                Title:'Recipe #4',
                Ingredients : 'Ingredients #4',
                Directions  : 'Directions #4'
            },{
                _Id : '3421142',
                User:'123533ds2',
                Title:'Recipe #5',
                Ingredients : 'Ingredients #5',
                Directions  : 'Directions #5'
            }
        ]
    }
}
render(){
    
    return (
        
        <div className="{styles.w3-container}">
        
        <h1>This's The main App Component</h1>
        
        <Recipes recipesList={this.state.recipes} />







        </div> // End of App </div>   
    )       
}
}



export default App