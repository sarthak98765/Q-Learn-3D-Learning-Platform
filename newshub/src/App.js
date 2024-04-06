import React from 'react'
import Search from './Search'
import Pagination from './Pagination'
import Stories from './Stories'
import './App.css'

const App = () => {
 
  return (
    <>
    <div className='title' >Q_Learn</div>
    <Search/>
    <Pagination/>
    <Stories/>
    </>
  )
}

export default App