import React from 'react'

export default function Signup() {

  const onChangeName = () => {

  }

  const onChangePwd = () => {

  }

  return (
    <>
      <div>Signup</div>
      <div>
        <form >
          <div>
            <label htmlFor="name">Username: </label>
            <input type="name" id="name" name="name" placeholder="username" onChange={onChangeName} required />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" placeholder="password" onChange={onChangePwd} required />
          </div>
        </form>
      </div>
    </>
  )
}
