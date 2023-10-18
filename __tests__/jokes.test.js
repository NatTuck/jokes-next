import { render, screen } from '@testing-library/react';
import Jokes from '../app/jokes/page';
import '@testing-library/jest-dom';
 
describe('Jokes', () => {
  it('renders a heading', async () => {
    render(await Jokes());
 
    const heading = screen.getByRole('heading', {
      name: /jokes/i,
    });
 
    expect(heading).toBeInTheDocument();
  });
});
