import type { Meta, StoryObj } from '@storybook/react'
import { useRef, useState } from 'react'
import { fn } from 'storybook/test'
import { Alert } from './Alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'Кастомный компонент уведомления',
      },
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Server is not available',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Your settings are saved',
  },
}

export const LikeToast: Story = {
  render: () => {
    const [error, setError] = useState<string | null>(null)
    const timeoutRef = useRef<number>(null)

    const handleClick = () => {
      setError('Server is not available')

      clearTimeout(timeoutRef.current!)
      timeoutRef.current = window.setTimeout(() => {
        setError(null)
      }, 3000)
    }

    const handleClose = () => {
      setError(null)
      clearTimeout(timeoutRef.current!)
    }

    return (
      <div>
        <button type="button" onClick={handleClick} style={{ marginBottom: '10px' }}>
          Set error
        </button>
        {error && <Alert onClose={handleClose}>{error}</Alert>}
      </div>
    )
  },
}
