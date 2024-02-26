import React from 'react'

const LangunageContext = React.createContext({
  activeLanguage: 'EN',
  changeLanguage: () => {},
})

export default LangunageContext
