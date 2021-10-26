import React, {Component} from "react"
import { TextField, Fab } from "@mui/material";
import AddIcon from "@material-ui/icons/Add"

class NewDish extends Component {
    // constructor () {
    //     super();
    //     this.addDish = this.addDish.bind(this);    
    // }
    
    login = "miLogin variable";
    newDish = React.createRef();

    addDish = event => {
        event.preventDefault();
        console.log(this.newDish.value);
        this.props.onAddDish(this.newDish.value);
        this.newDish.value = "";
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.addDish}>
                <TextField
                    label="Platillo..."
                    type="text"
                    margin="normal"
                    varian="outlined"
                    inputRef={(e)=> {this.newDish = e}}
                >

                </TextField>
                <Fab 
                    color="primary"
                    size="medium" 
                    className="dish-form-icon"
                    onClick={this.addDish}>
                        <AddIcon/>
                </Fab>
            </form>
        )
    }
}

export default NewDish;