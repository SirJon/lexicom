import clsx from "clsx";
import { useEffect, useState } from "react";

const Entity = ({ register, watch, setValue, type = '', style }) => {
  const [mailingAddressCheckbox, setMailingAddressCheckbox] = useState(false);
  const [legalAddress, setLegalAddress] = useState('');
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      switch (name) {
        case `mailing_address_checkbox_${type}`:
          setMailingAddressCheckbox(value[name])
          break;
        case `legal_address_${type}`:
          setLegalAddress(value[name])
          break;

        default:
          break;
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  useEffect(() => {
    if (mailingAddressCheckbox) {
      setValue(`mailing_address_${type}`, legalAddress)
    }
  }, [mailingAddressCheckbox, legalAddress]);
  return (
    <>
      <li className={style.item}>
        <label
          className={style.label}
          htmlFor={`tin_${type}`}
        >
          ИНН
        </label>
        <input
          className={style.input}
          type="text"
          id={`tin_${type}`}
          {...register(`tin_${type}`)}
        />
      </li>
      <li className={style.item}>
        <label
          className={style.label}
          htmlFor={`ogrn_${type}`}
        >
          ОГРН
        </label>
        <input
          className={style.input}
          type="text"
          id={`ogrn_${type}`}
          {...register(`ogrn_${type}`)}
        />
      </li>
      <li className={style.item}>
        <label
          className={style.label}
          htmlFor={`company_${type}`}
        >
          Название компании
        </label>
        <input
          className={style.input}
          type="text"
          id={`company_${type}`}
          {...register(`company_${type}`)}
        />
      </li>
      <li className={style.item}>
        <label
          className={style.label}
          htmlFor={`legal_address_${type}`}
        >
          Юридический адрес
        </label>
        <input
          className={style.input}
          type="text"
          id={`legal_address_${type}`}
          {...register(`legal_address_${type}`)}
        />
      </li>
      <li className={style.item}>
        <div></div>
        <div className={style["wrapper--input"]}>
          <input
            className={style["input--checkbox"]}
            type="checkbox"
            id={`mailing_address_checkbox_${type}`}
            {...register(`mailing_address_checkbox_${type}`)}
          />
          <label
            className={clsx(style.label, style["label--checkbox"])}
            htmlFor={`mailing_address_checkbox_${type}`}
          >
            Почтовый адрес совпадает с юридическим
          </label>
        </div>
      </li>
      <li className={style.item}>
        <label
          className={style.label}
          htmlFor={`mailing_address_${type}`}
        >
          Почтовый адрес
        </label>
        <input
          className={style.input}
          type="text"
          id={`mailing_address_${type}`}
          {...register(`mailing_address_${type}`)}
          disabled={mailingAddressCheckbox}
        />
      </li>
      <li className={style.item}>
        <label
          className={style.label}
          htmlFor={`kpp_${type}`}
        >
          КПП
        </label>
        <input
          className={style.input}
          type="text"
          id={`kpp_${type}`}
          {...register(`kpp_${type}`)}
        />
      </li>
      <li className={style.item}>
        <label
          className={style.label}
          htmlFor={`pc_${type}`}
        >
          Р/c
        </label>
        <input
          className={style.input}
          type="text"
          id={`pc_${type}`}
          {...register(`pc_${type}`)}
        />
      </li>
      <li className={style.item}>
        <label
          className={style.label}
          htmlFor={`bank_${type}`}
        >
          Банк
        </label>
        <input
          className={style.input}
          type="text"
          id={`bank_${type}`}
          {...register(`bank_${type}`)}
        />
      </li>
      <li className={style.item}>
        <label
          className={style.label}
          htmlFor={`bic_${type}`}
        >
          БИК
        </label>
        <input
          className={style.input}
          type="text"
          id={`bic_${type}`}
          {...register(`bic_${type}`)}
        />
      </li>
      <li className={style.item}>
        <label
          className={style.label}
          htmlFor={`kc_${type}`}
        >
          К/c
        </label>
        <input
          className={style.input}
          type="text"
          id={`kc_${type}`}
          {...register(`kc_${type}`)}
        />
      </li>
    </>
  )
}

export default Entity
