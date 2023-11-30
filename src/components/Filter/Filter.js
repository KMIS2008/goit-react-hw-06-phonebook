
import {FormFilter,
        InputFilter,
        TitleFilter} from './Filter.styled';

import { getFilterValue } from 'redux/selects'; 
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { nanoid } from '@reduxjs/toolkit';

const filterId= nanoid();

export const FilterConctacts = ()=>{

const filter = useSelector(getFilterValue);
const dispatch = useDispatch();

return(
    
        <FormFilter>
            <TitleFilter> 
                Find contacts by name
                <InputFilter value={filter} id={filterId} onChange={event=>dispatch(changeFilter(event.target.value))}/>
            </TitleFilter>
        </FormFilter>
)

}