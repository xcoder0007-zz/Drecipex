import React, { Component } from 'react'
import RecipeItem from './RecipeItem'


class Recipes extends Component {


    render() {
        let recipes
        if (this.props.recipes)
            recipes = this.props.recipes.map(recipe => { return (<RecipeItem styles={this.props.styles} key={recipe.Title} recipe={recipe} />) })

        return (

            <div>

                {recipes}

            </div> // End of Recipes </div>   
        )
    }
}



export default Recipes