import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

import Home from '../components/home/Home'
import Contact from '../components/contact/Contact'

describe('Home page', () => {
  it('matchs Snapshot', () => {
    const tree = renderer
    .create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should render items', () => {
    const {container} = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
     expect(container.querySelector('div').classList.contains('home')).toBe(true);
     expect(container.querySelector('div').classList.contains('about')).toBe(false);
  })
})

describe('About page', () => {
  it('should render items', () => {
    render(<Contact />);
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    expect(screen.getByText('Send')).toBeInTheDocument();
  })
})
