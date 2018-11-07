import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { loadWork } from '../../store/work/work';

import PageHeader from '../../components/Page Header';
import { Loader } from '../../components/Loader';
import WorkItem from './WorkItem';

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
    const { loading, work } = this.props.work;
    
    return <div className=" bg-gray">
        <h1>Work</h1>
        <PageHeader headerImage="https://source.unsplash.com/xtd3zYWxEs4/1600x900">
          <h1>Work</h1>
        </PageHeader>
        <div className="work-page container">
          <div className="work-section">
            <div className="row">
              <div className="col-12 col-md-6">
                <h1>What we do</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam odit, soluta voluptatibus minus omnis obcaecati
                  eveniet officia ipsum molestias animi, vitae dicta atque
                  in maiores vero temporibus odio. Nesciunt, corporis.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 offset-md-6 col-md-6">
                <h1>How we work</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, quas sit, repellat accusamus molestias vitae vel
                  illo eaque est placeat et fugit repudiandae hic rem a
                  temporibus non odio voluptates.
                </p>
              </div>
            </div>
          </div>
          <div className="work-section row">
            {loading ? <Loader /> : work.map(({ fields, sys }, i) => (
                <div className="col-12 col-md-4" key={i}>
                  <WorkItem {...fields} {...sys} />
                </div>
              ))}
          </div>
          <div className="work-section row justify-content-center">
            <div className="col-6 text-center">
              <h3>Work With Us</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
                maxime, animi consequatur doloremque totam nostrum facilis
                quo voluptatum ipsam illum quod quaerat neque! Ad dicta unde
                dolores voluptates veritatis laborum.
              </p>
            </div>
          </div>
        </div>
      </div>;
  }
}

Work.propTypes = {
  loadWork: Proptypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);
