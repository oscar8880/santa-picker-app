import React from 'react';

import Text from './Text';

export default {
  component: Text,
  title: 'Text',
  argTypes: {
    appearance: {
      control: {
        type: 'inline-radio',
        options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'banner'],
      },
    },
    tagName: {
      control: {
        type: 'inline-radio',
        options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'],
      },
    },
    textExample: {
      control: {
        type: 'inline-radio',
        options: ['Title', 'Sentence', 'Paragraph'],
      },
    },
    children: { control: 'none' },
  },
};

export const Default = (args) => {
  const { textExample } = args;

  const getTextExample = (option) => {
    switch (option) {
      case 'Title':
        return 'Example Title';
      case 'Sentence':
        return 'Adipiscing integer tristique habitant eu porttitor egestas sapien dictum fermentum.';
      case 'Paragraph':
        return 'Proin purus blandit in. Torquent molestie tristique condimentum ac, felis neque! Netus imperdiet tempus in erat suscipit sapien enim arcu pellentesque. Libero semper neque metus consectetur semper magna hac, ullamcorper fringilla ut quam. Dis mauris conubia tristique, integer porta torquent semper venenatis varius tortor malesuada. Pharetra torquent porttitor, vulputate purus gravida! Iaculis phasellus vehicula, ullamcorper blandit nullam suscipit magna dapibus viverra.';
      default:
        return 'Example Title';
    }
  };

  return (
    <>
      <Text {...args}>{getTextExample(textExample)}</Text>
    </>
  );
};
