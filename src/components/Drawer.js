import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Divider from 'material-ui/Divider';
import { Friday, Saturday, Sunday } from './schedule/Schedule'

const OHUB = "rgb(70,200,217)";
const HBCU = "rgb(221,78,225)";

export default class ODrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div className='drawer-container'>
       
        <Drawer  
        overlayClassName='overlay-drawer'
        containerClassName='drawer-container' 
        className='drawer'
        width={300} 
        containerStyle={styles.drawerContainer}
        openSecondary={true} 
        open={this.state.open}>
          <h3 className='header-sch'> SXSW SCHEDULE </h3>
          <Divider style={styles.dividerStyle}/>
          <Friday />
          <Saturday />
          <Sunday />
                      
        </Drawer>
      </div>
    );
  }
}

const styles = {
    drawerContainer: {
        backgroundColor: 'rgba(0,0,0,.8)',
       
    },
    dividerStyle: {
        marginLeft: '15%',
        marginRight: '15%'
    },
    menuItem: {

    }
}