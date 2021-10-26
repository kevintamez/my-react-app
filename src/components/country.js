import { Delete } from "@material-ui/icons";
import { IconButton } from "@mui/material";
import { Component } from "react";

export class Country extends Component {

    delete = name => {
        this.props.onDelete(name);
    }

    componentWillUnmount () {
        console.log("Componente desmontado");
    }
    render() {
        return(
            <li>
                <IconButton size="small" onClick={()=> this.delete(this.props.name)} >
                    <Delete />
                </IconButton>
                {this.props.name}
            </li>
        )
    }
}