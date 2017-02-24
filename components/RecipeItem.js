import React, { Component } from 'react'



class RecipeItem extends Component {

    render() {
        return (

            <li className="RecipeItem">

                {this.props.recipe.Title}
            </li>
        )
    }
}



export default RecipeItem