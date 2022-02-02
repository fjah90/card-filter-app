import React from "react";
import { makeStyles, createStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles'

import PropTypes from 'prop-types'

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import GridCardItemComponent from './GrindCardItemComponent'

export const GridCardItemPropTypes = {
    data: PropTypes.array.isRequired,
}

export type GridCardItemProps = PropTypes.InferProps<typeof GridCardItemPropTypes>

const GridCardItems: React.FC<GridCardItemProps> = props => {
    const { data } = props
    const classes = useStyles()

    const GridCardItemRoot = (
        data.map((item: any, index: number): JSX.Element => {
            return (
                <Grid key={index} item xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <GridCardItemComponent 
                            id={index}
                            alt={item.alt}
                            srcImg={item.srcImg}
                            srcVideo={item.srcVideo}
                        />
                    </Card>
                </Grid>
            );
        })
    )

    return (
        <>
            {GridCardItemRoot}
        </>

    );
}

const useStyles = makeStyles(
    createStyles({
        root: {
            maxWidth: 345,
            maxHeight: 345,
            cursor: "pointer"
        }
    })
)

export default GridCardItems