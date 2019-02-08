import React, { Component } from 'react';
import {Col, Row, Media,Button, Collapse} from 'react-bootstrap';
class Itemdetails extends Component {
    state={
        open: false,
    }
    render() {
        return (
            <div>
                <Button variant="link" onClick={()=>{this.setState({open: !this.state.open})}}>
                    {this.state.open === false ? 'Show':'Hide'}
                    {this.state.open === false ? '+':'-'}
                </Button>
                <Collapse in={this.state.open}>
                <Media>
                <img width={100} height={100}
                src="https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg" alt="goku"/>
                <Media.Body>
                    <h5>Goku</h5>
                    <p>
                    this is good proguct and pic you an add here more images
                    </p>
                    <Row>
                        <Col md={6}> <strong>Price:</strong>{`$${this.props.price}`}
                        </Col>
                        <Col> <strong>Qty:</strong>1</Col>
                    </Row>
                </Media.Body>
                </Media>

                </Collapse>

            </div>
        );
    }
}

export default Itemdetails;