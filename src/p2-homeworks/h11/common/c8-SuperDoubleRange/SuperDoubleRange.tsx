import Slider from '@mui/material/Slider'
import React from 'react'
import {Box} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: Array<number>) => void
    value?: Array<number>
    min?: number
    max?: number
    step?: number

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, min, max, step
        // min, max, step, disable, ...
    }
) => {
    const onChangeCallback = (event: Event, value: number | Array<number>, activeThumb: number) => {
        onChangeRange && onChangeRange(value as number[])
    }

    return (
        <>
            <Box sx={{ width: 124 }}  style={{marginLeft: '25px'}}>
            <Slider color='secondary'
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    onChange={onChangeCallback}
                   />
            </Box>
        </>
    )
}

export default SuperDoubleRange