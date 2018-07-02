import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import axios from 'axios';

// Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Icon from '@material-ui/core/Icon/Icon';

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

    deleteFeedback(id){
        const url = `/feedback/${id}`;
        axios.delete(url).then((response)=>{
            this.getFeedback();
        }).catch((error)=>{
            alert('Unable to delete. Contact support.');
        });
    }
    

    render(){
        return(
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                    <TableCell numeric>Feeling</TableCell>
                    <TableCell numeric>Comprehension</TableCell>
                    <TableCell numeric>Support</TableCell>
                    <TableCell>Comments</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.props.databaseReducer.map(feedback => {
                    return (
                    <TableRow key={feedback.id}>
                        <TableCell numeric>
                        {feedback.feeling}
                        </TableCell>
                        <TableCell numeric>{feedback.understanding}</TableCell>
                        <TableCell numeric>{feedback.support}</TableCell>
                        <TableCell>{feedback.comments}</TableCell>
                        <TableCell><IconButton onClick={()=> this.deleteFeedback(feedback.id)}><Icon>delete</Icon></IconButton></TableCell>
                    </TableRow>
                    );
                })}
                </TableBody>
            </Table>
            </Paper>
        );
    }
}

export default connect(mapReduxToProps)(AdminTable);