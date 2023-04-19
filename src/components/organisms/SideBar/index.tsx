import NavigationItem from "../../molecules/NavigationItem"
import bgsidebar from '../../../assets/images/bg-sidebar-desktop.svg'
import { useSelector } from 'react-redux'
import { DivContainsNavigationItems, ImageSideBar, SideBarStyle } from "./styles"
import { iState } from "../../../types/store.interface"

const SideBar: React.FC = () => {
    const step = useSelector((state: iState) => state.step.stepInformation)

    return (
            <SideBarStyle>
                <ImageSideBar src={bgsidebar} alt="Imagem de fundo com desenhos coloridos" />
                <DivContainsNavigationItems>
                <NavigationItem isSelected={step === '1'} number="1" step="PASSO 1" titleStep="SUAS INFORMAÇÕES" />
                <NavigationItem isSelected={step === '2'}  number="2" step="PASSO 2" titleStep="SELECIONE SEU PLANO" />
                <NavigationItem isSelected={step === '3'}  number="3" step="PASSO 3" titleStep="ADICIONAIS" />
                <NavigationItem isSelected={step === '4'}  number="4" step="PASSO 4" titleStep="FINALIZAR" />
                </DivContainsNavigationItems>
            </SideBarStyle>
    )
}

export default SideBar