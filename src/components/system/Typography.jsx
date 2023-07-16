import React from 'react';
import '../../styles/scss/abstract/_typo.scss';


export const Title = ({ level, color, uppercase, lowercase, link, children }) => {
  const HeadingTag = `h${level}`;
  const className = `typo title-${level}`;
  const textTransform = uppercase ? 'uppercase' : lowercase ? 'lowercase' : 'none';

  const style = {
    color: color ? `var(--${color})` : 'inherit',
    textTransform,
  };

  return link ? (
    <a href={link} className={className} style={style}>
      {children}
    </a>
  ) : (
    <HeadingTag className={className} style={style}>
      {children}
    </HeadingTag>
  );
};

export const Paragraf = ({ size, color, uppercase, lowercase, link, children }) => {
  const className = 'typo paragraph';
  const textTransform = uppercase ? 'uppercase' : lowercase ? 'lowercase' : 'none';

  const style = {
    fontSize: size || 'inherit',
    fontWeight: 'var(--text-thickness)',
    textTransform,
    color: color ? `var(--${color})` : 'inherit',
  };

  return link ? (
    <a href={link} className={className} style={style}>
      {children}
    </a>
  ) : (
    <p className={className} style={style}>
      {children}
    </p>
  );
};

export const Button = ({ color, uppercase, lowercase, link, children }) => {
  const className = 'typo button';
  const textTransform = uppercase ? 'uppercase' : lowercase ? 'lowercase' : 'none';

  const style = {
    color: color ? `var(--${color})` : 'inherit',
    textTransform,
  };

  return link ? (
    <a href={link} className={className} style={style}>
      {children}
    </a>
  ) : (
    <button className={className} style={style}>
      {children}
    </button>
  );
};

export const Caption = ({ color, uppercase, lowercase, className, children }) => {
  const finalClassName = `typo caption ${className || ''}`;
  const textTransform = uppercase ? 'uppercase' : lowercase ? 'lowercase' : 'none';

  const style = {
    color: color ? `var(--${color})` : 'inherit',
    textTransform,
  };

  return <span className={finalClassName} style={style}>{children}</span>;
};