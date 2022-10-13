import { render, screen } from '@testing-library/react'

import { Home } from './Home'

describe('Home component', () => {
  it('should render home component correctly', () => {
    const { container } = render(<Home />)
    expect(screen.getByTestId('home-logo')).toBeInTheDocument()
    expect(screen.getByTestId('home-title')).toBeInTheDocument()
    expect(screen.getByTestId('home-description')).toBeInTheDocument()
    expect(screen.getByTestId('home-illustration')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
