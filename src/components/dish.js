import { Edit, ScatterPlot } from '@material-ui/icons';
import { Button, Card, CardContent, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, TextField } from '@mui/material';
import React, { Component } from 'react'

export class Flag extends Component {

    componentDidUpdate() {
        console.log("Componente Dish actualizado");
    }
    render () {
        return (
            <div>
                <h2>bandera</h2>
                <h4>test platillo</h4>
            </div>
        );
    }
}

class Dish extends Component{
    state = {
        edit: false,
        name: this.props.name
    }
    edit = e => {
        this.setState({edit: !this.state.edit});
    };

    handleChange = e => {
        let newState = {...this.state};
        newState.name = e.currentTarget.value;
        this.setState(newState);
        this.props.onUpdateDish(this.props.index, newState.name);
    };

    componentDidUpdate(){
        console.log("componente actualizado");
    }
    render(){
        return(
            <Card className="card">
                <CardContent>
                    <List 
                        component="nav"
                        subheader={
                            <ListSubheader component="div">
                            {this.state.edit ? (
                                <TextField
                                    label="Platillo..."
                                    type="text"
                                    margin="normal"
                                    varian="outlined"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            ):(
                                this.props.name
                            )}
                            <IconButton size="small" onClick={this.edit}>
                                <Edit/>
                            </IconButton>
                            </ListSubheader>}
                    >
                        {
                            this.props.ingredients.map((el, key)=>(
                                <ListItem button key={key}>
                                    <ListItemIcon>
                                        <ScatterPlot></ScatterPlot>
                                    </ListItemIcon>
                                    <ListItemText inset primary={el}></ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>
                </CardContent>
            </Card>
        )
    }
};

export default Dish;