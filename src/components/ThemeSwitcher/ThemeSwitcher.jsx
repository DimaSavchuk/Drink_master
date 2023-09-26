import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { useState } from 'react';
import { useTheme } from '../../Hooks/useTheme';

const Switcher = withStyles({
  root: {
    width: 40,
    height: 20,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 1,
    color: 'rgba(243, 243, 243, 1)',
    '&$checked': {
      transform: 'translateX(20px)',
      color: '#161F37',
      '& + $track': {
        opacity: 1,
        backgroundColor: '#F3F3F3',
      },
    },
  },
  thumb: {
    width: 18,
    height: 18,
    boxShadow: '1px 1px 2px 0px rgba(0, 0, 0, 0.10) inset',
  },
  track: {
    borderRadius: 12,
    opacity: 1,
    backgroundColor: '#161F37',
    color: 'rgba(243, 243, 243, 1)',
  },
  checked: {},
})(Switch);

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  const [state, setState] = useState(theme === 'light' ? false : true);

  const handleChange = () => {
    setState(!state);
    if (state === true) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return <Switcher checked={state} onChange={handleChange} name="switcher" />;
};
