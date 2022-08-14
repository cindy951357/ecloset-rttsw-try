import { Meta, Story } from '@storybook/react';
import { ClosetPage, Props } from './ClosetPage';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta = {
  title: 'Page/ClosetPage',
  component: ClosetPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/closet',
    }
  }
};

export default meta;

const Template: Story<Props> = (args) => <ClosetPage {...args} />;

export const Default = Template.bind({});