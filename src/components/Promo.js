import React, { Component } from 'react';
import {Button, Collapse, Form, FormLabel, FormGroup, FormControl} from 'react-bootstrap';
import { connect } from 'react-redux';
import {handlerc } from '../actions/Promoaction';

class Promo extends Component {
    state={
        open: false
    }

    handlerc=e=>{
        this.props.handlerc(e)
    
    }
    render() {
        return (
            <div>
                  <Button variant="link" onClick={()=>{this.setState({open: !this.state.open})}}>
                    {this.state.open === false ? 'Apply':'Hide'}
                    {this.state.open === false ? '+':'-'}
                </Button>
             
             <Collapse in={this.state.open}>
             <Form ><FormGroup>
             <FormLabel>Enter Promo</FormLabel>
             <FormControl type="text" value={this.props.promoCode} onChange={this.handlerc}/>
             </FormGroup>
             <Button variant="success" disabled={this.props.dis} onClick={()=>this.props.getDiscount}>
                 Promo
             </Button>
             </Form>
             </Collapse>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
})
export default connect(mapStateToProps, {handlerc})(Promo);



