import clsx from "clsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Entity from "./components/Form/Entity/Entity";
import Individual from "./components/Individual/Individual";

import style from "./App.module.scss"

function App() {
  const { register, handleSubmit, watch, setValue, reset } = useForm();
  const onSubmit = (formData) => {
    const { uid, case_id } = formData;
    const plaintiff = formData.plaintiff ?
      {
        "inn": formData.tin_plaintiff,
        "ogrn": formData.ogrn_plaintiff,
        "company": formData.company_plaintiff,
        "legal_address": formData.legal_address_plaintiff,
        "mailing_address": formData.mailing_address_plaintiff,
        "kpp": formData.kpp_plaintiff,
        "pc": formData.pc_plaintiff,
        "bank": formData.bank_plaintiff,
        "bic": formData.bic_plaintiff,
        "kc": formData.kc_plaintiff,
        "type": 1,
      }
      :
      {
        "birthday": formData.birthday_plaintiff,
        "lastname": formData.lastname_plaintiff,
        "name": formData.name_plaintiff,
        "surname": formData.surname_plaintiff,
        "phone": formData.phone_plaintiff,
        "reg_address": formData.reg_address_plaintiff,
        "res_address": formData.reg_address_plaintiff,
        "type": 0,
      };
    const defendant = formData.defendant ?
      {
        "inn": formData.tin_defendant,
        "ogrn": formData.ogrn_defendant,
        "company": formData.company_defendant,
        "legal_address": formData.legal_address_defendant,
        "mailing_address": formData.mailing_address_defendant,
        "kpp": formData.kpp_defendant,
        "pc": formData.pc_defendant,
        "bank": formData.bank_defendant,
        "bic": formData.bic_defendant,
        "kc": formData.kc_defendant,
        "type": 1,
      }
      :
      {
        "birthday": formData.birthday_defendant,
        "lastname": formData.lastname_defendant,
        "name": formData.name_defendant,
        "surname": formData.surname_defendant,
        "phone": formData.phone_defendant,
        "reg_address": formData.reg_address_defendant,
        "res_address": formData.reg_address_defendant,
        "type": 0,
      };

    const data = {
      uid,
      case_id,
      plaintiff,
      defendant,
      "start": formData.data,
      "end": '',
      "area_id": 12,
      "plaintiff_type": formData.plaintiff ? 1 : 0,
      "defendant_type": formData.defendant ? 1 : 0,
    }
    console.log(data)
    /**
     * При отправке формы делаем диспатч в store async action
     */
    // dispatch(fetchAction(data))
    // .then(() => reset())
  };
  const [plaintiff, setPlaintiff] = useState(false);
  const [defendant, setDefendant] = useState(false);
  const resetHandler = () => {
    reset();
  }
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      switch (name) {
        case 'plaintiff':
          setPlaintiff(value[name])
          break;
        case 'defendant':
          setDefendant(value[name])
          break;

        default:
          break;
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <div className={style.wrapper}>
      <section className={style.body}>
        <div className={style.header}>
          <h2 className={style.title}>Создать дело</h2>
          <button className={style["button--close"]}>
            <span className={style["invisible"]}>close</span>
          </button>
        </div>
        <form
          className={style.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={style["form--header"]}>
            <ul className={style.list}>
              <li className={style.item}>
                <label
                  className={style.label}
                  htmlFor="uid"
                >
                  УИД
                </label>
                <input
                  className={style.input}
                  type="text"
                  id="uid"
                  {...register("uid")}
                />
              </li>
              <li className={style.item}>
                <label
                  className={style.label}
                  htmlFor="case_id"
                >
                  Номер
                </label>
                <input
                  className={style.input}
                  type="text"
                  id="case_id"
                  {...register("case_id")}
                />
              </li>
            </ul>
            <ul className={style.list}>
              <li className={style.item}>
                <label
                  className={clsx(style.label, style["label--bold"])}
                  htmlFor="data"

                >
                  Дата:
                </label>
                <input
                  className={style.input}
                  id="data"
                  type="date"
                  {...register("data")}
                />
              </li>
            </ul>
          </div>
          <div className={style["form--body"]}>
            <ul className={style.list}>
              <li className={style.item}>
                <span className={style["label--bold"]}>Истец:</span>
                <div className={style["wrapper--input"]}>
                  <input
                    className={style["input--checkbox"]}
                    id="plaintiff"
                    type="checkbox"
                    {...register("plaintiff")}
                  />
                  <label
                    className={clsx(style.label, style["label--checkbox"])}
                    htmlFor="plaintiff"
                  >
                    Юридическое лицо
                  </label>
                </div>
              </li>
              {plaintiff
                ? <Entity register={register} watch={watch} setValue={setValue} type="plaintiff" style={style} />
                : <Individual register={register} type="plaintiff" style={style} />
              }
            </ul>
            <ul className={style.list}>
              <li className={style.item}>
                <span className={style["label--bold"]}>Ответчик:</span>
                <div className={style["wrapper--input"]}>
                  <input
                    className={style["input--checkbox"]}
                    id="defendant"
                    type="checkbox"
                    {...register("defendant")}
                  />
                  <label
                    className={clsx(style.label, style["label--checkbox"])}
                    htmlFor="defendant"
                  >
                    Юридическое лицо
                  </label>
                </div>
              </li>

              {defendant
                ? <Entity register={register} watch={watch} setValue={setValue} type="defendant" style={style} />
                : <Individual register={register} type="defendant" style={style} />
              }
            </ul>
          </div>
          <div className={style["wrapper--button"]}>
            <button
              className={clsx(style.button, style["button--grey"])}
              type="button"
              onClick={resetHandler}
            >
              Отмена
            </button>
            <button
              className={clsx(style.button, style["button--blue"])}
              type="submit"
            >
              Создать
            </button>
          </div>

        </form>
      </section>
    </div>
  )
}

export default App
