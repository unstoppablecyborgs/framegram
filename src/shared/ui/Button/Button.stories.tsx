import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Link from 'next/link'

import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof Button>

/** Primary variant. Used as 'default'*/
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
}

/** Secondary variant*/
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

/** Outlined variant*/
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined',
  },
}

/** TextButton variant*/
export const TextButton: Story = {
  args: {
    variant: 'textButton',
    children: 'TextButton',
  },
}

/** Disabled variant*/
export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled',
    disabled: true,
  },
}

/** Link as Button variant*/
export const LinkAsButon: Story = {
  render: () => (
    <Button asChild>
      <Link href={'/'} style={{ textDecoration: 'none' }}>
        Link As Button
      </Link>
    </Button>
  ),
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
  decorators: [
    Story => (
      <div style={{ width: '500px', border: '1px dashed #ccc', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
}
