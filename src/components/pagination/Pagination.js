import React from 'react'
import style from './pagination.module.css'

export default function Pagination({prev, next, page = 1}) {
  return (
	 <div className={style.manage_block}>
		<button onClick={prev}>Prev</button>
		<button>{page}</button>
		<button onClick={next}>Next</button>
	 </div>
  )
}
