import styles from './PageBlock.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function PageBlock({ children, className, ...restProps }) {
  return (
    <div {...restProps} className={classnames(className)}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

PageBlock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
