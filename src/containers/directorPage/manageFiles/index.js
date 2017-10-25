import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class ManageFilesPage extends Component {

    render() {
        return (
            <div>
              <Col xsOffset={0} mdOffset={1} xs={12} md={10}>
                <Jumbotron>
                  {/** Main text **/}
                  <h2 style={{ textAlign: 'center'}}>MANAGE FILES</h2>
                  {/** Line under text **/}
                  <Col xsOffset={2} smOffset={4} mdOffset={5} xs={8} sm={4} md={2}>
                    <p style={{ borderBottom: '2px solid black' }}></p>
                  </Col>
                </Jumbotron>
              </Col>
            </div>
        );
    }

}

export default ManageFilesPage;
