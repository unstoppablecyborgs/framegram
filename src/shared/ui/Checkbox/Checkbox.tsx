import s from './Checkbox.module.scss'

import { CheckIcon } from '../../assets'

export const Checkbox = () => {
  return (
    <div>
      <input type="checkbox" />
      <CheckIcon className={s.checkIcon} />
    </div>
  )
}
