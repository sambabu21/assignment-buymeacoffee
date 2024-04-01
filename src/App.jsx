
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Components/Home/Index'
import ManageUser from './Components/User/ManageUser'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import AuthRequired from './Layout/AuthRequired'
import { createContext, useState } from 'react'
import Feature from './Components/Feature'
import Faq from './Components/Faq'

const LoginContext = createContext()

function App() {
  
  const queryClient= new QueryClient()
  const [loginFailed,setLoginFailed] = useState(true)

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <LoginContext.Provider value={{loginFailed,setLoginFailed}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />}></Route>
              <Route path='/features' element={<Feature />}/>
              <Route element={<AuthRequired />}>
                <Route path="/users" element={<ManageUser />}/>
              </Route>
              <Route path='/faq' element={<Faq />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </QueryClientProvider>
  )
}

export {LoginContext}
export default App
