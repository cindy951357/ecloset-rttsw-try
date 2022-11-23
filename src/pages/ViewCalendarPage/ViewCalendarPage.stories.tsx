import { Meta, Story } from '@storybook/react';
import { ViewCalendarPage, Props } from './ViewCalendarPage';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta = {
  title: 'Page/ViewCalendarPage',
  component: ViewCalendarPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/calendar',
    }
  }
};

export default meta;

const Template: Story<Props> = (args) => <ViewCalendarPage {...args} />;

export const Default = Template.bind({});
