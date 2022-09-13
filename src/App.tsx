import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";


// function declaration
function App(props: any) {
    //полезное что-то
    // обязана вернуть JSX
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [switchOn, setSwitchOn] = useState<boolean>(false);


    return (
        <div className={"App"}>

           {/* <OnOff on={switchOn}
                   onChange={setSwitchOn}
                   />*/}

            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
            />

            <UncontrolledAccordion titleValue={"Menu"}/>

            <Rating value={ratingValue}
                    onClick={setRatingValue}
            />

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            <UncontrolledRating/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
