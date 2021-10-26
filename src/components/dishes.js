import { 
    Button,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon,
    ImageList,
    Grid
} from '@mui/material';
 
import React, { Component } from 'react'
import Dish from './dish';

export class Dishes extends Component {
    navigate = e => {
        e.preventDefault();
        this.props.history.goBack();
    }
    updateDish = (index, updatedName) => {
        this.props.onUpdateDish(index, updatedName);
    }
    render() {
        return (
            <div>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        this.props.data.map((dish, index)=> (
                            <Grid key={index} item xs={6} lg={3}>
                                <Dish 
                                    key={index} 
                                    name={dish.name} 
                                    ingredients={dish.ingredients} 
                                    index={index}
                                    onUpdateDish={this.updateDish}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        )
    }
}

export default Dishes;