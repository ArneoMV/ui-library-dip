import React from 'react';
import '../../../styles/scss/abstract/_typo.scss';


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

export const Paragraf = ({ size, color, uppercase, lowercase, link, type, disabled, mark, code, keyboard, underline, delete: deleteText, strong, italic, primary, children }) => {
  const baseClassName = 'paragraph';
  const textTransform = uppercase ? 'uppercase' : lowercase ? 'lowercase' : 'none';


  let className = baseClassName;

  if (type) {
    className += ` ${baseClassName}-${type}`;
  }
  if (type) {
    className += ` ${baseClassName}-${type}`;
  }

  if (disabled) {
    className += ` ${baseClassName}-disabled`;
  }

  if (mark) {
    className += ` ${baseClassName}-mark`;
  }

  if (code) {
    className += ` ${baseClassName}-code`;
  }

  if (keyboard) {
    className += ` ${baseClassName}-keyboard`;
  }

  if (underline) {
    className += ` ${baseClassName}-underline`;
  }

  if (deleteText) {
    className += ` ${baseClassName}-delete`;
  }

  if (strong) {
    className += ` ${baseClassName}-strong`;
  }

  if (italic) {
    className += ` ${baseClassName}-italic`;
  }

  return link ? (
    <a href={link} className={className}>
      {children}
    </a>
  ) : (
    <p className={className}>
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
    <a href={link} className={className}>
      {children}
    </a>
  ) : (
    <button className={className}>
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

  return <span className={finalClassName}>{children}</span>;
};

export const Link = ({ href, target, color, uppercase, lowercase, className, children }) => {
  const finalClassName = `typo link ${className || ''}`;
  const textTransform = uppercase ? 'uppercase' : lowercase ? 'lowercase' : 'none';

  const style = {
    color: color ? `var(--${color})` : 'inherit',
    textTransform,
  };

  return (
    <a href={href} target={target} className={finalClassName}>
      {children}
    </a>
  );
};
