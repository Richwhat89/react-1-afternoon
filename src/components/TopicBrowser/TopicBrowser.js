import React, { Component } from 'react';

import EvenAndOdd from '../Topics/EvenAndOdd.js';
import FilterObject from '../Topics/FilterObject.js';
import FilterString from '../Topics/FilterString.js';
import Palindrome from '../Topics/Palindrome.js';
import Sum from '../Topics/Sum.js';

class TopicBrowser extends Component{
    render(){
        return (
        <p>
            <EvenAndOdd/>
            <FilterObject/>
            <FilterString/>
            <Palindrome/>
            <Sum/>
        </p>);
    }
}



export default TopicBrowser;