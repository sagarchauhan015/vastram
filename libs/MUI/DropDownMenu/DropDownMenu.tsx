'use client'
import React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import './DropDownMenu.css'

interface props{
    menuItemList : Array<string>,
    category: string,
    getProductBySubCategory: any
}

export default function DropDownMenu(props : props) {
  return (
    <Paper sx={{ width: 220, maxWidth: '100%' }}>
      <MenuList>
        {
            props.menuItemList.length > 0 ?
            <>
                {
                    props.menuItemList.map((listItemName) => {
                        return(
                                <MenuItem key={listItemName} className='cust-menu-item' onClick={(e)=> props.getProductBySubCategory(e, props.category, listItemName) }>
                                    <ListItemText>{listItemName}</ListItemText>
                                </MenuItem>
                        )
                    })
                }
            </>
            :
            <>
                <div>No Categories Available</div>
            </>
        }
      </MenuList>
    </Paper>
  );
}