import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ShopContextProvider from './Context/ShopContext.tsx'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <QueryClientProvider client={queryClient} >
    <ShopContextProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </ShopContextProvider>
    </QueryClientProvider>
    
  </React.StrictMode>,
)
