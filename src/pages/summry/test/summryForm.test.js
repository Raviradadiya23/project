import { fireEvent, render, screen } from '@testing-library/react';
import SummryForm from '../summryForm';

test('initial functionality of the checkbox', () => {
  render(<SummryForm />);

  const checkBox = screen.getByRole('checkbox');
  const submitBtn = screen.getByRole('button', { name: 'Confirm order' });

  expect(checkBox).not.toBeChecked();
  expect(submitBtn).toBeDisabled();

  fireEvent.click(checkBox);

  expect(submitBtn).toBeEnabled();

  fireEvent.click(checkBox);

  expect(submitBtn).toBeDisabled();
});
