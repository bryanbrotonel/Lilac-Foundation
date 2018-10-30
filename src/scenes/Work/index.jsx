import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { loadWork } from '../../store/work/work';

import PageHeader from '../../components/Page Header';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadWork: () => {
      dispatch(loadWork());
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { work: state.work };
}

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { loadWork } = this.props;

    // Dispatches loadWork()
    loadWork();
  }

  render() {

    return (
      <div className="container">
        <PageHeader>
          <h1>Work</h1>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi
            delectus doloribus repellendus consequatur atque alias nemo dolorum
            quidem, magni magnam possimus, fugiat error placeat quam itaque quis
            quisquam ipsa!
          </h6>
        </PageHeader>
      </div>
    );
  }
}

Work.propTypes = {
  loadWork: Proptypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);

