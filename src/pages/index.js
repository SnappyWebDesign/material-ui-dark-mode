import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/UI/Layout"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { darkModeContext } from "../components/UI/ThemeHandler"

const IndexPage = () => {
  const DarkModeContext = useContext(darkModeContext)
  const { darkMode, setDarkMode } = DarkModeContext

  const handleThemeChange = () => {
    if (darkMode) {
      localStorage.setItem("preferred-theme", "light")
      setDarkMode(false)
    } else {
      localStorage.setItem("preferred-theme", "dark")
      setDarkMode(true)
    }
  }

  return (
    <Layout>
      <Grid
        item
        xs={6}
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: "2.5em" }}
      >
        <Typography variant="h6" align="center">
          Gatsby Material-UI Dark Mode Demonstration
        </Typography>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ marginTop: "2.5em" }}
      >
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={handleThemeChange}
        >
          Toggle {darkMode ? "Light" : "Dark"} Theme
        </Button>
      </Grid>
    </Layout>
  )
}

export default IndexPage
