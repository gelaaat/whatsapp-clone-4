import React from 'react'
import { Switch } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode';

function SwitchDarkMode() {
  const darkMode = useDarkMode(true);

  return (
    <Switch
        checked={darkMode.value}
        onChange={() => darkMode.toggle()}
      />
  )
}

export default SwitchDarkMode