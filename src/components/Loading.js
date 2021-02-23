import React from 'react';
import { IonSpinner } from '@ionic/react';

const SpinnerStyle = {
  margin: 'auto',
  transform: 'scale(5)',
  color: 'red',
};
const Loading = () => (<IonSpinner name="bubbles" style={SpinnerStyle} />);

export default Loading;
