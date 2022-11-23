import { Meta, Story } from '@storybook/react';
import { ViewOutfitPage } from './ViewOutfitPage';
import { withRouter } from 'storybook-addon-react-router-v6';


const meta: Meta = {
  title: 'Page/ViewOutfitPage',
  component: ViewOutfitPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/outfit',
    }
  }
}

export default meta;

const Template: Story = (args) => <ViewOutfitPage {...args} />

export const Default = Template.bind({});