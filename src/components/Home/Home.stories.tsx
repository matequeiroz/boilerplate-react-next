import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Home } from './Home'

export default {
  title: 'Home',
  component: Home
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {
  title: 'React Avançado',
  description: 'React, Next, Styled-Components e TypeScript'
}
