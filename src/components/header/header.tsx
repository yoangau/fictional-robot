import React from 'react';
import { Search } from '../search/search';
import { useHistory } from 'react-router-dom';
import { LanguageSelector } from '../language/language-selector';
import { aboutHeaderSource } from '../../specs/about/about';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../language/language.slice';
import { AppBar, Toolbar, IconButton, Typography, InputBase, makeStyles, fade } from '@material-ui/core';
import { Favorite, SearchRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const Header = () => {
  const classes = useStyles();
  const language = useSelector(selectLanguage);
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
          <Favorite />
        </IconButton>
        <Typography className={classes.title} variant="button" noWrap>
          Material-UI
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchRounded />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
    // <Navbar bg="light" expand="lg">
    //   <Navbar.Brand>
    //     <Button onClick={handleClick} variant="dark">
    //       <FontAwesomeIcon icon={faHeart} />
    //     </Button>
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link onClick={() => history.push('about')} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    //         {aboutHeaderSource[language]}
    //       </Nav.Link>
    //       <LanguageSelector />
    //     </Nav>
    //     <Search />
    //   </Navbar.Collapse>
    // </Navbar>
  );
};
