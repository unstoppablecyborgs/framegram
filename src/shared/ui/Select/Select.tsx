import Image, { StaticImageData } from 'next/image'
import { ChangeEvent, useState } from 'react'
import Russia from './../../assets/images/flags/Flag_Russia.png'
import UnitedKingdom from './../../assets/images/flags/Flag_United_Kingdom.png'
import styles from './Select.module.scss'

type OptionType = {
  id: number
  title: string
  flag: StaticImageData
}

const options: OptionType[] = [
  { id: 1, title: 'English', flag: UnitedKingdom },
  { id: 2, title: 'Russian', flag: Russia },
]

type Props = {
  isLoggedIn: boolean
}

export const Select = (props: Props) => {
  const { isLoggedIn } = props

  const [showMenu, setShowMenu] = useState(false)
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [selectedValue, setSelectedValue] = useState<any>(options[0])

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const onChangeHandler = (value: any) => {
    setSelectedValue(value)
    handleClick()
  }

  const onItemClick = (option: OptionType) => {
    onChangeHandler(option)
  }

  const selectedItem = options.find(option => option.id === selectedValue.id)

  return (
    <div className={isLoggedIn ? styles.selectWrapperIsLoggedIn : styles.selectWrapper}>
      <div
        className={styles.select}
        onChange={(event: ChangeEvent<HTMLDivElement | undefined>) =>
          onChangeHandler(event.currentTarget)
        }
        onClick={handleClick}
      >
        {selectedItem && (
          <div className={styles.selectTrigger}>
            <Image
              width={20}
              height={20}
              src={selectedItem.flag}
              alt={'the flag of the country whose language is selected'}
            />
            <span>{selectedItem.title}</span>
            <div className={`${showMenu ? styles.arrow : `${styles.open} ${styles.arrow}`}`}></div>
          </div>
        )}

        <div className={`${showMenu ? styles.open : styles.customOptions}`}>
          {options.map((option: OptionType) => (
            <div
              className={`${option.id === selectedValue.id ? `${styles.customOption} ${styles.selected}` : styles.customOption}`}
              key={option.id}
              onClick={() => onItemClick(option)}
            >
              <Image
                width={20}
                height={20}
                src={option.flag}
                alt={'the flag of the country whose language is selected'}
              />
              <span>{option.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
