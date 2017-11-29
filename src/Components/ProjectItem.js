import React, { Component } from 'react';

class Projects extends Component {
    render() {
        console.log(this.props);
        return (
            <li className="Projects">
                {this.props.project.title}
            </li>
        );
    }
}

export default Projects;