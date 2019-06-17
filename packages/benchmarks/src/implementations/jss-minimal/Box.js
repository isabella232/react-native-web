/* eslint-disable react/prop-types */
import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import jss from './jss';
import View from './View';

const Box = ({ color, fixed = false, layout = 'column', outer = false, ...other }) => {
  const { classes } = sheet;

  useLayoutEffect(() => {
    sheet.attach();
  }, []);

  return (
    <View
      {...other}
      className={classnames({
        [classes[`color${color}`]]: true,
        [classes.fixed]: fixed,
        [classes.row]: layout === 'row',
        [classes.outer]: outer
      })}
    />
  );
};

const styles = {
  outer: {
    alignSelf: 'flex-start',
    padding: '4px'
  },
  row: {
    flexDirection: 'row'
  },
  color0: {
    backgroundColor: '#14171A'
  },
  color1: {
    backgroundColor: '#AAB8C2'
  },
  color2: {
    backgroundColor: '#E6ECF0'
  },
  color3: {
    backgroundColor: '#FFAD1F'
  },
  color4: {
    backgroundColor: '#F45D22'
  },
  color5: {
    backgroundColor: '#E0245E'
  },
  fixed: {
    width: '6px',
    height: '6px'
  }
};

const sheet = jss.createStyleSheet(styles);

export default Box;
