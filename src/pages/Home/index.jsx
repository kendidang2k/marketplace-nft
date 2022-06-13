import { Grid, Typography } from '@mui/material'
import ConnectWalletModal from 'components/organisms/ConnectWalletModal/ConnectWalletModal';
import GlobalModal from 'components/organisms/GlobalModal/GlobalModal'
import Header from 'components/organisms/Header/Header'
import { Navbar } from 'components/organisms/Navbar/Navbar';
import useAccount from 'hooks/useAccount';
import React, { useEffect } from 'react'


export default function Home() {

    useEffect(() => {
        GlobalModal.show(<ConnectWalletModal onClose={GlobalModal.hide} />);
    }, []);
    const account = useAccount();

    return (
        <Grid>
            <Grid container sx={{ backgroundColor: '#13161b', height: '100vh' }}>
                <Grid item xs={12} md={4} sx={{height: '100%'}}>
                    <Navbar />
                </Grid>
                <Grid item xs={12} md={8} sx={{ maxWidth: { xs: '375px', sm: '650px', md: '1350px', lg: '1850px' }, margin: 'auto', height: '1500px' }}>
                    <Typography
                        component={"span"}
                        sx={{ color: "#fd936d", fontWeight: "bold", fontSize: "30px" }}
                    >
                        MarketPlace
                    </Typography>
                </Grid>
                <GlobalModal />
                Hello world !!!
                <p>Your address is {account}</p>
            </Grid>
        </Grid>
    )
}
