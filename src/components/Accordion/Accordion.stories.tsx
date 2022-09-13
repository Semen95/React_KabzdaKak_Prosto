import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


export default {
    title: "Accordion",
    component: Accordion,
};

const callback = action("accordion mode change event fired")
const onClickCallback = action("sme item was clicked")
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: "Menu",
    collapsed: true,
    onChange: callback
}

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: "Users",
    collapsed: false,
    onChange: callback
}


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);

    return <Accordion
        titleValue={"Users"}
        collapsed={value}
        onChange={() => setValue(!value)}
        onClick={(value) => {
            alert(`user with ID ${value}should be happy`)
        }}
    />
};