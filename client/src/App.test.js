import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Data from '../src/components/Data';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('toggle loads dark mode', () => {
  const { getByTestId } = render(<App/>);
  getByTestId("toggle-element");
});

test('contains title', () => {
  const container = render(<App />);
  container.getByTestId(/title/i);
});

