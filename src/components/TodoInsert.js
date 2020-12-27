import React, { useState, useCallback } from 'react';
import '../scss/TodoInsert.scss';
import { MdAdd } from "react-icons/all";

const TodoInsert = ({onInsert}) => {

  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, [])

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  }, [onInsert, value]);

  return (
    <div>
      <form className='TodoInsert' onSubmit={onSubmit}>
        <input onChange={onChange} value={value} placeholder='할 일을 입력하세요'/>
        <button type='submit'>
          <MdAdd/>
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
