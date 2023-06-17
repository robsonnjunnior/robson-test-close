import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { container } = render(<App />)

  const element = container.getElementsByClassName('List')[0]

  expect(element).toBeInTheDocument()
})
