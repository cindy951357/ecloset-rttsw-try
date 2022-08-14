import { Meta, Story } from '@storybook/react';
import { NavItem, Props } from './../../components/NavItem/NavItem';

const meta: Meta = {
  title: 'NavItem',
  component: NavItem,
  argTypes: {
    children: {
      defaultValue: 'Default Text'
    }
  }
}

export default meta;

const Template: Story<Props> = (args) => <NavItem {...args} />

export const Default = Template.bind({});

export const SecondLayer = Template.bind({})

SecondLayer.args = {
  variant: 'second-layer',
}