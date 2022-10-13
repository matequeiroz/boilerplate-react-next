import { render, screen } from '@testing-library/react'

import Home from './Home'

describe('loads items eventually', () => {
  it('teste', () => {
    const { container } = render(<Home />)
    expect(screen.getByText('Home2')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
