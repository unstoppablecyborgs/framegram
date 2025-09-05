import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'

import { Textarea } from './Textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: 'Кастомная текстовая область на базе Radix UI.',
      },
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Focus: Story = {
  args: {
    placeholder: 'Нажми, чтобы увидеть состояние фокуса',
    autoFocus: true,
  },
}

export const WithLabel: Story = {
  render: () => {
    return (
      <div>
        <label htmlFor="message">Your message</label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
    )
  },
}

export const WithError: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isError, setIsError] = useState(true)

    return (
      <div>
        <button
          type="button"
          style={{ marginBottom: '10px' }}
          onClick={() => setIsError(prev => !prev)}
        >
          Toggle error
        </button>
        <Textarea placeholder="Type your message here." aria-invalid={isError} />
        {isError && <span style={{ color: 'red' }}>Error message</span>}
      </div>
    )
  },
}
