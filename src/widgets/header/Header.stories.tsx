import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Header } from '@/widgets/header/Header'

const meta = {
  title: 'widgets/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Кастомный компонент',
      },
    },
  },
  args: {},
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const HeaderWebApp: Story = {
  render: () => {
    return <Header />
  },
}
