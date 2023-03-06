import Home from 'container/pages/Home/Home'
import { Container } from '@mui/material'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container
            sx={{
                padding: '40px 0',
            }}
        >
            <Home />
        </Container>
    )
}
export default Main
