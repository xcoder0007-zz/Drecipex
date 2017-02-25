import React, { Component } from 'react'



class RecipeItem extends Component {

    render() {
        return (
            <ul className={this.props.styles.ul}>

                <li className={RecipeItem}>{this.props.recipe.Title}

                    <span
                        className={this.props.styles.closebtn} className={this.props.styles.margin_right}>&times;</span>
                </li>


            </ul>
        )
    }
}



export default RecipeItem