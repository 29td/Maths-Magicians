import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Quote from '../quotes';

test('should render the Quote page', () => {
  const quote = render(<Router><Quote /></Router>);
  expect(quote).toMatchSnapshot();
});