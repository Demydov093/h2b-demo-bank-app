import { fireEvent, render } from '@testing-library/react-native';
import { Text } from 'react-native';
import Button from '../Button';

describe('<Button />', () => {
  test('renders text correctly', () => {
    const { getByText } = render(<Button text="Click me" />);
    getByText('Click me');
  });

  test('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<Button text="Press me" onPress={onPressMock} />);
    fireEvent.press(getByTestId('button-touchable'));
    expect(onPressMock).toHaveBeenCalled();
  });

  test('renders loading indicator', () => {
    const { getByTestId, queryByText } = render(<Button text="Loading" loading />);
    getByTestId('activity-indicator');
    expect(queryByText('Loading')).toBeNull();
  });

  test('renders icon', () => {
    const { getByTestId } = render(<Button text="With Icon" icon={<Text testID="icon">I</Text>} />);
    getByTestId('icon');
  });

  test('disabled button does not call onPress', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<Button text="Disabled" onPress={onPressMock} disabled />);

    fireEvent.press(getByTestId('button-touchable'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  test('matches snapshot', () => {
    const tree = render(<Button text="Snapshot" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
