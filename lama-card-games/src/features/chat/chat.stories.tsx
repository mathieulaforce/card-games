import type { Meta, StoryObj } from '@storybook/react';
import ChatBox from './chatbox';

const meta = {
  title: 'features/chat/chatbox',
  component: ChatBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof ChatBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FallbackWithoutAColor: Story = {
  args: {
    channelName: 'random'
  },
};
