import { useSelector } from 'react-redux'
import { iState } from '../../../types/store.interface'
import Addons from '../../organisms/Addons'
import FinishSubscription from '../../organisms/FinishSubscription'
import Informations from '../../organisms/Informations'
import SelectPlan from '../../organisms/SelectPlan'
import SideBar from '../../organisms/SideBar'
import Summary from '../../organisms/Summary'
import { DivForm } from './styles'

const Form: React.FC = () => {
    const step = useSelector((state: iState) => state.step.stepInformation)

    return (
        <DivForm>
            <SideBar />
            {step === '1' && <Informations />}
            {step === '2' && <SelectPlan />}
            {step === '3' && <Addons />}
            {step === '4' && <Summary />}
            {step === '5' && <FinishSubscription />}
        </DivForm>
    )
}

export default Form