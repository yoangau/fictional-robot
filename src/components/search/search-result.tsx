import React from 'react';
import { Button, Image } from 'react-bootstrap';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';

const Result = styled(Button)`
  padding: 5px;
  width: 100%;
  margin-top: 5px;
  border: 1px solid #ced4da;
  text-align: left;
`;

const ResultLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const ResultInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultImage = styled(Image)`
  display: flex;
  flex-direction: column;
  max-width: 25%;
  object-fit: cover;
  margin-right: 5px;
`;

const ResultTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const ResultDescription = styled.div`
  font-size: 10px;
`;

const ResultDate = styled.div`
  font-size: 8px;
`;

export interface SearchResultProps {
  title: string;
  description: string;
  date: string;
  img: string;
  onClick: () => void;
}

export const SearchResult = ({ title, description, onClick, date, img }: SearchResultProps) => (
  <Fade>
    <Result onClick={onClick} variant="light">
      <ResultLayout>
        <ResultImage src={img} fluid thumbnail />
        <ResultInfo>
          <ResultTitle>{title}</ResultTitle>
          <ResultDescription>{description.slice(0, Math.min(description.length, 100))}</ResultDescription>
          <ResultDate>{date}</ResultDate>
        </ResultInfo>
      </ResultLayout>
    </Result>
  </Fade>
);
