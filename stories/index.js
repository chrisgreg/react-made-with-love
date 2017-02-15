import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import MadeWithLove from '../src/MadeWithLove';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));


storiesOf('MadeWithLove', module)
  .add('Base Message', () => {
   return <MadeWithLove />
  })
  .add('Base Message with emojis', () => {
   return <MadeWithLove emoji />
  })
  .add('Base Message with author', () => {
   return <MadeWithLove by="Chris Gregori"/>
  })
  .add('Base Message with linked author', () => {
   return <MadeWithLove by="Chris Gregori" link="http://www.chrisgregori.co.uk" />
  })
