import {render, screen} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import React from 'react'
import {Router} from 'react-router-dom'
import '@testing-library/jest-dom'
import App from '../App'

describe('routes using memory router', () => {
  it('landing on a Home page', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>,
    )
  
    expect(screen.getByText('Full-stack')).toBeInTheDocument()
    expect(() => screen.getByText('About Me')).toThrow()
    expect(() => screen.getByText('Database')).toThrow()
  })

  it('landing on a About page', () => {
    const history = createMemoryHistory()
    history.push('/about')
    render(
      <Router history={history}>
        <App />
      </Router>,
    )
  
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(() => screen.getByText('Explore me')).toThrow()
  })
  
})