import { Story, Meta } from '@storybook/react/types-6-0'
import UserRepositories from '.'
import { mockRepository } from 'utils/tests/mock'

export default {
  title: 'UserRepositories',
  component: UserRepositories
} as Meta

export const Basic: Story = (args) => (
  <UserRepositories {...mockRepository} {...args} />
)

Basic.args = mockRepository
