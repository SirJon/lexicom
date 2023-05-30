import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "./App.scss";
import style from "./App.module.scss"

function App() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = data => console.log(data);
  const [plaintiff, setPlaintiff] = useState('');
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === 'plaintiff') {
        setPlaintiff(value[name])
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <section>
      <div>
        {/* <h2>Создать дело</h2> */}
        <button>
          <span>close</span>
        </button>
      </div>
      <form
        className={style.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <ul className={style.list}>
          <li className={style.item}>
            <label htmlFor="uid">УИД</label>
            <input
              type="text"
              id="uid"
              {...register("uid")}
            />
          </li>
          <li className={style.item}>
            <label htmlFor="case_id">Номер</label>
            <input
              type="text"
              id="case_id"
              {...register("case_id")}
            />
          </li>
          <li className={style.item}>
            <label htmlFor="plaintiff">Истец:</label>
            <input
              id="plaintiff"
              type="checkbox"
              {...register("plaintiff")}
            />
            <span>Юридическое лицо</span>
          </li>
          {plaintiff
            ? <>
              <li className={style.item}>
                <label htmlFor="tin">ИНН</label>
                <input
                  type="text"
                  id="tin"
                  {...register("tin")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="ogrn">ОГРН</label>
                <input
                  type="text"
                  id="ogrn"
                  {...register("ogrn")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="company">Название компании</label>
                <input
                  type="text"
                  id="company"
                  {...register("company")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="legal_address">Юридический адрес</label>
                <input
                  type="text"
                  id="legal_address"
                  {...register("legal_address")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="mailing_address_checkbox">Почтовый адрес совпадает с юридическим</label>
                <input
                  id="mailing_address_checkbox"
                  type="checkbox"
                  {...register("legal_address")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="mailing_address">Почтовый адрес</label>
                <input
                  type="text"
                  id="mailing_address"
                  {...register("mailing_address")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="kpp">КПП</label>
                <input
                  type="text"
                  id="kpp"
                  {...register("kpp")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="pc">Р/c</label>
                <input
                  type="text"
                  id="pc"
                  {...register("pc")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="bank">Банк</label>
                <input
                  type="text"
                  id="bank"
                  {...register("bank")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="bic">БИК</label>
                <input
                  type="text"
                  id="bic"
                  {...register("bic")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="kc">К/c</label>
                <input
                  type="text"
                  id="kc"
                  {...register("kc")}
                />
              </li>
            </>
            : <>
              <li className={style.item}>
                <label htmlFor="lastname">Фамилия</label>
                <input
                  type="text"
                  id="lastname"
                  {...register("lastname")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="name">Имя</label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="surname">Отчество</label>
                <input
                  type="text"
                  id="surname"
                  {...register("surname")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="birthday">Дата рождения</label>
                <input
                  id="birthday"
                  type="date"
                  {...register("birthday")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="reg_address">Адрес регистрации</label>
                <input
                  type="text"
                  id="reg_address"
                  {...register("reg_address")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="res_address">Адрес проживания</label>
                <input
                  type="text"
                  id="res_address"
                  {...register("res_address")}
                />
              </li>
              <li className={style.item}>
                <label htmlFor="phone">Номер телефона</label>
                <input
                  type="text"
                  id="phone"
                  {...register("phone")}
                />
              </li>
            </>
          }
        </ul>
        <ul className={style.list}>
          <li className={style.item}>
            <label htmlFor="data">Дата:</label>
            <input
              id="data"
              type="date"
              {...register("data")}
            />
          </li>
          <li className={style.item}>
            <label htmlFor="defendant">Ответчик:</label>
            <input
              id="defendant"
              type="checkbox"
              {...register("defendant")}
            />
            <span>Юридическое лицо</span>
          </li>
          <li className={style.item}>
            <label htmlFor="inn">ИНН</label>
            <input
              type="text"
              id="inn"
              {...register("inn")}
            />
          </li>
          <li className={style.item}>
            <label htmlFor="ogrn_entity">ОГРН</label>
            <input
              type="text"
              id="ogrn_entity"
              {...register("ogrn_entity")}
            />
          </li>
          <li className={style.item}>
            <label htmlFor="company_entity">Название компании</label>
            <input
              type="text"
              id="company_entity"
              {...register("company_entity")}
            />
          </li>
          <li className={style.item}>
            <label htmlFor="legal_address_entity">Юридический адрес</label>
            <input
              type="text"
              id="legal_address_entity"
              {...register("legal_address_entity")}
            />
          </li>
          <li className={style.item}>
            <label htmlFor="mailing_address_checkbox_entity">Почтовый адрес совпадает с юридическим</label>
            <input
              id="mailing_address_checkbox_entity"
              type="checkbox"
              {...register("mailing_address_checkbox_entity")}
            />
          </li>
          <li className={style.item}>
            <label htmlFor="mailing_address_entity">Почтовый адрес</label>
            <input
              type="text"
              id="mailing_address_entity"
              {...register("mailing_address_entity")}
            />
          </li>
          <li className={style.item}>
            <label htmlFor="kpp_entity">КПП</label>
            <input
              type="text"
              id="kpp_entity"
              {...register("kpp_entity")}
            />
          </li>
          <li className={style.item}>
            <label htmlFor="pc_entity">Р/c</label>
            <input
              type="text"
              id="pc_entity"
              {...register("pc_entity")}
            />
          </li>
          <li className={style.item}>
            <label htmlFor="bank_entity">Банк</label>
            <input
              type="text"
              id="bank_entity"
              {...register("bank_entity")}
            />
          </li>
          <li className={style.item}>
            <label htmlFor="bic_entity">БИК</label>
            <input
              type="text"
              id="bic_entity"
              {...register("bic_entity")}
            />
          </li>
          <li className={style.item}>
            <label htmlFor="kc_entity">К/c</label>
            <input
              type="text"
              id="kc_entity"
              {...register("kc_entity")}
            />
          </li>
        </ul>

        <button type="button">Отмена</button>
        <button type="submit">Создать</button>

      </form>
    </section>
  )
}

export default App
