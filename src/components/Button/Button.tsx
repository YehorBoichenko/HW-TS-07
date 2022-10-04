
import React from 'react';
import style from '../Button/Button.module.css';

export const Button = ({
  text,
  onClick,
}: {
  text: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}): JSX.Element => {
  return (
    <button className={style.button} type="button" onClick={onClick}>
      {text}
    </button>
  );
};



