/* eslint-disable react/prop-types */
import { styled } from 'react-jss';
import View from './View';

const Dot = styled(View)({
  position: 'absolute',
  cursor: 'pointer',
  width: 0,
  height: 0,
  borderColor: 'transparent',
  borderStyle: 'solid',
  borderTopWidth: 0,
  transform: 'translate(50%, 50%)',
  marginLeft: props => props.x,
  marginTop: props => props.y,
  borderRightWidth: props => props.size / 2,
  borderBottomWidth: props => props.size / 2,
  borderLeftWidth: props => props.size / 2,
  borderBottomColor: props => props.color
});

export default Dot;
