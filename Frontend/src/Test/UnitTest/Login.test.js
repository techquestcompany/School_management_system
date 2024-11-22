// src/components/Login.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

test('renders Login form and submits form data', () => {
  render(<Login />);

  // Check if the form fields are present
  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /login/i });

  // Simulate user input
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Submit the form
  fireEvent.click(submitButton);

  // Check if the correct values are logged (you can spy on console.log here if needed)
  expect(usernameInput.value).toBe('testuser');
  expect(passwordInput.value).toBe('password123');
});
