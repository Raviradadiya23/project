import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Butter Scotch', path: '/images/butter-scotch' },
        { name: 'strawberry', path: '/images/strawberry' },
      ])
    );
  }),
];
