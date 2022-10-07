import { render, screen } from '@testing-library/react';
import SummryForm from '../SummryForm';
import userEvent from '@testing-library/user-event';

test('initial functionality of the checkbox', async () => {
  const user = userEvent.setup();
  render(<SummryForm />);

  const checkBox = screen.getByRole('checkbox');
  const submitBtn = screen.getByRole('button', { name: 'Confirm order' });

  expect(checkBox).not.toBeChecked();
  expect(submitBtn).toBeDisabled();

  await user.click(checkBox);

  expect(submitBtn).toBeEnabled();

  await user.click(checkBox);

  expect(submitBtn).toBeDisabled();
});

test('popover check for hover event', async () => {
  render(<SummryForm />);
  const user = userEvent.setup();
  const nullPopover = screen.queryByText(/you will get nothing/i);
  const tnc = screen.getByText(/Terms and Conditions/i);

  expect(nullPopover).not.toBeInTheDocument();

  await user.hover(tnc);
  const popover = screen.queryByText(/you will get nothing/i);
  expect(popover).toBeInTheDocument();

  await user.unhover(tnc);
  const nullPopover2 = screen.queryByText(/you will get nothing/i);
  expect(nullPopover2).not.toBeInTheDocument();
});
