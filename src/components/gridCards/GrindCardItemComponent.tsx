import * as React from 'react';
import { makeStyles, createStyles } from '@mui/styles'

import CardMedia from "@mui/material/CardMedia";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export interface GridCardItemComponentProps {
    srcVideo?: string | null
    id: number,
    alt: string,
    srcImg: string,
}

const GridCardItemComponent: React.FC<GridCardItemComponentProps> = props => {
    const { id, srcImg, alt, srcVideo } = props
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles()

    return (
        <>
            <CardMedia
                component="img"
                className={classes.media}
                src={srcImg}
                alt={alt}
                loading="lazy"
                onClick={handleOpen}
            />
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box className={classes.box}>
                    {srcVideo ? 
                        <object className={classes.box} data={srcVideo}></object>
                        :
                        <img className={classes.box} src={srcImg} alt={alt} />
                    }
                </Box>
            </Modal>
        </>
    )
}

const useStyles = makeStyles(
    createStyles({
        box: {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: 690,
            maxHeight: 400,
        },
        media: {
            maxWidth: 345,
            maxHeight: 200,
            height: "100px"
        }
    })
)

export default GridCardItemComponent
