import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapReduxToProps = ({databaseReducer}) => ({
    databaseReducer
});

class AdminTable extends Component{

    componentDidMount(){
        this.getFeedback();
    }

    getFeedback(){
        axios.get('/feedback').then((response)=>{
            this.props.dispatch({type: 'GET', payload: response.data});
        }).catch((error)=>{
            alert('Error handling GET in reducer');
        });
    }
    

    render(){
        return(
            <div>
                {JSON.stringify(this.props.databaseReducer)}
            </div>
        );
    }
}

export default connect(mapReduxToProps)(AdminTable);