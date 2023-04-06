import ButtonNext from "../../atoms/ButtonNext"
import ButtonPrev from "../../atoms/ButtonPrev"
import AddOnsOption from "../../molecules/AddOnsOption"
import TitleStep from "../../molecules/TitleStep"
import { DivOptions, MainStyle } from "./styles"

const AddOns = () => {
    return (
        <MainStyle>
            <TitleStep title="Escolha os complementos" subtitle="Complementos ajudam a melhorar sua experiência." />
            <DivOptions>
                <AddOnsOption title="Serviço Online" subtitle="Acesso a diversos jogos" price="+R$5/mês" />
                <AddOnsOption title="Maior Armazenamento" subtitle="1TB extra de armazenamento na nuvem" price="+R$10/mês" />
                <AddOnsOption title="Perfil customizável" subtitle="Personalize seu perfil como desejar" price="+R$10/mês" />
            </DivOptions>
            <ButtonPrev>Anterior</ButtonPrev>
            <ButtonNext>Próximo</ButtonNext>
        </MainStyle>
    )
}

export default AddOns