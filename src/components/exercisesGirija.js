import { Button, Grid, Stack } from "@mui/material"; 
import { Component } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    margin: theme.spacing(3),
    textAlign: 'right',
    color: theme.palette.text.primary,
  }));

export class ExercisesGiriga extends Component {
    state = {
        arr: [14,3,6,4,3,7,9,5,5],
        numberToFilter: 5,
        smallerThan: [],
        greaterThan: [],
        filtered: [],
        filteredArray: [],
        filteredRemovedArray: [],
        formatedDate: null,
        x: 0,
        y:-1,
        z:4,
        OrderedNumbers: [],
        EmployeesList: ['Ruben','Kevin','Julian','Krishna','Ashwanth','Monis Rizvi'],
        date1:'04/04/2021',
        date1Formatted: '',
        date2: '08/28/2021',
        date2Formatted: '',
        dateDiff: ''

    }
    getDaysDiff = () => {
        
        var date1 = new Date(this.state.date1);
        var date2 = new Date(this.state.date2);
        var Diff = Math.abs(date2-date1);
        console.log(date1);
        const diffDays = Math.ceil(Diff / (1000 * 60 * 60 * 24));

        let newState = {...this.state};
        newState.dateDiff = diffDays + ' Days';
        newState.date1Formatted = date1.toDateString();
        newState.date2Formatted = date2.toDateString();
        console.log(newState);
        this.setState(newState);
    }

    filterList = () => {
        let newState = {...this.state}
        let noDup = this.state.arr.filter((c, index) => {
            return this.state.arr.indexOf(c) === index;
        });

        newState.filteredRemovedArray = noDup;
        this.setState(newState);
    }

    orderThreeVariables = () => {
        var sorting = [];
        sorting.push(this.state.x);
        sorting.push(this.state.y);
        sorting.push(this.state.z);

        sorting.sort((a, b) => {
            console.log(a, b);
            return a-b;
        })
        console.log(sorting)
        this.setState({...this.state, OrderedNumbers: sorting})
    }

    formatDate = () => {
        var d = new Date();
        let hours = d.getHours(), 
            minutes = d.getMinutes(), 
            seconds = d.getSeconds()

        let myFormatedDate = hours + ':' + minutes + ':' + seconds;
        let newState = {...this.state};
        newState.formatedDate = myFormatedDate;
        this.setState(newState);
    }

    filterArray = () => {
        let number = this.state.numberToFilter;
        var filteredArr = this.state.arr.filter(element=> element === number);
        var greaterThan = this.state.arr.filter(element=> element > number);
        var smallerThan = this.state.arr.filter(element=> element < number);

        this.setState({...this.state,
            filteredArray: filteredArr,
            greaterThan: greaterThan,
            smallerThan: smallerThan
        });

        console.log(filteredArr);
       
    }
    resetState = () => {
        this.setState({
            arr: [14,3,6,4,3,7,9,5,5],
            numberToFilter: 5,
            smallerThan: [],
            greaterThan: [],
            filtered: [],
            filteredArray: [],
            filteredRemovedArray: [],
            formatedDate: null,
            x: 0,
            y:-1,
            z:4,
            OrderedNumbers: [],
            EmployeesList: ['Ruben','Kevin','Julian','Krishna','Ashwanth','Monis Rizvi'],
            date1:'04/04/2021',
            date1Formatted: '',
            date2: '08/28/2021',
            date2Formatted: '',
            dateDiff: ''
        })
    }
    handleChange = (e) => {
        this.setState({...this.state, numberToFilter: e.target.value});
    }
    render() {
        return(
            <div>
                
                <Stack  direction="row"
                        spacing={2} 
                        >

                    <Grid   item sm={6}
                            justifyContent="flex-start"
                            alignItems="baseline"> 
                    <Item>
                        {
                            this.state.arr.map((element, index) => (
                                <span key={index}>{element} </span>
                            ))
                        }
                        <br></br>
                        <b>
                            {
                                this.state.filteredRemovedArray? (
                                    this.state.filteredRemovedArray.map((element, index) => (
                                        <span key={index}>{element} </span>
                                    ))

                                ) : (null)
                            }
                        </b>
                    </Item>
                    <Item>
                        Current time in HH:MM:SS
                            <h3>{this.state.formatedDate}</h3>
                    </Item>
                    <Item>
                        <div>
                            Ordered values x=0, y=-1, and z=4
                        </div>
                        <b>
                            {
                                this.state.OrderedNumbers.map((element, index) => (
                                    <span key={index}>{element} </span>
                                ))
                            }
                        </b>
                    </Item>
                    <Item>
                        Please type a number to filter in a list: 
                        <input type="number" 
                        value={this.state.numberToFilter.toString()} 
                        onChange={this.handleChange}/>
                        <div>
                            Elements in array: {' '}
                                {
                                    this.state.filteredArray.map((element, index) => (
                                        <span key={index}>{element} </span>
                                    ))
                                }
                        </div>
                        <div>
                            Greater than {this.state.numberToFilter + ': '}
                                {
                                    this.state.greaterThan.map((element, index) => (
                                        <span key={index}>{element} </span>
                                    ))
                                }
                        </div>
                        <div>
                            Smaller than {this.state.numberToFilter + ': '}
                                {
                                    this.state.smallerThan.map((element, index) => (
                                        <span key={index}>{element} </span>
                                    ))
                                }
                        </div>
                    </Item>
                    <Item>
                        The Difference between date:
                            <h3>{this.state.date1}</h3>
                            <h3>{this.state.date1Formatted}</h3>
                        and date: 
                            <span>
                                <h3>{this.state.date2}</h3>
                                <h3>{this.state.date2Formatted}</h3>
                            </span>
                            
                        is:
                        <span>
                            <h3>{this.state.dateDiff}</h3>
                        </span>
                    </Item>
                   
                    </Grid>
                    <Grid item sm={6}> 
                    <Item style={{textAlign: 'left'}}>
                        <div>
                            <Button variant="contained" onClick={this.filterList}>Remove duplicates of List</Button>

                        </div>
                        <div>
                            <Button variant="contained" onClick={this.formatDate}>format date</Button>
                        </div>
                        <div>
                            <Button variant="contained" onClick={this.orderThreeVariables}>Order List</Button>
                        </div>
                        <div>
                            <Button variant="contained" onClick={this.filterArray}>Filter numbers from a list</Button>
                        </div>
                        <div>
                            <Button variant="contained" onClick={this.getDaysDiff}>Get difference between days</Button>
                        </div>
                        <div>
                            <Button color='error' variant="contained" onClick={this.resetState}>Reset State</Button>

                        </div>
                    </Item>
                    </Grid>
                </Stack>
            </div>
        )
    }
}