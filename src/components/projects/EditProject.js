import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { editProject } from '../../store/actions/projectActions';

class EditProject extends Component {
    state = {
        content: '',
        title: ''
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleClick = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;
        this.props.editProject(id, this.state);
        this.props.history.push(`/project/${id}`)
    }

    render() {
        const project = this.props.project;

        if(project){
            return (
                <div className="container">
                    <form className="white">
                        <h5>Edit Project</h5>
                        <div className="input-field">
                            <input type="text" id="title" placeholder={project.title} onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <input type="text" id="content" placeholder={project.content} onChange={this.handleChange} />
                        </div>
                        <div className="input-field" onClick={this.handleClick}>
                            <button className="btn pink lighten-1 z-depth-0">Edit</button>
                        </div>
                    </form>
                </div>
            );
        }
        else{
            return(
                <div className="container">
                    <p>Loading Project...</p>
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        auth: state.firebase.auth,
        project: project
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editProject: (projectId, project) => dispatch(editProject(projectId, project))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(EditProject);