import React from 'react';
import { NextUIProvider, createTheme } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode';

const lightTheme = createTheme({
  type: 'light'
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#3F3F46'
  }
  }
})



function StyleWrapper({ children }) {
  const darkMode = useDarkMode(true)


  console.log(darkMode)
  return (
    <NextUIProvider theme={darkTheme.value ? darkTheme : lightTheme}>
      {children}
    </NextUIProvider>
  );
}

export default StyleWrapper

