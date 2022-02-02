import React from "react";
import Button from "@mui/material/Button";

import Data from "assets/dummy/data";


export interface ButtonsProps {
    filterItem?: any,
    setItem?: any,
    menuItems?: any
}

const Buttons: React.FC<ButtonsProps> = props => {
    const { filterItem, setItem, menuItems } = props

    return (
        <>
            {menuItems.map((item:any, index:number) => {
                return (
                    <Button
                        size="small"
                        variant="outlined"
                        onClick={() => filterItem(item)}
                        key={index}
                    >
                        {item}
                    </Button>
                );
            })}
            <Button
                size="small"
                variant="outlined"
                onClick={() => setItem(Data)}
            >
                Todos
            </Button>
        </>
    );
};

export default Buttons;
