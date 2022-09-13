import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


export default {
    title: "Accordion",
    component: Accordion,
};

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

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
    onChange: callback,
    onClick: onClickCallback
}

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: "Users",
    collapsed: false,
    onChange: callback,
    items: [{title: "dima", value: 1}, {title: "valera", value: 2}, {title: "katya", value: 3}],
    onClick: onClickCallback
}


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);

    return <Accordion
        titleValue={"Users"}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[
            {title: "dima", value: 1},
            {title: "valera", value: 2},
            {title: "katya", value: 3}
        ]}
        onClick={onClickCallback}
    />
};