import React, { Component } from "react";
import getLanguages from '../languages';

class Index extends Component {

  constructor() {
    super();

    this.state = {
      languages: []
    }
  }

  async componentDidMount() {
    const languages = await getLanguages();
    this.setState({ languages });
  }

  render() {
    const li = this.state.languages.map((language, i) => {
      return <li key={i}>{language}</li>;
    });

    return (
      <ul>{li}</ul>
    );
  }
}

export default Index;
