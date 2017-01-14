import React, { Component } from 'react';

export default class DataHub extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('Hello World!');
  }

  render() {
    return (
      <div className="data-hub">
        Shop Heroes Data Hub
      </div>
    )
  }
}