import { useContext } from "react"
import { AccordionWrapper } from "../Accordion/Accordion"
import { ActivityBlock } from "../ActivityBlock/ActivityBlock"
import { AimBlock } from "../AimBlock/AimBlock"
import { ActivityContext } from "../contexts/ActivityContext"
import { ControlBlock } from "../ControlBlock/ControlBlock"
import { DividerText } from "../Divider/Divider"

export const Dashboard = () => {
    const activityResult = useContext(ActivityContext)
    console.log(activityResult, 'activityResult')
    return <>
        <AccordionWrapper title="Activity block">
            <ActivityBlock />
        </AccordionWrapper>

        <AccordionWrapper title="Aim block">
            <AimBlock />
        </AccordionWrapper>

        <AccordionWrapper title="Control block">
            <ControlBlock />
        </AccordionWrapper>

        <DividerText />
    </>
}