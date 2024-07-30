import '@testing-library/jest-dom'
import { screen, fireEvent } from '@testing-library/react'
import App from '../src/app/page';

import { renderWithProviders } from '../src/app/_lib/test/test-utils';
import { useState } from 'react';

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
  it('renders a title', () => {
    renderWithProviders(<App/>);
    const title = screen.getByTestId('browseEvents'); 
    expect(title).toBeInTheDocument();
  })
})