// 身分驗證相關資料

import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { createContext, useContext, ReactNode } from "react"

type AuthContext = {}

const Context = createContext<AuthContext | null>(null)

export function useAuth() {
  return useContext(Context)
}

type AuthorProvierProps = {
  children: ReactNode
}

type User = {
  id: string
  name: string
  image?: string
}

export function AuthorProvier({ children }: AuthorProvierProps) {
  // 註冊API
  const signup = useMutation({
    mutationFn: (user: User) => {
      return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, user)
    },
  })

  return <Context.Provider value={{}}>{children}</Context.Provider>
}
