import { Story, Meta } from '@storybook/react/types-6-0'
import UserInfo from '.'
import { UserResponse } from 'models/user'
import { mockUser } from 'utils/tests/mock'

export default {
  title: 'UserInfo',
  component: UserInfo
} as Meta

export const Basic: Story<UserResponse> = (args) => (
  <UserInfo {...mockUser} {...args} />
)

Basic.args = mockUser
