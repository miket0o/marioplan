import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import M from 'materialize-css';

class SignedInLinks extends Component{
    componentDidMount(){
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225, alignment: 'right', coverTrigger: false});
    }

    handleChange(e){
        let q = e.target.value;
        try{
            this.props.search(q);
        }
        catch(err){
            console.log(err);
        }
    }

    render(){
        return (
            <ul className="right">
                <li>
                    <input type="text" id="search" name="search" placeholder="Search..." onChange={this.handleChange.bind(this)}/>
                </li>
                <li>
                    <NavLink to="/create">New Project</NavLink>
                </li>
                <li>
                    <a onClick={this.props.signOut}>Log Out</a>
                </li>
                <li>
                    <NavLink to="/" 
                    className="btn btn-floating pink lighten-1 dropdown-trigger"
                    data-target='dropdown-profile'>{this.props.profile.initials}</NavLink>
                    <ul id="dropdown-profile" className="dropdown-content">
                        <li><NavLink to='/profile'>Profile</NavLink></li>
                    </ul>
                </li>
            </ul>
        );
    }
    
}

const mapDispatchToProps = dispatch => {
    return{
        signOut: () => dispatch(signOut()),
        search: (val) => dispatch({type: 'SEARCH_TODO', val})
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);