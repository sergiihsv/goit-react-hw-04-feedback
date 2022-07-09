import propTypes from 'prop-types';
import { Box, Title } from './SectionStyled';

export const Section = ({ title, children }) => {
  return (
    <Box>
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};
