import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import React from 'react'

const SearchBar = ({onChange, onSubmit}) => {

  return (
    <form action="" onSubmit={onSubmit}>
        <input
            type="text"
            placeholder='Search...'
            required
            onChange={onChange} />
    </form>
  )
}

export default SearchBar;