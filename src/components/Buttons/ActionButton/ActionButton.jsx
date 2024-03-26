import React from 'react';
import { useDispatch } from 'react-redux';

function ActionButton(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    // Determine the action type based on the prop passed
    const actionType =
      props.type === 'back' ? 'NAVIGATE_BACK' : 'NAVIGATE_NEXT';
    dispatch({ type: actionType });
  };

  return (
    <button
      // The className is passed to it from its parent through React props
      className={props.className}
      onClick={handleClick}
    >
      {props.type === 'back' ? 'Back' : 'Next'}
    </button>
  );
}

export default ActionButton;
