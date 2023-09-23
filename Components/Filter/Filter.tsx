"use client"
import React from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';


import './Filter.css'

function valuetext(value: number) {
    return `${value}°C`;
}
const minDistance = 10;

export default function Filter() {
    const [value1, setValue1] = React.useState<number[]>([500, 4000]);

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
        return;
        }

        if (activeThumb === 0) {
        setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
        setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

  return (
    <>
        <div className="filter-container">
            <div className="filter-heading">
                Filters
            </div>
            <div className="filter-wrapper">

                <div className="filter-type">
                    <div className="filter-type-heading">
                        Categories
                    </div>
                    <div className="filter-items">
                        <div className="filter-item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Shirts</label>
                        </div>
                        <div className="filter-item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">T-Shirts</label>
                        </div>
                        <div className="filter-item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Jeans</label>
                        </div>
                        <div className="filter-item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Trousers</label>
                        </div>
                        <div className="filter-item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Joggers</label>
                        </div>
                    </div>
                </div>

                <div className="filter-type">
                    <div className="filter-type-heading">
                        Sizes
                    </div>
                    <div className="filter-items">
                        <div className="filter-item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">XS</label>
                        </div>
                        <div className="filter-item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">M</label>
                        </div>
                        <div className="filter-item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">XL</label>
                        </div>
                    </div>
                </div>

                <div className="filter-type">
                    <div className="filter-type-heading">
                        Color
                    </div>
                    <div className="filter-items">
                        <div className="filter-item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Black</label>
                        </div>
                        <div className="filter-item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Green</label>
                        </div>
                        <div className="filter-item">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Red</label>
                        </div>
                    </div>
                </div>

                <div className="filter-type">
                    <div className="filter-type-heading">
                        Price
                    </div>
                    <div className="filter-items">
                        <div className="filter-item">
                            <Box sx={{ width: 300 }}>
                                <Slider
                                    className='price-slider'
                                    getAriaLabel={() => 'Minimum distance'}
                                    value={value1}
                                    onChange={handleChange1}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    disableSwap
                                    min={500}
                                    max={5000}
                                />
                            </Box>
                        </div>
                        <div className="filter-item">
                            <div className="filter-price-input">
                                <div>₹ {value1[0]}</div>
                                <div>₹ {value1[1]}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="filter-btn">
                <div className="filter-clear">
                    <Button className='clear-btn' variant="outlined">Clear</Button>
                </div>
                <div className="filter-apply">
                    <Button className='apply-btn' variant="contained">Apply</Button>
                </div>
            </div>
        </div>
    </>
  )
}
