import { Component, useEffect } from "react";
import {Button} from '@mui/material'

export class ColourState extends Component {
    state = {
        colour: 'green',
        count: 1
    }
    
    changeColour = () => {
        let newState = {...this.state};

        switch(this.state.count) {
            case 1:
                newState.colour = 'red';
            break;
            case 2:
                newState.colour = 'blue';
            break;
            case 3:
                newState.colour = 'pink';
            break;
            default:
                newState.colour = 'yellow';
                newState.count = 0;
            break;
        }

        newState.count += 1;
        this.setState(newState);
    }

    render(){
        return (
            <div>
                <p style={{color: this.state.colour}}>Some text changing the colour</p>
                <Button variant="contained" onClick={()=> this.changeColour()}>Click to change Colour</Button>
            </div>
        )
    }
}

export default ColourState