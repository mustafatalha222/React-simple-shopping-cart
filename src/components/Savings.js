import React, { Component } from 'react';
import {Col, Row,Tooltip,OverlayTrigger} from 'react-bootstrap';
class Savings extends Component {
    render() {
       const tl=(
        <Tooltip id="tl"><p>
        your pickup savings are here</p></Tooltip>
       )
        return (
            <div>
                 <Row>
                    <Col md={8} sm={4} xs={4}>
                    <OverlayTrigger placement="bottom" overlay={tl}>
                    <div>PickupSavings</div></OverlayTrigger></Col>
                    <Col md={4} sm={4} xs={4} style={{color:'red'}}>{`$${this.props.price}`}</Col>
                </Row>
            </div>
        );
    }
}

export default Savings;