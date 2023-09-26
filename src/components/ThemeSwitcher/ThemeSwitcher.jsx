// import { withStyles } from '@material-ui/core/styles';
// import Switch from '@material-ui/core/Switch';
// import { useState } from 'react';
// import { useTheme } from '../../Hooks/useTheme';

// const Switcher = withStyles({
//   root: {
//     width: 40,
//     height: 20,
//     padding: 0,
//     display: 'flex',
//   },
//   switchBase: {
//     padding: 1,
//     color: 'rgba(243, 243, 243, 1)',
//     '&$checked': {
//       transform: 'translateX(20px)',
//       color: '#161F37',
//       '& + $track': {
//         opacity: 1,
//         backgroundColor: '#F3F3F3',
//       },
//     },
//   },
//   thumb: {
//     width: 18,
//     height: 18,
//     boxShadow: '1px 1px 2px 0px rgba(0, 0, 0, 0.10) inset',
//   },
//   track: {
//     borderRadius: 12,
//     opacity: 1,
//     backgroundColor: '#161F37',
//     color: 'rgba(243, 243, 243, 1)',
//   },
//   checked: {},
// })(Switch);

// export const ThemeSwitcher = () => {
//   const { setTheme, theme } = useTheme();
//   const [state, setState] = useState(theme === 'light' ? false : true);

//   const handleChange = () => {
//     setState(!state);
//     if (state === true) {
//       setTheme('light');
//     } else {
//       setTheme('dark');
//     }
//   };

//   return <Switcher checked={state} onChange={handleChange} name="switcher" />;
// };

import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 18,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 1,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

export default function Switcher() {
  return (
    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
  );
}
