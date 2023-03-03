import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'
import CssBaseline from '@mui/material/CssBaseline'

type Props = {}
const App = (props: Props) => {
    return (
        <div>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}
export default App
