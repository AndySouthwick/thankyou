import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Youtube from './Youtube'

class YouTubeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>

                <img src="images/Asset-2-8.png" color="danger" onClick={this.toggle}>{this.props.buttonLabel}</img>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Youtube/>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

export default YouTubeModal;