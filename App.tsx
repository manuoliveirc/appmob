import { Login } from './src/screens/Login';
import { Page2 } from './src/screens/Page2';
import { Page3 } from './src/screens/Page3';
import { Dispatch, SetStateAction, useState } from 'react'

export interface IPagina {
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)

  if (page == 1) {
    return <Login setPageI={setPage} />
  } else if (page == 2) {
    return <Page2 setPageI={setPage} />
  } else {
    return <Page3 setPageI={setPage} />
  }
}