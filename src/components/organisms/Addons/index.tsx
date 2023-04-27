import { iState } from "../../../types/store.interface"
import ButtonNext from "../../atoms/ButtonNext"
import ButtonPrev from "../../atoms/ButtonPrev"
import AddOnsOption from "../../molecules/AddOnsOption"
import TitleStep from "../../molecules/TitleStep"
import { useSelector } from 'react-redux'
import { ADDONS } from "../../../shared/constants"
import { DivOptions, MainStyle } from "./styles"

const Addons = () => {
    const planTime = useSelector((state: iState) => state.plan.planTime)

    const recurrence = planTime === 'Mensal' ? 'monthly' : 'annual'

    return (
        <MainStyle>
            <TitleStep title="Escolha os complementos" subtitle="Complementos ajudam a melhorar sua experiência." />
            <DivOptions>
                <AddOnsOption id="onlineService" title="Serviço Online" subtitle="Acesso a diversos jogos" price={ADDONS.onlineService[`${recurrence}_value`]} />
                <AddOnsOption id="largerStorage" title="Maior Armazenamento" subtitle="1TB extra de armazenamento na nuvem" price={ADDONS.largerStorage[`${recurrence}_value`]}/>
                <AddOnsOption id="customProfile" title="Perfil customizável" subtitle="Personalize seu perfil como desejar" price={ADDONS.customProfile[`${recurrence}_value`]} />
            </DivOptions>
            <ButtonPrev prevPage="2">Anterior</ButtonPrev>
            <ButtonNext nextPage="4">Próximo</ButtonNext>
        </MainStyle>
    )
}

export default Addons