import React, { useCallback } from 'react';
import '../scss/TodoList.scss';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/all";
import cn from 'classnames';

const TodoList = ({todos, onRemove, onToggle}) => {

  const dataList = useCallback(() => {
    return todos.map(todo => {
        const {id, text, checked} = todo;
        return (
          <div className='TodoList' key={id}>
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
              {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
              <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
              <MdRemoveCircleOutline/>
            </div>
          </div>
        )
      }
    )
  }, [onRemove, onToggle, todos]);

  return (
    <>
      {dataList()}
    </>
  )
};

export default React.memo(TodoList);
