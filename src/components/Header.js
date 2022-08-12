import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import * as S from "./styled-header";
import img from './images/header.png';


const Header = () => {
    return(
        <>
        <img alt="img" src={img} />
        <S.Wrapper>
          <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Link to="/inicio">
                <S.Button>Home</S.Button>
            </Link>
            <Link to="/contato">
                <S.Button >Contato</S.Button>
            </Link>
            <Link to="/">
                <S.Button >Shopping</S.Button>
            </Link>
            <Cart />         
          </Grid>
        </S.Wrapper>

        
        </>
    )
}

export default Header;
