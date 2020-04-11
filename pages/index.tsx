import Layout from '../components/layout';
import Jumbotron from 'react-bootstrap/jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faKeyboard, faHeadset, faHandshake, faSearch, faSync, faHistory, faPercentage, faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Home = () => (
    <Layout title="Home">
        <Jumbotron className='bg-dark'>
            <div className='display-4'>Hello, world!</div>
            <hr/>
            <p className='lead'>
                Paladins Sidekick is a Discord bot who's sole focus is to help you, the player, get better insight into your stats, matches, friends, and who you're currently playing against.
            </p>
            <p>
                <a href='https://discordapp.com/oauth2/authorize?client_id=691669920093700116&permissions=536345936&scope=bot' target='_blank'><Button variant='primary'>Invite the Bot</Button></a>
                <a href='https://paladinssidekick.com/discord' target='_blank'><Button variant='outline-primary' className='ml-4'>Join Our Discord</Button></a>
            </p>
            <p className='font-weight-light font-italic'>
                Paladins Sidekick is currently in beta testing phase. We make no gurantees about the stability of the bot.
            </p>
        </Jumbotron>

        <div className='px-5'>
            <Row>
                <Col xs={6} md={4} className='mb-4'>
                    <Card className='bg-dark h-100'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <h3>
                                    <FontAwesomeIcon icon={faInfo} className='mb-2'/>
                                    <br/>
                                    Player Stats
                                </h3>
                            </Card.Title>
                            <Card.Text className='lead'>
                                Wanna know when your account was registered? Don't know the last time your friend got online? Forget how much TP you have? Easy to find out.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4} className='mb-4'>
                    <Card className='bg-dark h-100'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <h3>
                                    <FontAwesomeIcon icon={faKeyboard} className='mb-2'/>
                                    <br/>
                                    Current Match
                                </h3>
                            </Card.Title>
                            <Card.Text className='lead'>
                                Just get in a match and wanna know how the two teams stacks up against each other? Don't you worry, we got you covered.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4} className='mb-4'>
                    <Card className='bg-dark h-100'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <h3>
                                    <FontAwesomeIcon icon={faHeadset} className='mb-2'/>
                                    <br/>
                                    Automatic Party Channels
                                </h3>
                            </Card.Title>
                            <Card.Text className='lead'>
                                Are you a server owner that wants to encourage people to party up? We got you covered. With our automanaged voice channels, you can have an nth amount of channels for users to join, automatically.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4} className='mb-4'>
                    <Card className='bg-dark h-100'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <h3>
                                    <FontAwesomeIcon icon={faHandshake} className='mb-2'/>
                                    <br/>
                                    Relationships (Friends/Blocked)
                                </h3>
                            </Card.Title>
                            <Card.Text className='lead'>
                                Find out who you are friends with and find out who you have blocked.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4} className='mb-4'>
                    <Card className='bg-dark h-100'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <h3>
                                    <FontAwesomeIcon icon={faSearch} className='mb-2'/>
                                    <br/>
                                    Player Search
                                </h3>
                            </Card.Title>
                            <Card.Text className='lead'>
                                Find a player across all platforms by a simple name search. You can find their id to use in all of our other commands.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4} className='mb-4'>
                    <Card className='bg-dark h-100'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <h3>
                                    <FontAwesomeIcon icon={faSync} className='mb-2'/>
                                    <br/>
                                    Rank-Role Sync
                                </h3>
                            </Card.Title>
                            <Card.Text className='lead'>
                                Another feature of Sidekick is that we can automatically manage the roles of your players as long as they're linked to Sidekick. You can show off your in game rank with a special role on the server.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4} className='mb-4'>
                    <Card className='bg-dark h-100'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <h3>
                                    <FontAwesomeIcon icon={faHistory} className='mb-2'/>
                                    <br/>
                                    Match History
                                </h3>
                            </Card.Title>
                            <Card.Text className='lead'>
                                Find out the general status of the previous matches a player has particpated in. You'll also get the match IDs to do further analysis with.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4} className='mb-4'>
                    <Card className='bg-dark h-100'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <h3>
                                    <FontAwesomeIcon icon={faPercentage} />
                                    <br/>
                                    Match Information
                                </h3>
                            </Card.Title>
                            <Card.Text className='lead'>
                                Get in detail statistics about the match and the match players. This can include damage done, shielding done, healing done, damage taken, etc.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} md={4} className='mb-4'>
                    <Card className='bg-dark h-100'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <h3>
                                    <FontAwesomeIcon icon={faAddressBook} />
                                    <br/>
                                    Champion Stats
                                </h3>
                            </Card.Title>
                            <Card.Text className='lead'>
                                Wanna know how many hours you've spent playing Furia? What about your KDR on Jenos? We got you covered.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </Layout>
);

export default Home;