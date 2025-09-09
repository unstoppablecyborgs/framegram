import { Meta, StoryObj } from '@storybook/nextjs-vite'

import { ControlledInput } from './ControlledInput'

const meta = {
  title: 'Components/ControlledInput',
  component: ControlledInput,
  parameters: {
    docs: {
      description: {
        component: 'Управляемый инпут на базе Radix UI.',
      },
    },
  },
} satisfies Meta<typeof ControlledInput>

export default meta
type Story = StoryObj<typeof meta>

export const PasswordError: Story = {
  args: {
    errorMessage: 'wrong password',
    label: 'Password',
    placeholder: 'password1234',
    type: "'password'",
  },
}

export const EmailDisabled: Story = {
  args: {
    disabled: true,
    label: 'Email',
    placeholder: 'password1234',
    type: "'email'",
  },
}

export const DefaultSearch: Story = {
  args: {
    type: "'search'",
  },
}

export const DefaultEmail: Story = {
  render: () => {
    return (
      <div>
        <ControlledInput
          type={'password'}
          label={'Email'}
          placeholder={'youremail@email.com'}
          disabled={false}
        />
      </div>
    )
  },
}
