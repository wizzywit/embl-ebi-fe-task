import React from 'react';
import * as StyledComponents from './button.styles';

interface OwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = ({ children, ...rest }: OwnProps) => {
  return (
    <StyledComponents.Button {...rest}>{children}</StyledComponents.Button>
  );
};

export default Button;
