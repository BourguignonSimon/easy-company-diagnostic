import React from 'react';
import { render, screen } from '@testing-library/react';
import DiagnosticForm from '../src/components/DiagnosticForm';

describe('DiagnosticForm', () => {
  test('renders diagnostic form title', () => {
    render(<DiagnosticForm />);
    const titleElement = screen.getByText(/Diagnostic Organisationnel/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('form is rendered', () => {
    render(<DiagnosticForm />);
    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
  });
});
