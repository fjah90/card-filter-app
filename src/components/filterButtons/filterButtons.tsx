import React from "react";
import Button from "@mui/material/Button";
import { makeStyles, createStyles } from '@mui/styles'

import Data from "assets/dummy/data";


export interface ButtonsProps {
    filterItem?: any,
    setItem?: any,
    menuItems?: any
}

const Buttons: React.FC<ButtonsProps> = props => {
    const { filterItem, setItem, menuItems } = props
    const classes = useStyles()

    return (
        <>
            {menuItems.map((item:any, index:number) => {
                return (
                    <Button
                        size="small"
                        variant="outlined"
                        onClick={() => filterItem(item)}
                        key={index}a
                        className={button}
                    >
                        {item}
                    </Button>
                );
            })}
            <Button
                size="small"
                variant="outlined"
                onClick={() => setItem(Data)}
                className={button}
            >
                Todos
            </Button>
        </>
    );
};

const useStyles = makeStyles(
    createStyles({
        button: {
            border: "1px solid #009688",
            color: "#009688 !important",
            margin: "5px 0 5px px 5px"
        }
    })
)

export default Buttons;
