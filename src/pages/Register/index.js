import React, { useState } from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBeer } from '../../store/actions'

function Register () {
  let navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState()
  const dispatch = useDispatch()

  const handleChangeTitle = event => {
    setTitle(event.target.value)
  }

  const handleChangeDescription = event => {
    setDescription(event.target.value)
  }

  const handleSubmit = event => {
    dispatch(addBeer(title, description))
    navigate('/')
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='formContainer'>
        <div className='itens'>
          <div className='divInputs'>
            <label className='labels'>Título</label>
            <input
              className='inputs'
              value={title}
              onChange={handleChangeTitle}
              type='text'
            />
          </div>
          <div className='divInputs'>
            <label className='labels'>Descrição</label>
            <input
              className='inputs'
              value={description}
              onChange={handleChangeDescription}
              type='text'
            />
          </div>
          <div className='divBtn'>
            <button className='btnSubmit'>Salvar</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
