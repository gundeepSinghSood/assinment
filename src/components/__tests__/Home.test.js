import React from 'react';
import { render } from '@testing-library/react';

import Home from '../../components/templates/Home';

import { ServerDataProvider } from '../../state/serverDataContext';

describe('<Home />', () => {
  it('renders server todos', () => {
    const { container } = render(
      <ServerDataProvider value={{ records: [{ id: 1, text: 'Test todo' }] }}>
        <Home />
      </ServerDataProvider>
    );

    expect(container.querySelector('li').textContent).toEqual('Test todo');
  });
});
