import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core/';
import * as S from './styled-item';

const Item = ({ name, details }) => {
    return(
        <S.DivCategorias>
         <ListItem>
            <ListItemText
             primary={`${name}: ${details}`}
            />
         </ListItem>
        </S.DivCategorias>
    )
}

export default Item;
