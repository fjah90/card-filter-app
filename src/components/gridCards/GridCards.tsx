import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import GridCardItem from './GridCardItems'
import Buttons from "components/filterButtons/filterButtons";

import Data from "assets/dummy/data";

export default function GridCard() {
    const [item, setItem] = React.useState(Data);

    const menuItems = [Array.from(new Set(Data.map((Val) => Val.category)))];

    const filterItem = (currentCategory: string): void => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === currentCategory;
        });
        setItem(newItem);
    };

    return (
        <>
            <h3> Filter Material UI Grid </h3>
            {menuItems.map((item: any, index: number): JSX.Element => {
                return (
                    <Buttons
                        key={index}
                        filterItem={filterItem}
                        setItem={setItem}
                        menuItems={item} />
                );
            })}
            
            <Box component="section" m={1}>
                <Grid container spacing={1}>
                    <GridCardItem data={item} />
                </Grid>
            </Box>
        </>
    );
}