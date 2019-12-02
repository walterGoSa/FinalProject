import React from 'react';
import PropTypes from 'prop-types'
import logo from '../../logo.svg';
import './navBar.css';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'

const getWidth = () => {
    const isSSR = typeof window === 'undefined'
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


class NavBar extends React.Component{

    state = {}
    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render(){
        const { children } = this.props;
        const { fixed } = this.state;
        var style = fixed ? 'fixed-nav' : 'absolute-nav';
        return (
            <React.Fragment>
                <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                    <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <nav  className={'topnav '+ style} id="topnav">
                        <div className="left-div">
                            <img className="" src={logo} alt=""/>
                        </div>
                        <div className="center-div">
                            <a href="#" className="active">Inicio</a>
                            <a href="#">Acerca de</a>
                            <a href="#">Precios</a>
                            <a href=""></a>
                        </div>
                        <div className="right-div">
                            <a className="">
                                Iniciar sesión
                            </a>
                        </div>
                        <a class="icon">&#9776;</a>
                    </nav>
                    </Visibility>
                </Responsive>
            </React.Fragment>
        );
    }

}


export default NavBar;