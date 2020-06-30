import React, { useState, useRef, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeLanguage } from './language.slice';
import { Languages } from '../../specs/language/languages';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import { Translate } from '@material-ui/icons';

export const LanguageSelector = () => {
  const [open, updateOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const anchorRef = useRef(null);

  return (
    <>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={() => updateOpen(true)} ref={anchorRef}>
        <Translate />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorRef.current} keepMounted open={open} onClose={() => updateOpen(false)}>
        {Languages.map((lang, i) => (
          <MenuItem
            value={lang}
            onClick={() => {
              dispatch(changeLanguage(lang));
              updateOpen(false);
            }}
            key={`drop-${i}`}
          >
            {lang}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
