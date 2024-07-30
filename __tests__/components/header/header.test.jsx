import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import Header from '../../../src/app/_components/header/header';

import { renderWithProviders } from '../../../src/app/_lib/test/test-utils';

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  },
  usePathname() {
    return {
      prefetch: () => null
    };
  }
}));


describe('Page', () => {
  it('renders a title in header', () => {
    renderWithProviders(<Header />);
 
    const title = screen.getByTestId('browseEvents'); 
    expect(title).toBeInTheDocument();
  })
})