import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Select } from '@/shared/ui/Select/Select'

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Кастомный компонент выпадающего списка',
      },
    },
  },
  args: {},
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return <Select />
  },
}
