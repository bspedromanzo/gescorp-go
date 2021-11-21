import React, { useState, useEffect, useMemo } from 'react'
import './list.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllList } from '../../store/selectors'
import { deleteBeer } from '../../store/actions'

const List = () => {
  const getList = useSelector(selectAllList)
  const [search, setSearch] = useState('')
  const [filterSearch, setFilterSearch] = useState(false)
  const dispatch = useDispatch()

  const filter = useMemo(() => {
    const nome = getList.filter(item =>
      item.name.toLowerCase().startsWith(search.toLowerCase())
    )
    return getList.filter(item =>
      item.name.toLowerCase().startsWith(search.toLowerCase())
    )
  })

  const handleDelete = id => {
    dispatch(deleteBeer(id))
  }
  return (
    <div className='container'>
      <div className='seach'>
        <input
          className='inputSeach'
          placeholder='Pesquisar'
          onChange={ev => setSearch(ev.target.value)}
          value={search}
          onClick={() => setFilterSearch(true)}
          onBlur={() => setFilterSearch(false)}
        />
      </div>
      {filterSearch && (
        <div className='seachResult'>
          <div className='result'>
            {filter.map((item, key) => {
              return (
                <>
                  <br />
                  <span key={key} className='nameSearch'>
                    {item.name}
                  </span>
                  <br />
                  <span className='descriptionSearch'>{item.description}</span>
                  <br />
                </>
              )
            })}
          </div>
        </div>
      )}

      <div className='containerDiv'>
        {getList.map(item => (
          <div className='divItens' key={item.id}>
            <button className='close' onClick={() => handleDelete(item.id)}>
              X
            </button>
            <div className='containerImage'>
              <div className='photoContainer'>
                <div>
                  <img className='photo' src={item.image_url} />
                </div>
              </div>
            </div>
            <div className='containerDetails'>
              <div className='title'>{item.name}</div>
              <div className='description'>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
