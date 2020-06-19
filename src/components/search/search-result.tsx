import React from 'react';
import { Button } from 'react-bootstrap';

export interface SearchResultProps {
  title: string;
  description: string;
  date: string;
  onClick: () => void;
}

export const SearchResult = ({ title, description, onClick, date }: SearchResultProps) => (
  <Button style={{ padding: '5px', width: '100%', marginTop: '5px' }} onClick={onClick} variant="dark">
    <div style={{ fontSize: '12px' }}>{title}</div>
    <div style={{ fontSize: '10px' }}>{description.slice(0, Math.min(description.length, 100))}</div>
    <div style={{ fontSize: '8px' }}>{date}</div>
  </Button>
);
