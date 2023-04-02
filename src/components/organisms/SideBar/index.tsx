import NavigationItem from "../../molecules/NavigationItem"
import bgsidebar from '../../../assets/images/bg-sidebar-desktop.svg'
import { DivContainsNavigationItems, ImageSideBar, SideBarStyle } from "./styles"

const SideBar: React.FC = () => {
    return (
            <SideBarStyle>
                <ImageSideBar src={bgsidebar} alt="Imagem de fundo com desenhos coloridos" />
                <DivContainsNavigationItems>
                <NavigationItem number="1" step="PASSO 1" titleStep="SUAS INFORMAÇÕES" />
                <NavigationItem number="2" step="PASSO 2" titleStep="SELECIONE SEU PLANO" />
                <NavigationItem number="3" step="PASSO 3" titleStep="ADICIONAIS" />
                <NavigationItem number="4" step="PASSO 4" titleStep="FINALIZAR" />
                </DivContainsNavigationItems>
            </SideBarStyle>
    )
}

export default SideBar