import React, {Component} from 'react';
import {Container, Nav, Navbar, Form, FormControl, Button,
  NavDropdown, Breadcrumb, Row, Col, Spinner, Tabs, Tab, Table,
  ProgressBar, Pagination, OverlayTrigger, Popover, Collapse} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      buka: true
    };
  }


  render() {
    const popOver = (
      <Popover>
        <Popover.Title as='h3'>Informasi Website</Popover.Title>
        <Popover.Content>
        Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
        </Popover.Content>
      </Popover>
    );
    return(
      <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#Akses Sport">Akses Sport</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Berita">Berita</Nav.Link>
          <Nav.Link href="#Live Scorer">Live Scorer</Nav.Link>
        <NavDropdown title="Piala & Liga" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Piala & Liga</NavDropdown.Item>
        </NavDropdown>
          <Nav.Link href="#Transfer Pemain">Transfer Pemain</Nav.Link>
          <Nav.Link href="#Tim">Tim</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <Container>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#" >Liga Inggris</Breadcrumb.Item>
          <Breadcrumb.Item active href="#">Transfer Pemain</Breadcrumb.Item>
        </Breadcrumb>
        </Col>
      </Row><br />

      <Row>
      <Col>
        <h2>Rumor Transfer Pemain</h2>
      </Col>
      <Col></Col>
      <Col xs lg="1">
        <Spinner animation="border" variant="success" />
        <Spinner animation="grow" variant="success" />
      </Col>
      </Row>
      <br />

      <Tabs defaultActiveKey='Semua Transfer'>
        <Tab eventKey='Semua Transfer' title='Semua Transfer'></Tab>
        <Tab eventKey='' title=''></Tab>
        <Tab eventKey='' title=''></Tab>
        <Tab eventKey='Liga Primier Inggris' title='Liga Primier Inggris'></Tab>
        <Tab eventKey='' title=''></Tab>
        <Tab eventKey='' title=''></Tab>
        <Tab eventKey='Serie A' title='Serie A'></Tab>
        <Tab eventKey='' title=''></Tab>
        <Tab eventKey='' title=''></Tab>
        <Tab eventKey='Divisi Primera' title='Divisi Primera'></Tab>
        <Tab eventKey='' title=''></Tab>
        <Tab eventKey='' title=''></Tab>
        <Tab eventKey='Bundesliga' title='Bundesliga'></Tab>
        <Tab eventKey='' title=''></Tab>
        <Tab eventKey='Liga 1 Indonesia' title='Liga 1 Indonesia'></Tab>
      </Tabs>
      <br />

      <Table bordered>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Pemain</th>
            <th>Tim</th>
            <th>Transfer</th>
            <th>Proses Transfer</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>MAROUNE FELLAINI</td>
            <td>MANCHESTER UNITED</td>
            <td>SHANDONG UNITED</td>
            <td><ProgressBar striped variant='primary' now={85} label='85%' /></td>
          </tr>

          <tr>
            <td>2</td>
            <td>LUIS NANI</td>
            <td>SPORTING CP</td>
            <td>ORLANDO CITY</td>
            <td><ProgressBar striped variant='primary' now={55} label='55%' /></td>
          </tr>

          <tr>
            <td>3</td>
            <td>MAREK HAMSIK</td>
            <td>NAPOLI</td>
            <td>DALIAN YIFANG</td>
            <td><ProgressBar striped variant='primary' now={95} label='95%' /></td>
          </tr>

          <tr>
            <td>4</td>
            <td>SARDAR AZMOUN</td>
            <td>RUBIN KAZAN</td>
            <td>ZENIT ST PETERSBURG</td>
            <td><ProgressBar striped variant='primary' now={100} label='100%' /></td>
          </tr>

          <tr>
            <td>5</td>
            <td>MICHY BATSHUAYI</td>
            <td>CHELSEA</td>
            <td>CRYSTAL PALACE</td>
            <td><ProgressBar striped variant='primary' now={50} label='50%' /></td>
          </tr>

          <tr>
            <td>6</td>
            <td>LUCAS PIAZON</td>
            <td>CHELSEA</td>
            <td>CHIEVO</td>
            <td><ProgressBar striped variant='primary' now={100} label='100%' /></td>
          </tr>
        </tbody>
      </Table>
      <br />

      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>1</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>10</Pagination.Item>
        <Pagination.Item>11</Pagination.Item>
        <Pagination.Item>12</Pagination.Item>
        <Pagination.Item>13</Pagination.Item>
        <Pagination.Item>14</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>20</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>

    <OverlayTrigger trigger='click' placement='right' overlay={popOver}>
      <Button variant='primary'>Informasi</Button>
    </OverlayTrigger>&nbsp;&nbsp;


    <Button variant='primary' onClick={() => this.setState({ buka: !this.state.buka })}>Versi Website</Button>
    <Collapse in={this.state.buka}>
    <p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Akses Sport V1.0
    </p>
    </Collapse>
    </Container>
    </>
    )
  }
}

export default App;
