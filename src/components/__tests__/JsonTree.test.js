import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../shared/Searchbar';
import JsonTree from '../JsonTree';
afterEach(() => {
  cleanup();
});
test('render Json tree correctly', () => {
  const { queryByTestId } = render(<JsonTree />);
  expect(queryByTestId('Json-tree')).toBeTruthy();
});
test('render search bar correctly', () => {
  const { queryByTestId } = render(<SearchBar />);
  expect(queryByTestId('text-1')).toBeTruthy();
  expect(queryByTestId('btn-1')).toBeTruthy();
});
describe('Search component', () => {
  describe('search button ', () => {
    test('does trigger the function ', () => {
      const updateDataSource = jest.fn();
      const { queryByTestId } = render(
        <SearchBar updateDataSource={updateDataSource} />
      );
      fireEvent.click(queryByTestId('btn-1'));
      expect(updateDataSource()).toBeCalled;
    });
  });
});
