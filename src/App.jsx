
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Components/Home/Index'
import ManageUser from './Components/User/ManageUser'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

function App() {
  
  const queryClient= new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/users" element={<ManageUser />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
