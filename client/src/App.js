import React, { useEffect, useState } from 'react'
import Routes from './components/Routes'
import { UidContext } from './components/AppContext'
import axios from 'axios'

export default function App() {
  const [uid, setUid] = useState(null)

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => 
          {
            //console.log(res)
            setUid(res.data)
          })
        .catch((err) => console.log('No token found'))
    };
    fetchToken();
  }, [uid]) // []<---- named callbacks for avoid circular dependency issues
  // [uid] => refresh value for uid

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  )
}