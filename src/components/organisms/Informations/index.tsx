import ButtonNext from "../../atoms/ButtonNext"
import InputText from "../../atoms/InputText"
import TitleStep from "../../molecules/TitleStep"
import { MainStyle } from "./styles"

const Informations: React.FC = () => {
    return (
        <MainStyle>
            <TitleStep title="Informações pessoais" subtitle="Por favor nos informe seu nome, e-mail e telefone." />
            <InputText for="name" id="name" placeholder="Insira seu nome" label="Nome" />
            <InputText for="mail" id="mail" placeholder="elizabeth@hotmail.com" label="E-mail" />
            <InputText for="phone" id="phone" placeholder="DDD 91234-7896" label="Número de telefone" />
            <ButtonNext>Próximo</ButtonNext>
        </MainStyle>
    )
}

export default Informations