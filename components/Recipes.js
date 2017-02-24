import React, { Component } from 'react'
import RecipeItem from './RecipeItem'


class Recipes extends Component {


    render() {
        let recipes
        if (this.props.recipesList)
            recipes = this.props.recipesList.map(recipe => { return (<RecipeItem key={recipe._Id} recipe={recipe} />) })

        return (

            <div className="Recipes">

                {recipes}

            </div> // End of Recipes </div>   
        )
    }
}



export default Recipes