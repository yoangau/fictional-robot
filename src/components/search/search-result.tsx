import React from 'react';
import { Button } from 'react-bootstrap';
// @ts-ignore
import Fade from 'react-reveal/Fade';

export interface SearchResultProps {
  title: string;
  description: string;
  date: string;
  onClick: () => void;
}

export const SearchResult = ({ title, description, onClick, date }: SearchResultProps) => (
  <Fade>
    <Button
      style={{ padding: '5px', width: '100%', marginTop: '5px', border: '1px solid #ced4da', textAlign: 'left' }}
      onClick={onClick}
      variant="light"
    >
      <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{title}</div>
      <div style={{ fontSize: '10px' }}>{description.slice(0, Math.min(description.length, 100))}</div>
      <div style={{ fontSize: '8px' }}>{date}</div>
    </Button>
  </Fade>
);
