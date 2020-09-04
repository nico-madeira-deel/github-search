import { Story, Meta } from '@storybook/react/types-6-0'
import Input, { InputProps } from '.'

export default {
  argTypes: {
    callbackOnBlur: {
      type: 'function'
    }
  },
  title: 'Input',
  component: Input
} as Meta

export const Basic: Story<InputProps> = (args) => <Input {...args} />

Basic.args = {
  callbackOnBlur: () => console.log('test')
}
