"use client"
import React, {FormEvent, ReactHTMLElement, useState} from 'react'
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import useCardsArray from '@/store/store';
import { categoryFunctions } from '@/app/(pages)/[category]/categoryFunctions';

import './Filter.css'


interface filterTypes{
    category: Array<string>,
    subcategory: Array<string>,
    price: Array<number>,
    size: Array<string>
}


function valuetext(value: number) {
    return `${value}°C`;
}
const minDistance = 10;


export default function Filter(props: any) {
    const router = useRouter();
    const updateCardsArray = useCardsArray((state) => state.updateCards);
    const [value1, setValue1] = useState<number[]>([500, 5000]);
    const [filters, setFilters] = useState<filterTypes>({
        category: ['men'],
        subcategory: [],
        price: [],
        size: []
    });


    async function onFilterChange(e:any){
        let name: keyof filterTypes  = e.target.name;
        let value = e.target.id;

        await setFilters((prevState)=>({
            ...prevState,
            [name] : [...prevState[name], value]
        }))
    }


    const handleRangeChange = (
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

        setFilters((prevState)=>({
            ...prevState,
            price: [value1[0], value1[1]]
        }))
    };

    async function applyFilters(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        router.push(`/${filters.category[0]}?category=${filters.category[0]}`)
        const result = await categoryFunctions.getProductByFilters(filters);
        if(result.isSuccess){
        await updateCardsArray(result.data);
        }
        console.log(result);
    }

  return (
    <>
        <div className="filter-container">
        <form action="" onSubmit={(e)=> applyFilters(e)}>
                <div className="filter-heading">
                    Filters
                </div>
                <div className="filter-wrapper">
                    <div className="filter-type">
                        <div className="filter-type-heading">
                            Categories
                        </div>
                        {
                            {
                                'men' : <>
                                            <div className="filter-items">
                                                <div className="filter-item">
                                                    <input type="checkbox" name="subcategory" id="Shirts" onChange={(e)=>{onFilterChange(e)}} />
                                                    <label htmlFor="">Shirts</label>
                                                </div>
                                                <div className="filter-item">
                                                    <input type="checkbox" name="subcategory" id="T-shirts" onChange={(e)=>{onFilterChange(e)}} />
                                                    <label htmlFor="">T-Shirts</label>
                                                </div>
                                                <div className="filter-item">
                                                    <input type="checkbox" name="subcategory" id="Jeans" onChange={(e)=>{onFilterChange(e)}} />
                                                    <label htmlFor="">Jeans</label>
                                                </div>
                                                <div className="filter-item">
                                                    <input type="checkbox" name="subcategory" id="Trousers" onChange={(e)=>{onFilterChange(e)}} />
                                                    <label htmlFor="">Trousers</label>
                                                </div>
                                                <div className="filter-item">
                                                    <input type="checkbox" name="subcategory" id="Joggers" onChange={(e)=>{onFilterChange(e)}} />
                                                    <label htmlFor="">Joggers</label>
                                                </div>
                                            </div>
                                        </>,
                                'women' : <>
                                            <div className="filter-items">
                                                <div className="filter-item">
                                                    <input type="checkbox" name="subcategory" id="Shirts" onChange={(e)=>{onFilterChange(e)}} />
                                                    <label htmlFor="">Suits</label>
                                                </div>
                                                <div className="filter-item">
                                                    <input type="checkbox" name="subcategory" id="T-shirts" onChange={(e)=>{onFilterChange(e)}} />
                                                    <label htmlFor="">Shrugs</label>
                                                </div>
                                                <div className="filter-item">
                                                    <input type="checkbox" name="subcategory" id="Jeans" onChange={(e)=>{onFilterChange(e)}} />
                                                    <label htmlFor="">Jeans</label>
                                                </div>
                                                <div className="filter-item">
                                                    <input type="checkbox" name="subcategory" id="Trousers" onChange={(e)=>{onFilterChange(e)}} />
                                                    <label htmlFor="">Skirts</label>
                                                </div>
                                                <div className="filter-item">
                                                    <input type="checkbox" name="subcategory" id="Joggers" onChange={(e)=>{onFilterChange(e)}} />
                                                    <label htmlFor="">Tops</label>
                                                </div>
                                            </div>
                                        </>
                            }[filters.category[0]]
                        }
                    </div>

                    <div className="filter-type">
                        <div className="filter-type-heading">
                            Sizes
                        </div>
                        <div className="filter-items">
                            <div className="filter-item">
                                <input type="checkbox" name="size" id="xs" onChange={(e)=>{onFilterChange(e)}} />
                                <label htmlFor="">XS</label>
                            </div>
                            <div className="filter-item">
                                <input type="checkbox" name="size" id="s" onChange={(e)=>{onFilterChange(e)}} />
                                <label htmlFor="">S</label>
                            </div>
                            <div className="filter-item">
                                <input type="checkbox" name="size" id="m" onChange={(e)=>{onFilterChange(e)}} />
                                <label htmlFor="">M</label>
                            </div>
                            <div className="filter-item">
                                <input type="checkbox" name="size" id="l" onChange={(e)=>{onFilterChange(e)}} />
                                <label htmlFor="">L</label>
                            </div>
                            <div className="filter-item">
                                <input type="checkbox" name="size" id="xl" onChange={(e)=>{onFilterChange(e)}} />
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
                                        onChange={handleRangeChange}
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
                        <Button className='clear-btn' variant="outlined" type='reset'>Clear</Button>
                    </div>
                    <div className="filter-apply">
                        <Button className='apply-btn' variant="contained" type='submit'>Apply</Button>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}
