import React from 'react';
import './footer.css';
import { Segment, Container, Grid, Header, List, Button } from 'semantic-ui-react';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.setState={

        }
    }

    render(){
        return(
            <React.Fragment>
                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='About' />
                                    <List link inverted>
                                        <List.Item as='a'>Sitemap</List.Item>
                                        <List.Item as='a'>Contact Us</List.Item>
                                        <List.Item as='a'>Religious Ceremonies</List.Item>
                                        <List.Item as='a'>Gazebo Plans</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                        <List.Item as='a'>Banana Pre-Order</List.Item>
                                        <List.Item as='a'>DNA FAQ</List.Item>
                                        <List.Item as='a'>How To Access</List.Item>
                                        <List.Item as='a'>Favorite X-Men</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>
                                        Footer Header
                                    </Header>
                                    <p>
                                        Extra space for a call to action inside the footer that could help re-engage users.
                                    </p>
                                    <div>
                                        <Button circular color='facebook' icon='facebook' />
                                        <Button circular color='twitter' icon='twitter' />
                                        <Button circular color='linkedin' icon='linkedin' />
                                        <Button circular color='google plus' icon='google plus' />
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </React.Fragment>
        )
    }
}

export default Footer;