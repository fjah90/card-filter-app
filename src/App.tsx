// import React, { useState } from 'react'
import clsx from 'clsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { createTheme  } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'


import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import Menu from './components/menu/Menu'
import GridCards from './components/gridCards/GridCards'

const PageDashboard = () => <Typography variant="h3" component="h1">Dashboard Page</Typography>
const PageCards = () => <GridCards />
const PageNotFound = () => <Typography variant="h3" component="h1">Page not found 404</Typography>

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={clsx('App', classes.root)}>
        <CssBaseline />
        <Menu />
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>

            <Routes>
              <Route path="/" element={PageDashboard()} />
              <Route path="/cards" element={PageCards()} />
              <Route path="*" element={PageNotFound()} />
            </Routes>

          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}

const theme = createTheme({
  spacing: 4,
});


const useStyles = makeStyles(({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default App
