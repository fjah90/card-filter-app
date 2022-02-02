import * as React from "react";
import Button from "@mui/material/Button";
import Data from "assets/dummy/data";


export interface ButtonsProps {
    filterItem?: any,
    setItem?: any,
    menuItems?: any
}

const Buttons: React.FC<ButtonsProps> = props => {
    const { filterItem, setItem, menuItems } = props
    const buttonStyle = {
        border: "1px solid #009688",
        color: "#009688",
        margin: "5px 0 5px 5px"
    }

    return (
        <>
            {menuItems.map((item:any, index:number) => {
                return (
                    <Button
                        sx={buttonStyle}
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
                sx={buttonStyle}
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
