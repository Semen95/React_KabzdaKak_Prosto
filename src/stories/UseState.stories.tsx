import React, {useMemo, useState} from "react";//1

export default {
    title: 'useState demo',
}

function generateData() {
    //difficult counting
    console.log("generateData")
    return 1
}

export const Example1 = () => {
    console.log("Example1")
    //const initValue = useMemo(generateData,[])

    const [counter, setCounter] = useState<number>(generateData); //[1, function(newValue){} ]


    return <>
        <button onClick={() => setCounter((state) => {
            return state + 1})}>+</button>
        {counter}
    </>
}