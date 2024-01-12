import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import SingleDairy from './SingleDairy';

export const Dairy = () => {
    const [dairy, setDairy] = useState([]);
    const [page, setPage] = useState(1);

    const handlePage = (val) => {
        const changeBy = page + val;
        setPage(changeBy)
    }

    useEffect(() => {
        axios.get(`https://online-store-quc3.onrender.com/dairy?_page=${page}&_limit=8`).then((res) => {
            setDairy(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [page])


    return (
        <div>
            <Flex w={{ base: "100%", md: "90%" }} m="auto" mt={"20px"}>
                <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }} gap={6}>
                    {
                        dairy?.length > 0 && dairy.map((e) => {
                            return <GridItem key={e.id} >
                                <SingleDairy category={e.category} image={e.image} id={e.id} description={e.description} price_inr={e.price_inr} title={e.title} discount_percentage={e.discount_percentage} discount_price_inr={e.discount_price_inr} ETA={e.ETA} />
                            </GridItem>
                        })
                    }
                </Grid>
            </Flex>
            <button disabled={page === 1} style={{ margin: "2px", padding: "8px", backgroundColor: "orange", borderRadius: "5px", fontWeight: "bold", marginTop: "40px" }} onClick={() => handlePage(-1)}>PREV</button>
            <button disabled={page === 3} style={{ margin: "2px", padding: "8px", backgroundColor: "orange", borderRadius: "5px", fontWeight: "bold", marginTop: "40px" }} onClick={() => handlePage(1)}>NEXT</button>
        </div>
    )
}
