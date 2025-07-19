import React from 'react'
import { useState } from 'react'

function GlobalState({children}) { 

    const [searchParam, setSearchParam] = useState("");
    const

  return (
    <GlobalContext.Provider
        value = {{
            searchParam,
            loading,
            recipeList,
            setSearchParam,
            handleSubmit,
            recipeDetailsData,
            setRecipeDetailsData,
            handleAddToFavorite,
            favoritesList
        }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
