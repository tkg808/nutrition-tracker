import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../components/Home';
import App from '../App';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

test('should display list-tip', () =>
{
  render(
    <Router>
      <App />
    </Router>);
  render(<Home />);
  fireEvent.apply(setUserFoods([]));
  expect(screen.getByText('Search for')).toBeVisible();
});