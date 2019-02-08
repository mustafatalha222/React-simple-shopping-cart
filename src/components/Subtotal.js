import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
class Subtotal extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={8} sm={4} xs={4}>Subtotal</Col>
                    <Col md={4} sm={4} xs={4}>{`$${this.props.price}`}</Col>
                </Row>
            </div>
        );
    }
}

export default Subtotal;