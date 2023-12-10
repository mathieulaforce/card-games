import type { Meta, StoryObj } from '@storybook/react';
import UserAvatar from '@/components/avatars/userAvatar';



const meta = {
  title: 'components/common/UserAvatar',
  component: UserAvatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
} satisfies Meta<typeof UserAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FallbackAvatar: Story = {
  args: {
    name: 'John Doe The Third',
    color: 'bg-blue-500'
  },
};

export const FallbackWithoutAColor: Story = {
  args: {
    name: 'John Doe The Third'
  },
};

export const ImageAvatar: Story = {
  args: {
    name: 'John Doe The Third',
    color: 'bg-blue-500',
    imageSrc: 'https://github.com/shadcn.png'
  },
};



