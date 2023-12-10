import type { Meta, StoryObj } from '@storybook/react';
import FriendsContainer from '@/features/friends/friendsContainer';



const meta = {
  title: 'features/friends/friendsContainer',
  component: FriendsContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof FriendsContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FallbackAvatar: Story = {
  args: {
    entries: [
        { id: "1", name: "Test1", description: "Test1", status: "Online" },
        { id: "2", name: "Test2", description: "Test2", status: "Away" },
        { id: "3", name: "Test3", description: "Test3", status: "Busy" },
        { id: "4", name: "Test4", description: "Test4", status: "Offline" },
        { id: "5", name: "Test5", description: "Test5", status: "Unknown" },
    ]
  },
};
