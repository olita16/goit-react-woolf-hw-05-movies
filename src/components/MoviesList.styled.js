import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

export const StyledMovieLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  color: black;
`;

export const StyledLi = styled.li`
  display: flex;
  flex-flow: column;
  width: 185px;
`;