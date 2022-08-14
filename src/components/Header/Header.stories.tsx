import { Meta, Story } from '@storybook/react';
import { Header, Props } from '../Header/Header';

const meta: Meta = {
  title: 'Header',
  component: Header,
  argTypes: {
    children: {
      defaultValue: 'Default Text'
    }
  }
}

export default meta;

const Template: Story<Props> = (args) => <Header {...args} />

export const Default = Template.bind({});
