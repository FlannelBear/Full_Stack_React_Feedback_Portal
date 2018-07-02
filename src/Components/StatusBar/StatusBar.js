import React, {Component} from 'react';

// Material UI
import {withStyles} from '@material-ui/core';
import {styles} from './StatusBar.styles';
import Typography from '@material-ui/core/Typography/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

class StatusBar extends Component{

    constructor(props){
        super(props);

        this.state = {
            steps: ['Feeling', 'Comprehension', 'Support', 'Comment'], 
        }
    }

    render(){
        const {activeStep} = this.state;
        return(
                <Stepper activeStep={this.props.step}>
                    {this.state.steps.map((label) => {
                        const props = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
        );
    }
}

export default withStyles(styles)(StatusBar);