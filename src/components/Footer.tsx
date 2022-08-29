import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <Container className="bg-dark text-muted d-flex align-items-center justify-content-center w-100" style={{height: "65px", minWidth: "100%"}}>
        <small>&copy; 2022 Julian Goldbach</small>
    </Container>
  )
}

export default Footer