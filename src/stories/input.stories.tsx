import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: "input",
    //component: OnOff
}

export const UnconntrolledInput = () => <input/>

export const TrackValueOfUnconntrolledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }

    return <>
        <input onChange={onChange}/> - {value}
    </>
}

export const GetValueOfOfUnconntrolledInputButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value);
    }

    return <>
        <input
            ref={inputRef}
            id={"inputID"}/>
        <button onClick={save}>save</button>
        - actual value:{value}
    </>
}

export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>

