import ButtonNext from "../../atoms/ButtonNext"
import ButtonPrev from "../../atoms/ButtonPrev"
import FinishingUp from "../../molecules/FinishingUp"
import TitleStep from "../../molecules/TitleStep"
import { MainStyle } from "./styles"

const Summary = () => {
    return (
        <MainStyle>
            <TitleStep title="Finalizar pedido" subtitle="Confira se todas as informações estão corretas antes de finalizar a compra." />
            <FinishingUp />
            <ButtonPrev prevPage="3">Anterior</ButtonPrev>
            <ButtonNext nextPage="5">Confirmar</ButtonNext>
        </MainStyle>
    )
}

export default Summary