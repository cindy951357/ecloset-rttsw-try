import { Meta, Story } from '@storybook/react';
import { ViewClosetPage, Props } from './ViewClosetPage';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta = {
  title: 'Page/ViewClosetPage',
  component: ClosetPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/closet',
    }
  }
};

export default meta;

const Template: Story<Props> = (args) => <ViewClosetPage {...args} />;

export const Default = Template.bind({});