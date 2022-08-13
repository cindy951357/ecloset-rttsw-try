import { Meta, Story } from '@storybook/react';
import { OutfitPage } from './OutfitPage';
import { withRouter } from 'storybook-addon-react-router-v6';


const meta: Meta = {
  title: 'Page/OutfitPage',
  component: OutfitPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/outfit',
    }
  }
}

export default meta;

const Template: Story = (args) => <OutfitPage {...args} />

export const Default = Template.bind({});