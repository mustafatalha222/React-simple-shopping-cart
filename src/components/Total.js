import React, { Component } from 'react';
import {Col, Row,Tooltip,OverlayTrigger} from 'react-bootstrap';

class Total extends Component {
    render() {
        const tl=(
            <Tooltip id="tl"><p>
            your tatal</p></Tooltip>
           )
            return (
                <div>
                     <Row>
                        <Col md={8} sm={4} xs={4}>
                        <OverlayTrigger placement="bottom" overlay={tl}>
                        <div>ExtimatedTotal</div></OverlayTrigger></Col>
                        <Col md={4} sm={4} xs={4}>{`$${this.props.price}`}</Col>
                    </Row>
                </div>
        );
    }
}

export default Total;