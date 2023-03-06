import { Typography, Grid } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                }}
            >
                List Of Products
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <ProductListItem title="Iphone 14 Pro" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ProductListItem title="Iphone 13 Pro" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ProductListItem title="Iphone 12 Pro" />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductList
