import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Home from './page';

test('simple vitest test', async () => {
  user.setup();
  const home = render(<Home />);
  const firstNumber = screen.getByLabelText('first') as HTMLInputElement;
  const secondNumber = screen.getByLabelText('second') as HTMLInputElement;

  await user.type(firstNumber, '1');
  await user.type(secondNumber, '20');

  const result = home.container.querySelector('#result') as HTMLSpanElement;
  expect(result?.textContent?.trim()).toBe('21');
});
