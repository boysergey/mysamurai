import React from "react"
import s from './Input.module.css';

const Input = () => {
  return (
    <div>
      <div className={s.search}>
        <form>
          <input className={s.input} type="text" placeholder="Искать здесь..." />
          <button type="submit">search</button>
        </form>
      </div>
    </div>
  );
};
export default Input;

