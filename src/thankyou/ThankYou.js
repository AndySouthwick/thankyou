import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import '../App.css';
import {Icon} from 'react-fa'
import YouTubeModal from './YouTubeModal'

class ThankYou extends Component{

render(){
    return(
        <Container>
            <Row className="text-center">
                <Col lg="12" className="thankyouheader">
                    <Icon name="check" size="5x" className="appColor"/>
                       <h1>Thank You</h1>
                    text your email to <a href="sms:3854484055">3854484055 </a>
                     to see our proprietary indicators in action through text
                    <Col lg={{ size: 6, push: 2, pull: 2, offset: 1 }}   xs={{ size: 12}} >

                        <YouTubeModal/>
                        Your eBook is on its way! Check your email!
                    </Col>

                </Col>
            </Row>
        </Container>
    )
}
}
export default ThankYou