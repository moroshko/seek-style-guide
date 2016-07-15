import styles from './ErrorIcon.less';

import svgMarkup from './ErrorIcon.svg';
import svgMarkupFilled from './ErrorIconFilled.svg';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class ErrorIcon extends Component {

  static displayName = 'ErrorIcon';

  static propTypes = {
    svgClassName: PropTypes.string,
    className: PropTypes.string,
    filled: PropTypes.bool
  };

  static defaultProps = {
    svgClassName: '',
    className: '',
    filled: false
  };

  getSvg() {
    const { filled } = this.props;

    return filled ? svgMarkupFilled : svgMarkup;
  }

  render() {
    const { svgClassName, className, ...restProps } = this.props;
    const svgMarkupWithClassName = this.getSvg()
      .replace('<svg ', `<svg class="${svgClassName}" `);
    const combinedProps = {
      ...restProps,
      className: classnames(styles.root, className)
    };

    /* eslint-disable react/no-danger */
    return (
      <span
        dangerouslySetInnerHTML={{ __html: svgMarkupWithClassName }}
        {...combinedProps}
      />
    );
    /* eslint-enable react/no-danger */
  }

}