import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import { Row, Col, Table, Card, Nav } from 'react-bootstrap';

const Commands = (props) => {
    const handleSelect = (key) => {
        // TODO
    }

    return (<Layout title="Command List">
    <Row>
        <Col md={2}>
            <Card>
                <Card.Body>
                    <Nav variant='pills' activeKey={props.currentCategory} className='flex-column'>
                        {Object.keys(props.commands.categories).map(k => {
                            if (k == 'general') {
                                return (<Nav.Link eventKey={k}>{props.commands.categories[k]}</Nav.Link>)
                            } else {
                                return null;
                            }
                        })}
                    </Nav>
                </Card.Body>
            </Card>
        </Col>
        <Col md={10}>
            <Card>
                <Card.Header>
                    <Row>
                        <Col md={2}>Command</Col>
                        <Col md={6}>Description</Col>
                        <Col md={4}>Usage</Col>
                    </Row>
                </Card.Header>
                
                <Card.Body>
                    <Card.Text>
                        {Object.keys(props.commands.commands).map(k => {
                            let c = props.commands.commands[k];
                            let argsList = '';

                            if (c.args) {
                                Object.keys(c.args).forEach((argK: any) => {
                                    let arg = c.args[argK];
                                    
                                    if (arg.required) {
                                        argsList += ` [${argK}]`;
                                    } else {
                                        argsList += ` (${argK})`;
                                    }
                                });
                            }

                            if (c.category == 'general') {
                                return (
                                    <div>
                                        <Row className='mb-4'>
                                            <Col md={2}>{k}</Col>
                                            <Col md={6}>{c.description}</Col>
                                            <Col md={4}>
                                                -{k}{argsList}
                                            </Col>
                                        </Row>
                                        <hr />
                                    </div>
                                );
                            }
                        })}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Layout>)
}

Commands.getInitialProps = async () => {
    const res = await fetch('https://static.paladinssidekick.com/data/command-list.json');
    const data = await res.json();

    return {
        currentCategory: 'general',
        commands: data
    };
}

export default Commands;