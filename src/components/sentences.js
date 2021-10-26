import { Button, Divider, Grid } from "@mui/material";
import { Component } from "react";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export class Sentences extends Component {
    state = {
        sentence1: '',
        frequency: [],
        capitalized: '',
        longest: ''
    }

    findFrequency = () => {
        var frequency = {};
        var freq = [];

        var charArray = this.state.sentence1.split("");
        charArray.forEach(s => {
            frequency[s] ? frequency[s]++ : frequency[s] = 1; 
        });

        for (var [key, value] of Object.entries(frequency)) {
            console.log(key + ' ' + value);
            freq.push({letter: key, value: value});
        }

        console.log(freq);
        let newState = {...this.state};
        newState.frequency = freq;
        this.setState(newState);
    }
    getLongest = () => {
        var strLongest = this.state.sentence1.split(" ");
        var longFlag = 0, wordIndex = '';
        console.log(strLongest);
        for (let i = 0; i < strLongest.length; i++) {
            if(strLongest[i].length > longFlag){
                longFlag = strLongest[i].length;
                wordIndex = strLongest[i];
            }
        }

        let newState = {...this.state};

        newState.longest = wordIndex
        this.setState(newState);
    }

    toCapital = () => {
        if(this.state.sentence1 !== null && this.state.sentence1 !== '') {
            var arr = this.state.sentence1.split(' ');
            for (let index = 0; index < arr.length; index++) {
                arr[index] =arr[index].charAt(0).toUpperCase()+arr[index].slice(1);
            }
            const capitalized = arr.join(" ");
            console.log(capitalized);
            let newState = {...this.state};

            newState.capitalized = capitalized
            this.setState(newState);

        }

    }

    handleSentence = (event) => {
        let newState = {...this.state};
        newState.sentence1 = event.target.value
        this.setState(newState);
    }
    render () {
        return(
            <div>
                write a sentence: <input onChange={this.handleSentence}  ></input> <br></br>
                Frequency of characters: <br></br>
                <span>
                    {
                        this.state.frequency.map((element, index)=> (
                            <span>
                                <span key={index}>{element.letter}: {element.value} </span> 
                            </span>
                        ))
                    }
                </span>
                <br></br>

                Longest word in sentence: {this.state.longest} <br></br>
                Capitalized: {this.state.capitalized} <br></br>
                <Stack  direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={2}>
                            <Item>
                                <Button onClick={() => this.findFrequency()} variant ="contained">Find the frequency of characters in the sentence</Button>
                            </Item>
                            <Item>
                                <Button onClick={() => this.getLongest()} variant ="contained">Get the longest word</Button>
                            </Item>
                            <Item>
                                <Button onClick={() => this.toCapital()} variant ="contained">Convert to capital</Button>
                            </Item>
                     
                </Stack>
            </div>
        )
    }
}
export default Sentences