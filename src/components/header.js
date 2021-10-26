import React, { Component } from 'react'
import {Button} from '@mui/material'




function getNextDate() { 
    return new Promise( (resolve) => 
    { setTimeout( () => { 
            resolve(new Date(Math.random() * 200000000000 + 1500000000000)) 
        }, Math.trunc(Math.random() * 15) ); 
    } ); 
}

async function main(n){

    var myDates = [];
    for (let i = 0; i < n; i++) {
       
        var mydate = await getNextDate();

        var myObj = {
            "Date": mydate,
            "year": ''
        };
        myDates.push(myObj);

        var dateObject = new Date(mydate);
        var myYear = dateObject.getFullYear();
        myDates[i].year = myYear;
        // myDates[n].year = myYear;


    }

    let filteredByYears = [];
    myDates.forEach((date) => {
        // console.log(date);
        filteredByYears.push({ [date]: myDates.filter((_date)=> {
            return _date[0] === date;
        })})
    })

    // console.log(filteredByYears);
    // console.log(myDates);

    var arr = [
        "2015-07-31",
        "2015-08-31",
        "2015-09-30",
        "2015-10-31",
        "2015-11-30",
        "2015-12-31",
        "2016-01-31",
        "2016-02-29",
        "2016-03-31",
        "2016-04-30",
        "2016-05-31",
        "2016-06-30",
        // MORE ITEMS...
    ]

    let extractedYear = arr.map((date) => {
        return date.split('-')[0];
      });
    // Get just the year list
    let yearsArray = new Set(extractedYear);
    // console.log(yearsArray);

    let filteredByYearsExample = [];
    yearsArray.forEach((year) => {
        filteredByYearsExample.push({ [year] : arr.filter((_year) => {
        return _year.split('-')[0] === year; 
        })});
    });
    // console.log(filteredByYearsExample);
    // return filteredByYears;
};

main(10);

class Header extends Component{
    state = {date: '20-5-2010'}

    render(){
        return(
            <div>
                <h1>Platillos tipicos</h1>
            </div>
        )
    }
};

export default Header;