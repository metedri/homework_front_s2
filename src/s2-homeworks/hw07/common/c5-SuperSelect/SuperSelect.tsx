import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react'
import s from './SuperSelect.module.css'
import { ListTtem } from '../../HW7'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type Props = DefaultSelectPropsType & {
  options?: ListTtem[]
  onChangeOption?: (option: number) => void
}

const SuperSelect: React.FC<Props> = ({ options, className, onChange, onChangeOption, ...restProps }) => {
  const mappedOptions: JSX.Element[] = options
    ? options.map(o => (
        <option id={'hw7-option-' + o.id} className={s.option} key={o.id} value={o.id}>
          {o.value}
        </option>
      ))
    : [] // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChangeOption) {
      onChangeOption(+e.currentTarget.value)
    }
  }

  const finalSelectClassName = s.select + (className ? ' ' + className : '')

  return (
    <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  )
}

export default SuperSelect
