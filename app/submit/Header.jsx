import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { area, name, description } = this.props;
        return (
            <div className="submitHeader">
                <div className="submitTitle">
                    <span className="submitArea">{area}</span>
                    <span className="submitAreaName">{name}</span>
                </div>
                <div className="submitDescription">{description}</div>
            </div>
        );
    }
}