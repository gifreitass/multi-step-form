import { useFormik } from "formik"
import InputText from "../../atoms/InputText"
import TitleStep from "../../molecules/TitleStep"
import { ButtonNext, ButtonNextError, MainStyleForm } from "./styles"
import * as Yup from 'yup';
import store from "../../../store"
import { setFormValuesAction } from "../../../store/formValues/action"
import { setStepAction } from "../../../store/step/action"

const Informations: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: ""
        },
        validationSchema:
            Yup.object().shape({
                name: Yup.string()
                    .required('Campo obrigatório'),
                email: Yup.string()
                    .required('Campo obrigatório')
                    .email('Insira um e-mail válido'),
                phone: Yup.string()
                    .required('Campo obrigatório')
                    .min(9, "O número precisa ter pelo menos 11 caracteres, incluindo o DDD")
            }),
        onSubmit: () => {
            store.dispatch(setStepAction('2'))
            store.dispatch(setFormValuesAction({
                name: formik.values.name,
                email: formik.values.email,
                phone: formik.values.phone
            }))
        }
    })

    const isFormValid = formik.values.name && formik.values.email && formik.values.phone

    return (
        <MainStyleForm onSubmit={formik.handleSubmit}>
            <TitleStep title="Informações pessoais" subtitle="Por favor nos informe seu nome, e-mail e telefone." />
            <InputText isNotUndefined={formik.errors.name !== undefined} for="name" id="name" placeholder="Insira seu nome" label="Nome" value={formik.values.name} onChange={formik.handleChange} error={formik.errors.name}/>
            <InputText isNotUndefined={formik.errors.email !== undefined} for="mail" id="email" placeholder="elizabeth@hotmail.com" label="E-mail" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email}/>
            <InputText isNotUndefined={formik.errors.phone !== undefined}  for="phone" id="phone" placeholder="DDD 91234-7896" label="Número de telefone" value={formik.values.phone} onChange={formik.handleChange} error={formik.errors.phone}/>
            {isFormValid ? <ButtonNext type="submit">Próximo</ButtonNext> : <ButtonNextError type="submit">Próximo</ButtonNextError>}
        </MainStyleForm>
    )
}

export default Informations