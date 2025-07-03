import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from '../ui';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    children: 'simple',
    isDisabled: false
  }
}

export const Small: Story = {
  args: {
    children: 'small',
    size: 'small',
    isDisabled: false
  }
}

export const Medium: Story = {
  args: {
    children: 'medium',
    size: 'medium',
    isDisabled: false
  }
}

export const Large: Story = {
  args: {
    children: 'large',
    size: 'large',
    isDisabled: false
  }
}

export const Primary: Story = {
  args: {
    children: 'primary',
    variant: 'primary',
    isDisabled: false
  }
}

export const Success: Story = {
  args: {
    children: 'success',
    variant: 'success',
    isDisabled: false
  }
}

export const Error: Story = {
  args: {
    children: 'error',
    variant: 'error',
    isDisabled: false
  }
}

export const Disabled: Story = {
  args: {
    children: 'disabled',
    isDisabled: true
  }
}

export const WithClickHandler: StoryObj<typeof Button> = {
  args: {
    children: 'with click',
    onClick: () => alert('click')
  }
}
