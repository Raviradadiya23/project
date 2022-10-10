import { render, screen } from '@testing-library/react';

import Options from '../options';

test('display the scoop images from the mock server', async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((e) => e.alt);
  expect(altText).toEqual(['Butter Scotch scoop', 'strawberry scoop']);
});
