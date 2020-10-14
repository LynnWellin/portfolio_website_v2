import React, { useEffect, useState } from "react";
import { Header, ProjectLink } from "./GeneralComponents";
import { DEV, BIZ, ItemData } from "./data";
import styled from "@emotion/styled";
import { flexColumn } from "styles";

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

const AppContainer = styled.div`
    ${flexColumn}
    height: 100%;
    width: 100%;
    background-color: #011627;
`;

const SectionWrapper = styled.div`
    ${flexColumn}
    height: 100%;
    width: 100%;
    background-color: #09d3ac;
`;

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
        <AppContainer>
            <Header changeType={changeType} />
            <SectionWrapper>
                <ExperienceContainer
                    details={SECTIONS[type]}
                    width={windowWidth}
                />
            </SectionWrapper>
        </AppContainer>
    );
}

interface IExpContainer {
    details: IExp;
    width: number;
}

// Container with a 12 by 10 grid
const ExprienceContainer = styled.div`
    @media (min-width: 601px) {
        flex: 1;
        display: grid;
        grid-auto-flow: column;
        /* Used for borders between items; requires use of 1 fr instea of %*/
        grid-gap: 1px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(10, 1fr);
        background-color: #ff9f1c;
    }
    @media (max-width: 600px) {
        ${flexColumn}
    }
`;

function ExperienceContainer({
    details,
    width,
}: IExpContainer & { width: number }) {
    return (
        <ExprienceContainer>
            {details.data.map((el) => (
                <Item key={el.expName} {...el} width={width} />
            ))}
        </ExprienceContainer>
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
            <Summary {...props} showLinks={mouseOver} />
        </div>
    );
}

const ItemContainer = styled.div`
    ${flexColumn}
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #fdfffc;
    transition: all 1s;
    padding: 6% 0;
    & h4 {
        padding: 5px;
        font-size: 25px;
        text-align: center;
    }
    &:hover {
        padding: 6% 0;
        justify-content: space-evenly;
        background-color: #edf2f4;
    }
`;

const Description = styled.label`
    text-align: center;
    margin: 0px 35px;
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

interface ISummary extends ItemProps {
    showLinks: boolean;
}

function Summary(props: ISummary) {
    return (
        <ItemContainer>
            <h4>{props.expName}</h4>
            {props.showLinks && (
                <div
                    css={`
                        display: flex;
                    `}
                >
                    {props.links.map((el) => (
                        <ProjectLink key={el.href} {...el} />
                    ))}
                </div>
            )}
            <Description>{props.expDetails}</Description>
            <SkillsContainer>
                {props.techStack.map((el) => (
                    <Skill key={el} skill={el} />
                ))}
            </SkillsContainer>
        </ItemContainer>
    );
}

const SkillPill = styled.div`
    display: inline-block;
    margin: 5px;
    padding: 5px 10px;
    min-width: 50px;
    text-align: center;
    border-radius: 20px;
    background-color: #ffbf69;
`;

function Skill({ skill }: { skill: string }) {
    return (
        <SkillPill>
            <label>{skill}</label>
        </SkillPill>
    );
}
