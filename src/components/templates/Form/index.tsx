import AddOns from '../../organisms/AddOns'
import FinishSubscription from '../../organisms/FinishSubscription'
import Informations from '../../organisms/Informations'
import SelectPlan from '../../organisms/SelectPlan'
import SideBar from '../../organisms/SideBar'
import Summary from '../../organisms/Summary'
import { DivForm } from './styles'

const Form: React.FC = () => {
    return (
        <DivForm>
            <SideBar />
            {/* <Informations /> */}
            {/* <SelectPlan /> */}
            {/* <AddOns /> */}
            <Summary />
            {/* <FinishSubscription /> */}
        </DivForm>
    )
}

export default Form