import React, { Component } from "react";

class Project extends Component {
    state = { isActive: true };

    render() {
        return (
            <div id="project_link">
                <a className="center-align" href={this.props.link} id="project_item">
                    {this.props.title}
                </a>
            </div>
        );
    }
}

export default Project;
