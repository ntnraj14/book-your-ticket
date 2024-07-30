import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '../../../src/app/_components/navbar/navbar';

describe('Page', () => {
  it('renders a title in navbar', () => {
    render(<Navbar />);
 
    const title = screen.getByTestId('all'); 
    expect(title).toBeInTheDocument();
  })
})