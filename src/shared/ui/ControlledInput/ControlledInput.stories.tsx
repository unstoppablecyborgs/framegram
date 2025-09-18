import { Meta, StoryObj } from '@storybook/nextjs-vite'

import { ControlledInput } from './ControlledInput'

const meta = {
  title: 'Components/ControlledInput',
  component: ControlledInput,
  parameters: {
    docs: {
      description: {
        component: 'Управляемый инпут на базе стандартного инпута.',
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
    type: 'password',
  },
}

export const EmailDisabled: Story = {
  args: {
    disabled: true,
    label: 'Email',
    placeholder: 'password1234',
    type: 'email',
  },
}

export const DefaultSearch: Story = {
  args: {
    type: 'search',
  },
}

export const Default: Story = {
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'youremail@email.com',
    disabled: false,
  },
  render: args => {
    return (
      <div>
        <ControlledInput
          type={args.type}
          label={args.label}
          placeholder={args.placeholder}
          disabled={args.disabled}
        />
      </div>
    )
  },
}
