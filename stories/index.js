import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import MadeWithLove from '../src/MadeWithLove';

import codeIcon from '../assets/code.svg';
import heartIcon from '../assets/heart.svg';

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
  .add('Icon Message', () => {
    const icons = {
      verb: codeIcon,
      using: heartIcon
    };
   return <MadeWithLove icons={icons}/>
  })
  .add('Icon Message with only code icon', () => {
    const icons = {
      verb: codeIcon
    };
   return <MadeWithLove icons={icons}/>
  })
  .add('Icon Message with only heart icon', () => {
    const icons = {
      using: heartIcon
    };
   return <MadeWithLove icons={icons}/>
  })
  .add('Icon Message with linked author', () => {
    const icons = {
      using: heartIcon
    };
   return <MadeWithLove icons={icons}  by="Chris Gregori" link="http://www.chrisgregori.co.uk"/>
  })
  .add('Coloured Icon Message with linked author', () => {
    const icons = {
      using: heartIcon
    };
    const style = {
      color: 'red'
    }
   return <MadeWithLove style={style} icons={icons}  by="Chris Gregori" link="http://www.chrisgregori.co.uk"/>
  })
