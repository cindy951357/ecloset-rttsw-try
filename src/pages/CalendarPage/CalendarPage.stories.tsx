import { Meta, Story } from '@storybook/react';
import { CalendarPage, Props } from './CalendarPage';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta = {
  title: 'Page/CalendarPage',
  component: CalendarPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/calendar',
    }
  }
};

export default meta;

const Template: Story<Props> = (args) => <CalendarPage {...args} />;

export const Default = Template.bind({});
