import React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import './DropDownMenu.css'
import Link from 'next/link';

interface props{
    menuItemList : Array<string>,
    category: string
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
                            <Link href={`/men?category=${props.category}&subcategory=${listItemName}`}  >
                                <MenuItem className='cust-menu-item'>
                                    <ListItemText>{listItemName}</ListItemText>
                                </MenuItem>
                            </Link>
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