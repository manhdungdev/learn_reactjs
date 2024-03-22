import React, { createContext, useCallback, useContext, useDebugValue, useId, useMemo, useState } from 'react'
import './welcome.scss'
const ThemeContext = createContext<WelcomeType>({
  theme: {
    color: 'light'
  },
  onChangeTheme: () => {}
})
type WelcomeType = {
  theme: {
    color: 'light' | 'dark'
  }
  onChangeTheme: (color: 'light' | 'dark') => void
}

const useTheme = () => {
  const [theme, setTheme] = useState<WelcomeType['theme']>({ color: 'light' })

  const onChangeTheme = useCallback((color: WelcomeType['theme']['color']) => {
    setTheme((prev) => ({ ...prev, color }))
  }, [])

  const doTask = (value: any) => {
    for (let i = 0; i < 10000; i++) {}
    return value === 'light' ? 'theme is light' : 'theme is dark'
  }

  useDebugValue(theme.color, doTask)

  return {
    theme,
    onChangeTheme
  }
}

export default function Welcome() {
  const { theme, onChangeTheme } = useTheme()
  const [, forceRender] = useState({})

  const valueContext = useMemo(() => {
    return {
      theme,
      onChangeTheme
    }
  }, [theme, onChangeTheme])

  const rerender = () => {
    forceRender({})
  }

  return (
    <div>
      <ThemeContext.Provider value={valueContext}>
        <Header />
        <Label />
      </ThemeContext.Provider>
      <button onClick={rerender}>Render</button>
    </div>
  )
}

const Header = () => {
  return (
    <div className='header'>
      <Panel title='Welcome to learn useContext'>
        <Button>Log in</Button>
        <Button>Log out</Button>
      </Panel>
    </div>
  )
}

const Panel = ({ title, children }: { title: string; children: any }) => {
  const { onChangeTheme, theme } = useContext(ThemeContext)
  return (
    <div className={`header--${theme.color}`}>
      <h2 className='header__title'>{title}</h2>
      {children}
    </div>
  )
}

const Button = ({ children }: { children: string }) => {
  const { theme } = useContext(ThemeContext)
  return <button className={`btn--${theme.color} btn`}>{children}</button>
}

const Label = React.memo(() => {
  const id = useId()
  const { theme, onChangeTheme } = useContext(ThemeContext)
  console.log('rerender')

  return (
    <div>
      <label htmlFor={id}>Change to {theme.color === 'light' ? 'dark' : 'light'} mode</label>
      <input
        id={id}
        checked={theme.color == 'dark'}
        type='checkbox'
        className='input'
        onChange={(e) => {
          onChangeTheme(e.target.checked ? 'dark' : 'light')
        }}
      />
    </div>
  )
})
