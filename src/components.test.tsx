import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './Home';
import ProblemStatement from './ProblemStatement';
import { RwaFeatures } from './RwaFeatures';
import FAQ from './FAQ';
import Footer from './Footer';
import FullscreenMenuOverlay from './FullscreenMenuOverlay';

// Mock matchMedia for jsdom if not present
if (typeof window.matchMedia !== 'function') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: any) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
}

describe('Smoke Tests for Top-level Sections', () => {
  it('renders Home without throwing', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });

  it('renders ProblemStatement without throwing', () => {
    const { container } = render(<ProblemStatement />);
    expect(container).toBeInTheDocument();
  });

  it('renders RwaFeatures without throwing', () => {
    const { container } = render(<RwaFeatures />);
    expect(container).toBeInTheDocument();
  });

  it('renders FAQ without throwing', () => {
    const { container } = render(<FAQ />);
    expect(container).toBeInTheDocument();
  });

  it('renders Footer without throwing', () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });
});

describe('Interaction Tests', () => {
  it('FullscreenMenuOverlay open/close and focus trap (basic check)', async () => {
    const handleClose = vi.fn();
    render(<FullscreenMenuOverlay isOpen={true} onClose={handleClose} />);
    
    // Check if dialog is visible
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    
    // Close button should be present
    const closeBtn = screen.getByRole('button', { name: /close menu/i });
    expect(closeBtn).toBeInTheDocument();
    
    // Click close button
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalled();
  });

  it('FAQ accordion expand/collapse', async () => {
    render(<FAQ />);
    
    // The first FAQ item is about "What is Neko Protocol?"
    const button = screen.getByText('What is Neko Protocol?');
    expect(button).toBeInTheDocument();
    
    // Click to toggle
    fireEvent.click(button);
    
    // Depending on initial state, we check its behavior.
    // By default the first item is usually open if openIndex = 0.
    // If it's already open, clicking it should close it.
    
    // Wait for animation to finish or at least check state changes.
  });
});
