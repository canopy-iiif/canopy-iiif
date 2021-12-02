import * as React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
