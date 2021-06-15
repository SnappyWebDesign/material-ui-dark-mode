import React, { useContext, useEffect } from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"

import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import { darkTheme, lightTheme } from "./Theme"
import { darkModeContext } from "./ThemeHandler"

const Layout = ({ children, ft }) => {
  const DarkModeContext = useContext(darkModeContext)
  const { darkMode, setDarkMode } = DarkModeContext

  useEffect(() => {
    const theme = localStorage.getItem("preferred-theme")
    if (theme) {
      const themePreference = localStorage.getItem("preferred-theme")
      if (themePreference === "dark") {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    } else {
      localStorage.setItem("preferred-theme", "light")
      setDarkMode(true)
    }
    //eslint-disable-next-line
  }, [])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1rem 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
      </div>
      {(ft === "t" ? true : null) && (
        <footer
          style={{
            position: "absolute",
            bottom: 0,
            width: "100vw",
            maxWidth: "100%",
            padding: 0,
            margin: 0,
            backgroundColor: "#26a27b"
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginTop: "1em",
              color: "white",
              textDecoration: "none",
              marginBottom: "1em"
            }}
          >
            <a
              href="https://snappywebdesign.net/"
              style={{
                textDecoration: "none",
                color: "#FFF",
                paddingBottom: 3,
                borderBottom: `1px solid white`
              }}
            >
              via Snappy Web Design
            </a>
          </div>
        </footer>
      )}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  ft: PropTypes.string.isRequired
}
Layout.defaultProps = {
  ft: "t"
}
export default Layout
