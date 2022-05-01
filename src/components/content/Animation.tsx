import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Transition from './Transition';
import AnimationKeyFrame from './AnimationKeyFrame';

const ANIMATION_CONST = { TRANSIION: 0, ANIMATION_FRAME: 1 } as const;
type ANIMATION_TYPE = typeof ANIMATION_CONST[keyof typeof ANIMATION_CONST];

const Animation: React.FunctionComponent = () => {
  const [value, setValue] = useState<ANIMATION_TYPE>(ANIMATION_CONST.TRANSIION);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: ANIMATION_TYPE,
  ) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}></Box>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{ position: 'sticky', top: 200, zIndex: 1, background: '#fcc2d7' }}
      >
        <Tab label="Transition" id="transition" />
        <Tab label="Animation-Frame" id="animation-frame" />
      </Tabs>
      {value === ANIMATION_CONST.TRANSIION && <Transition />}
      {value === ANIMATION_CONST.ANIMATION_FRAME && <AnimationKeyFrame />}
    </Box>
  );
};

export default Animation;
