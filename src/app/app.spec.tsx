import { render } from '@testing-library/react';

import App from './app';

// Mock IntersectionObserver
class IntersectionObserver {
  root: Element | null = null;
  rootMargin = '';
  thresholds: ReadonlyArray<number> = [];

  observe(target: Element) {
    // Add implementation here if needed
  }
  unobserve(target: Element) {
    // Add implementation here if needed
  }
  disconnect() {
    // Add implementation here if needed
  }
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

global.IntersectionObserver = IntersectionObserver;

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText(/PH-Balanced Solutions/gi)).toBeTruthy();
  });
});
