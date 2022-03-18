import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((m, i) => {
        return <option
            key={i}
            onChange={onChangeOption}
        >{m}
        </option>
    }) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChangeCallback(e)
        onChangeOption && onChangeOption(e.currentTarget.value)

    }

    return (
        <select onChange={onChangeCallback}  {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
