import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandRepo } from '../actions/index';
import { repoItem } from './repo_item';

class RandomRepo extends Component {
  componentWillMount() {
    this.props.fetchRandRepo();
  }

  render() {
    const { repos } = this.props;
    return (
      repos.map(repo =>
        <ul key={repo.id} className="nav nav-pills nav-justified">
          {repoItem(repo)}
        </ul>
      )
    );
  }
}

function mapStateToProps(state) {
  return { repos: state.repos.all };
}

export default connect(mapStateToProps, { fetchRandRepo })(RandomRepo);