import { Image, MainStyle, SubTitle, Title } from "./styles"
import finishIcon from "../../../assets/images/icon-thank-you.svg"

const FinishSubscription = () => {
    return (
        <MainStyle>
            <Image src={finishIcon} alt="ícone com checkmark" />
            <Title>Cadastro finalizado!</Title>
            <SubTitle>Agradecemos por confirmar sua inscrição, esperamos que se divirta utilizando nossa plataforma! Se precisar de algum suporte entre em contato com a gente por e-mail ou WhatsApp. </SubTitle>
        </MainStyle>
    )
}

export default FinishSubscription