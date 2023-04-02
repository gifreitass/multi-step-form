import { SubtitleInformation, TitleInformations } from "./styles"

const TitleStep: React.FC<{title: string, subtitle: string}> = (props) => {
    return (
        <>
            <TitleInformations>{props.title}</TitleInformations>
            <SubtitleInformation>{props.subtitle}</SubtitleInformation>
        </>
    )
}

export default TitleStep