/* eslint-disable react/prop-types */
import classnames from 'classnames';
import jss from './jss';
import React, { useLayoutEffect } from 'react';

const View = ({ className, ...other }) => {
  const { classes } = sheet;
  useLayoutEffect(() => {
    sheet.attach();
  }, []);
  return <div {...other} className={classnames(classes.root, className)} />;
};

const styles = {
  root: {
    alignItems: 'stretch',
    borderWidth: 0,
    borderStyle: 'solid',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
    margin: 0,
    padding: 0,
    position: 'relative',
    // fix flexbox bugs
    minHeight: 0,
    minWidth: 0
  }
};

const sheet = jss.createStyleSheet(styles);

export default View;
