import Informations from '../../organisms/Informations'
import SelectPlan from '../../organisms/SelectPlan'
import SideBar from '../../organisms/SideBar'
import { DivForm } from './styles'

const Form: React.FC = () => {
    return (
        <DivForm>
            <SideBar />
            {/* <Informations /> */}
            <SelectPlan />
        </DivForm>
    )
}

export default Form