import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import Individuals from './Individuals';
// import NRIs from './NRIs';
// import Companies from './Companies';
import Header from '../Header';

// Material UI
import Grow from '@material-ui/core/Grow';
import ServiceModule from './ServiceModule';
import Controller from '../Controller';

class Services extends Component {
    
    state = {
        serivces: {},
        mode: null,
        view: null,
        category: null
    }

    componentWillMount = () => {
        var services = {}
        services.heading = 'Our Services';
        this.setState({
            services: services
        })
    }

    mouseHoverHandler = (panel) => {
        console.log('Moving over ', panel);
        this.setState({
            category: panel
        })
        // Possible UX extensions
        // Achiveing by CSS for now
    }

    moveToService = (service) => {
        switch(service) {
            case 'Rent-Agreement': {
                console.log('Going to Service: Rent Agreement');
                this.setState({
                    // This name has to Exactly match the form file name (.yml) one
                    view: 'Rent_Agreement',
                    mode: 'service'
                });
                break;
            }
            case 'Marriage-Registeration': {
                console.log('Going to Service: Marriage');
                this.setState({
                    // This name has to Exactly match the form file name (.yml) one
                    view: 'marriage_registeration',
                    mode: 'service'
                });
                break;
            }
            case 'Will': {
                console.log('Going to Service: Will');
                this.setState({
                    // This name has to Exactly match the form file name (.yml) one
                    view: 'Will',
                    mode: 'service'
                });
                break;
            }
            case 'Gift-Deed': {
                console.log('Going to Service: Gift-Deed');
                this.setState({
                    // This name has to Exactly match the form file name (.yml) one
                    view: 'gift',
                    mode: 'service'
                });
                break;
            }
            case 'Sale/Purchase of Vehicles': {
                console.log('Going to Service: Sale/Purchase of Vehicles');
                this.setState({
                    // This name has to Exactly match the form file name (.yml) one
                    view: 'salepurch',
                    mode: 'service'
                });
                break;
            }
            default : {
                throw new Error('Error selecting the current service, Please try again');
            }
        }
    }

    componentDidUpdate = () => {
        console.log('The state has been updated with: ', this.state);
    }

    render() {
        
        const { mode, view, category } = this.state;

        function service () {
            if (mode === 'service' && view != null) return (<ServiceModule category = { category } service = { view } />)
        }

        function controller () {
            if (mode === 'service'){
                var attire = {}
                // Set Attire
                // switch(view) {
                //     case 'Rent_Agreement': {
                        
                //     }
                // }
                // Return Controller with Attire
                return (<Controller service={view}/>)
            }
        }

        return(
            <React.Fragment>
                <div className = 'services'>
                    <Header />
                    <div className='services-pane'>
                        {/* Gotta do something better than routing */}
                        {/* <Route path = '/services/individuals' component = { Individuals } />
                        <Route path = '/services/advocates' component = { Advocates } />
                        <Route path = '/services/NRIs' component = { NRIs } />
                        <Route path = '/services/companies' component = { Companies } /> */}
                        <div className='services-pane-head display6'>
                            { this.state.services.heading }
                        </div>
                        {/* Add Grow functionality */}
                        {/* <Grow in = {false}> */}
                        {service()}
                        {/* </Grow> */}
                        <div className='services-pane-options'>
                            <div className='services-pane-options-box col col-lg-4 display8'>
                                {/* Not the best way to send the target info tho */}
                                <div className='services-pane-options-element' onMouseEnter={ () => this.mouseHoverHandler('Individuals') }>
                                    Individuals
                                    <div className='services-pane-options-element-hover'>
                                        <ul>
                                            <li className='display10'>
                                                <div onClick={() => this.moveToService('Rent-Agreement')} className='services-pane-options-element-hover-link'>
                                                    Rent Agreement
                                                </div>
                                            </li>
                                            <li className='display10'>
                                                <div onClick={() => this.moveToService('Marriage-Registeration')} className='services-pane-options-element-hover-link'>
                                                    Marriage Registeration
                                                </div>
                                            </li>
                                            <li className='display10'>
                                                <div onClick={() => this.moveToService('Will')} className='services-pane-options-element-hover-link'>
                                                    Will
                                                </div>
                                            </li>
                                            <li className='display10'>
                                                <div onClick={() => this.moveToService('Gift-Deed')} className='services-pane-options-element-hover-link'>
                                                    Gift Deed
                                                </div>
                                            </li>
                                            <li className='display10'>
                                                <div onClick={() => this.moveToService('Sale/Purchase of Vehicles')} className='services-pane-options-element-hover-link'>
                                                    Sale/Purchase of Vehicles
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='services-pane-options-box col col-lg-4 display8'>
                                {/* Not the best way to send the target info tho */}
                                <div className='services-pane-options-element' onMouseEnter={ () => this.mouseHoverHandler('Advocates') }>
                                    Advocates
                                    <div className='services-pane-options-element-hover'>
                                    </div>
                                </div>
                            </div>
                            <div className='services-pane-options-box col col-lg-4 display8'>
                                {/* Not the best way to send the target info tho */}
                                <div className='services-pane-options-element' onMouseEnter={ () => this.mouseHoverHandler('NRIs') }>
                                    NRIs
                                    <div className='services-pane-options-element-hover'>
                                    </div>
                                </div>
                            </div>
                            <div className='services-pane-options-box col col-lg-4 display8'>
                                {/* Not the best way to send the target info tho */}
                                <div className='services-pane-options-element' onMouseEnter={ () => this.mouseHoverHandler('Affidavits') }>
                                    Affidavits
                                    <div className='services-pane-options-element-hover'>
                                    </div>
                                </div>
                            </div>
                            <div className='services-pane-options-box col col-lg-4 display8'>
                                {/* Not the best way to send the target info tho */}
                                <div className='services-pane-options-element' onMouseEnter={ () => this.mouseHoverHandler('Companies') }>
                                    Companies
                                    <div className='services-pane-options-element-hover'>
                                    </div>
                                </div>
                            </div>
                            <div className='services-pane-options-box col col-lg-4 display8'>
                                {/* Not the best way to send the target info tho */}
                                <div className='services-pane-options-element display8' onMouseEnter={ () => this.mouseHoverHandler('Miscellanous') }>
                                    Miscellenous
                                    <div className='services-pane-options-element-hover'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='services-pane-carousel'>

                        </div>
                        <div className='services-pane-options services-pane-options-misc'>

                        </div>
                    </div>
                    {controller()}
                </div>
            </React.Fragment>
        )
    }
}

export default Services;