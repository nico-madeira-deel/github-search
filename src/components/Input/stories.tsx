import { Story, Meta } from '@storybook/react/types-6-0'
import Input from '.'

export default {
  title: 'Input',
  component: Input
} as Meta

export const Basic: Story = (args) => <Input {...args} />
