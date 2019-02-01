import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    const { totalItems = null, pageLimit = 6 } = this.props;

    // Limit of items to show per page
    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 6;

    // Total number of items to paginated
    this.totalItems = typeof totalItems === 'number' ? totalItems : 0;

    // Total pages to sustain all items
    this.totalPages = Math.ceil(this.totalItems / this.pageLimit);

    // Keep track of the currently active page
    this.state = { currentPage: 1 };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.gotoPage = this.gotoPage.bind(this);
  }

  componentDidMount() {
    this.gotoPage(1);
  }

  gotoPage(page) {
    const { onPageChanged = f => f } = this.props;

    const currentPage = Math.max(0, Math.min(page, this.totalPages));

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalItems: this.totalItems
    };

    this.setState({ currentPage, page }, () => onPageChanged(paginationData));
  }

  //   Handles on click event for pagination
  handleClick(event, page) {
    event.preventDefault();
    this.gotoPage(page);
  }

  render() {
    // Prevents unnecessary rendering
    if (
      !this.totalItems ||
      this.totalPages === 1 ||
      this.state.currentPage === this.totalPages
    )
      return null;

    const { page } = this.state;
    var nextPage = page + 1;

    return (
      <h4 className="pagination-button">
        <a
          className="action-link-dark"
          href="#"
          onClick={event => this.handleClick(event, nextPage)}
        >
          Load More
        </a>
      </h4>
    );
  }
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Pagination;
