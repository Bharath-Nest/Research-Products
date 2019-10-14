import React, { Component } from 'react';
import { Card, Row, Col } from 'reactstrap';
import Modals from '../../views/elements/Modals'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={3} style={{ backgroundColor: 'green', height: '100vh', paddingLeft: '27px' }}>
            <Card>
              Hello Card
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Card>
            <Modals/>
          </Col>
          <Col md={6} style={{ backgroundColor: 'red', height: '100vh' }}>
            <Card>
              Hello Card
            </Card>
          </Col>
          <Col md={3} style={{ backgroundColor: 'blue', height: '100vh', paddingRight: '27px' }}>
            <Card>
              Hello Card
            </Card>
          </Col>
        </Row>
      </div>

      
    );
  }
}

export default Dashboard;
