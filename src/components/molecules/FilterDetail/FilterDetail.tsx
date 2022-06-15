import { Grid, Typography } from '@mui/material';
import React from 'react'

interface FilterDetailProps {

}

export const FilterDetail: React.FC<FilterDetailProps> = ({}) => {
        return (
            <Grid>
                <Grid>
                    <Typography component={"p"}>Filter</Typography>
                </Grid>
            </Grid>
        );
}