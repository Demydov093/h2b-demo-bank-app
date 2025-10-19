import type { Meta, StoryObj } from '@storybook/react';

import { View } from 'react-native';
import { fn } from 'storybook/test';

import { Ionicons } from '@expo/vector-icons';
import Button from './../../src/components/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onPress arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    text: 'Deposit',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Settings',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    text: 'Submitting...',
    loading: true,
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Profile',
    icon: <Ionicons name="person-outline" size={20} color="white" />,
  },
};
