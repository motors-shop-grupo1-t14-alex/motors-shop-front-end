import { iSelect } from "./types"

export const Select = ({title, selectTitle, children, boxStyle, selectStyle, register, onChange, defaultValue, value}: iSelect): JSX.Element => {
    return (
        <div className={`flex flex-col ${boxStyle}`}>

                <label htmlFor={title}>{title}</label>

                <select id={title} className={selectStyle} {...register} onChange={onChange} defaultValue={defaultValue} value={value}>
                    <option value="" disabled selected>{selectTitle}</option>
                    {children}
                </select>

        </div>
    )
}