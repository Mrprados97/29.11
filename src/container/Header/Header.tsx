import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import './Header.css'
import Logo from 'components/Logo/Logo'

type Props = {}
const Header = (props: Props) => {
    const home = false
    return (
        <AppBar
            position="static"
            className="app-bar"
            sx={{
                backgroundColor: 'green',
            }}
        >
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />

                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Payment</Button>
                    <Button color="inherit">Shipping</Button>
                    <Button color="inherit">Cart</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
