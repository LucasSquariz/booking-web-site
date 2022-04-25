import React, { useState, useEffect } from "react"

export const ProdutoContext = React.createContext({})

export const ProdutoProvider = (props) => {
  const [produto, setProduto] = useState({})

  useEffect(() => {
    const produtoStorage = localStorage.getItem("produto")
    if (produtoStorage) {
      setProduto(JSON.parse(produtoStorage))
    } else {
      setProduto({})
    }
  }, [])
  
  return (
    <ProdutoContext.Provider value={{produto, setProduto}}>
      {props.children}
    </ProdutoContext.Provider>
  )
}

export const useProduto = () => React.useContext(ProdutoContext)

