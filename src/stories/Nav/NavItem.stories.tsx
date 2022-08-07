import { Meta, Story } from '@storybook/react';
import { NavItem, Props } from './../../components/NavItem/NavItem';

const meta: Meta = {
  title: 'NavItem',
  component: NavItem,
}

export default meta;

export const Default = () =>
  <NavItem variant={'first-layer'}
    active={false}
    text={'Click Me'}
  >
    Click Me!
  </NavItem>

export const SecondLayer = () =>
  <NavItem variant={'second-layer'}
    active={false}
    text={'Click Me!!'}
  >
    Clickk ME!!!
  </NavItem>


// export default {
//   title: 'Example/NavItem',
//   component: NavItem,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };

// const Template = (args) => <NavItem {...args} />;

// export const Primary: Story = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'NavItem',
// };

// export const Secondary: Story = Template.bind({});
// Secondary.args = {
//   label: 'NavItem',
// };

// export const Large: Story = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'NavItem',
// };

// export const Small: Story = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'NavItem',
// };
