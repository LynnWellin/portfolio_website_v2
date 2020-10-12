import React, { useEffect, useState } from "react";
import { Header, ProjectLink } from "./GeneralComponents";
import { DEV, BIZ, ItemData } from "./data";
import "./css/App.css";
import "./css/Items.css";

interface IExp {
    name: string;
    data: ItemData[];
}

interface ISections {
    dev: IExp;
    biz: IExp;
}

const SECTIONS: ISections = {
    dev: { name: "Developer", data: DEV },
    biz: { name: "Business", data: BIZ },
};

export default function App() {
    const [type, setType] = useState("dev");
    const [windowWidth, setWindowWidth] = useState(0);

    const updateDimensions = () => {
        setWindowWidth(window?.innerWidth ?? 0);
    };

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const changeType = () => {
        setType(type === "dev" ? "biz" : "dev");
    };

    return (
        <div className="App">
            <Header changeType={changeType} />
            <div className="SectionWrapper">
                <ExperienceContainer
                    details={SECTIONS[type]}
                    width={windowWidth}
                />
            </div>
        </div>
    );
}

interface IExpContainer {
    details: IExp;
    width: number;
}

function ExperienceContainer({
    details,
    width,
}: IExpContainer & { width: number }) {
    return (
        <div className="ExperienceContainer">
            {details.data.map((el) => (
                <Item key={el.expName} {...el} width={width} />
            ))}
        </div>
    );
}

const phoneItem = {
    flex: 1,
    minHeight: "300px",
    borderBottom: "1px solid #000000",
};

interface ItemProps extends ItemData {
    width: number;
}

function Item(props: ItemProps) {
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <div
            style={props.width > 600 ? props.class : phoneItem}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
        >
            {mouseOver ? <Detailed {...props} /> : <Summary {...props} />}
        </div>
    );
}

function Detailed(props: ItemProps) {
    return (
        <div className={`Item ${props.width <= 600 ? "ItemHover" : ""}`}>
            <h4 className="ItemTitle">{props.expName}</h4>
            <div className="ProjectLinksContainer">
                {props.links.map((el) => {
                    return <ProjectLink key={el.href} {...el} />;
                })}
            </div>
            <label className="Description">{props.expDetails}</label>
            <div className="Skills">
                {props.techStack.map((el) => (
                    <Skill key={el} skill={el} />
                ))}
            </div>
        </div>
    );
}

function Summary(props: ItemProps) {
    return (
        <div className="Item">
            <h4 className="ItemTitle">{props.expName}</h4>
            <label className="Description">{props.expDetails}</label>
            <div className="Skills">
                {props.techStack.map((el) => (
                    <Skill key={el} skill={el} />
                ))}
            </div>
        </div>
    );
}

function Skill({ skill }: { skill: string }) {
    return (
        <div className="Skill">
            <label>{skill}</label>
        </div>
    );
}
