import React, { Component } from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import Subtotal from './components/Subtotal'
import Savings from './components/Savings';
import Total from './components/Total';
import Itemdetails from './components/Itemdetails';
import Promo from './components/Promo';
import { connect } from 'react-redux';
import {handlerc } from './actions/Promoaction';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      total: 300, savings:3.20,
      total_p: '', disa:false
    }
  }
  componentDidMount(){
    this.setState({
      total_p: this.state.total- this.state.savings
    })}

  
    getDiscounth=()=>{
      if(this.props.promoCode === 'discount'){
        this.setState({ total_p: 100, disa:true})
    
    }}
  render() {
    return (
      <div className="container">
        <Container className="card">
        <Subtotal price={this.state.total.toFixed(2)}/>

        <Savings price={this.state.savings.toFixed(2)}/><hr/>
        <h3><Total price={this.state.total_p}/></h3>

      <Itemdetails price={this.state.total}/>

      <Promo  dis={this.state.disa} getDiscount={this.getDiscount}/>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})
export default connect(mapStateToProps, {handlerc})(App);