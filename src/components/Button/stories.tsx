import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'

export default {
  argTypes: {
    onClick: {
      type: 'function'
    }
  },
  title: 'Button',
  component: Button
} as Meta

export const Basic: Story<ButtonProps> = (args) => (
  <Button {...args}>Test</Button>
)

Basic.args = {
  onClick: () => console.log('test')
}
