
const Individual = ({ register, type = '', style }) => {
  return (
    <>
      <li className={style.item}>
        <label 
          className={style.label}
          htmlFor={`lastname_${type}`}
        >
          Фамилия
        </label>
        <input
          className={style.input}
          type="text"
          id={`lastname_${type}`}
          {...register(`lastname_${type}`)}
        />
      </li>
      <li className={style.item}>
        <label 
          className={style.label}
          htmlFor={`name_${type}`}
        >
          Имя
        </label>
        <input
          className={style.input}
          type="text"
          id={`name_${type}`}
          {...register(`name_${type}`)}
        />
      </li>
      <li className={style.item}>
        <label 
          className={style.label}
          htmlFor={`surname_${type}`}
        >
          Отчество
        </label>
        <input
          className={style.input}
          type="text"
          id={`surname_${type}`}
          {...register(`surname_${type}`)}
        />
      </li>
      <li className={style.item}>
        <label 
          className={style.label}
          htmlFor={`birthday_${type}`}
        >
          Дата рождения
        </label>
        <input
          className={style.input}
          type="date"
          id={`birthday_${type}`}
          {...register(`birthday_${type}`)}
        />
      </li>
      <li className={style.item}>
        <label 
          className={style.label}
          htmlFor={`reg_address_${type}`}
        >
          Адрес регистрации
        </label>
        <input
          className={style.input}
          type="text"
          id={`reg_address_${type}`}
          {...register(`reg_address_${type}`)}
        />
      </li>
      <li className={style.item}>
        <label 
          className={style.label}
          htmlFor={`res_address_${type}`}
        >
          Адрес проживания
        </label>
        <input
          className={style.input}
          type="text"
          id={`res_address_${type}`}
          {...register(`res_address_${type}`)}
        />
      </li>
      <li className={style.item}>
        <label 
          className={style.label}
          htmlFor={`phone_${type}`}
        >
          Номер телефона
        </label>
        <input
          className={style.input}
          type="text"
          id={`phone_${type}`}
          {...register(`phone_${type}`)}
        />
      </li>
    </>
  )
}

export default Individual
