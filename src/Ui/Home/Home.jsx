import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './Home.css';
import { Divider, Grid,Button,Segment,Image, Card,Icon,Header,List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import imgHome from '../../home.png';
class Home extends Component {
	render() {
  
	  return (
		<div>
		  	<nav> 
				<ul className="ui pointing secondary menu nav-items">
					<Link className="item left" to="/">
						<li>
						<div>
							<Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
							<span>Mondrix</span>
						</div>
						</li>
					</Link>
					<Link className="active item right" to="/">
						<li>Home</li>
					</Link>
					<Link className="item" to="/singin">
						<li>Ingresar</li>
					</Link>
				</ul>
			</nav>
			<div>
				<Segment placeholder className='content-paddig'>
					<Image src={imgHome} className='img-home-page' alt='' />
					<Button color='blue' size='tiny' attached='right'>
						Get Started
					</Button>
				</Segment>
			</div>
			<div className='container-home'>
			<Segment>
				<Grid columns={2} relaxed='very'>
				<Grid.Column>
					<h1>Maneja tus proyectos de la mejor manera</h1>
					<p>
					<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
					</p>
					<p>
					<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
					</p>
				</Grid.Column>
				<Grid.Column>
					<p>
					<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
					</p>
					<p>
					<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
					</p>
					<p>
					<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
					</p>
				</Grid.Column>
				</Grid>

				<Divider vertical>Y</Divider>
			</Segment>
			<Segment>
			<Divider horizontal>
				<Header as='h4'>
					<Icon name='tag' />
					Description
				</Header>
				</Divider>
				<p>
				Doggie treats are good for all times of the year. Proven to be eaten by
				99.9% of all dogs worldwide.
				</p>
			</Segment>
			<Segment>
			<Grid columns='three' divided>
				<Grid.Row>
				<Grid.Column>
					<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
				</Grid.Column>
				<Grid.Column>
				<List>
					<List.Item>
					<List.Header>New York City</List.Header>A lovely city
					</List.Item>
					<List.Item>
					<List.Header>Chicago</List.Header>
					Also quite a lovely city
					</List.Item>
					<List.Item>
					<List.Header>Los Angeles</List.Header>
					Sometimes can be a lovely city
					</List.Item>
					<List.Item>
					<List.Header>San Francisco</List.Header>
					What a lovely city
					</List.Item>
				</List>
				</Grid.Column>
				<Grid.Column>
				<List>
					<List.Item>
					<List.Icon name='users' />
					<List.Content>Semantic UI</List.Content>
					</List.Item>
					<List.Item>
					<List.Icon name='marker' />
					<List.Content>New York, NY</List.Content>
					</List.Item>
					<List.Item>
					<List.Icon name='mail' />
					<List.Content>
						<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
					</List.Content>
					</List.Item>
					<List.Item>
					<List.Icon name='linkify' />
					<List.Content>
						<a href='http://www.semantic-ui.com'>semantic-ui.com</a>
					</List.Content>
					</List.Item>
				</List>
				</Grid.Column>
				</Grid.Row>
			</Grid>
			</Segment>
			<div>
				<Button circular color='facebook' icon='facebook' />
				<Button circular color='twitter' icon='twitter' />
				<Button circular color='linkedin' icon='linkedin' />
				<Button circular color='google plus' icon='google plus' />
			</div>
			</div>
		</div>
	  )
	}
}
export default Home;