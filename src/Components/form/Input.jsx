import React from 'react';

const Input = ({divStyle, inputStyle, label, id, type}) => {
  return (
    <div className={`${divStyle}`}>
      <label htmlFor='' className='text-gray-700'>{label}</label>
      <input id={id} type={type} className={`${inputStyle} inputStyle`} />
    </div>
  )
}

export default Input;