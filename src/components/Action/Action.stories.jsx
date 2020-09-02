import React from 'react';
import { MemoryRouter } from 'react-router';
import Action from './Action';

export default {
  component: Action,
  title: 'Action',
  argTypes: {
    appearance: {
      control: {
        type: 'inline-radio',
        options: [
          'button-primary',
          'button-secondary',
          'button-primary-outline',
          'button-secondary-outline',
          'a',
          'none',
        ],
      },
    },
    tagName: {
      control: {
        type: 'inline-radio',
        options: ['button', 'a', 'Link'],
      },
    },
    children: { control: 'none' },
  },
};

export const Default = (args) => {
  return (
    <>
      <MemoryRouter>
        <Action {...args}>Click me</Action>
      </MemoryRouter>
    </>
  );
};
