import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(1)
    const [value2, setValue2] = useState<Array<number>>([1, 100])

    const onChangeRangeDouble = (value: Array<number>) => {
        setValue1(value[0])
        setValue2(value)
    }

    const onChangeRange = (e: number) => {
        setValue1(e)
        setValue2([e, value2[1]])
    }


    return (
        <div>
            <hr/>
            <h2> Homeworks 11</h2>

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange value={value1} onChangeRange={onChangeRange}

                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={value2}
                    max={100}
                    min={1}
                    step={1}
                    onChangeRange={onChangeRangeDouble}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2[1]}</span>
            </div>

            <hr/>
            <hr/>
        </div>
    )
}

export default HW11
