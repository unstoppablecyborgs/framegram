import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Shared/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['error', 'succeeded'],
    },
    message: { control: 'text' },
    autoHideDuration: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Succeeded: Story = {
  args: {
    variant: 'succeeded',
    message: 'Операция выполнена успешно!',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    message: 'В результате выполнения произошла ошибка!',
  },
}
