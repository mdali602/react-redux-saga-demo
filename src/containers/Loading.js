import React from 'react';
import { connect } from 'react-redux';

const Loading = ({ loading }) => (
  loading ? 
  <div style={{ textAlign: 'center' }}>
    <h1>LOADING</h1>
  </div> :
  null
);

const mapStateToProps = (state) => ({
  loading: state.loading
});

export default connect(mapStateToProps)(Loading);