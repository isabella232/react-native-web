/* eslint-disable react/prop-types */
import React, { useLayoutEffect, useRef } from 'react';
import jss from './jss';

const Dot = ({ children, ...other }) => {
  const ref = useRef();
  let sheet = ref.current;

  if (!sheet) {
    sheet = ref.current = jss.createStyleSheet(styles, { link: true });
  }

  useLayoutEffect(() => {
    sheet.attach();
    return () => {
      sheet.detach();
    };
  }, []);

  useLayoutEffect(
    () => {
      sheet.update(other);
    },
    [other]
  );

  const { classes } = sheet;

  return <div className={classes.root}>{children}</div>;
};

const styles = {
  root: ({ color, size, x, y }) => ({
    position: 'absolute',
    cursor: 'pointer',
    width: 0,
    height: 0,
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    transform: 'translate(50%, 50%)',
    borderBottomColor: color,
    borderRightWidth: `${size / 2}px`,
    borderBottomWidth: `${size / 2}px`,
    borderLeftWidth: `${size / 2}px`,
    marginLeft: `${x}px`,
    marginTop: `${y}px`
  })
};

export default Dot;
