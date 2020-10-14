import React, { useEffect, useState } from 'react';
import { Header, ProjectLink } from './GeneralComponents';
import { DEV, BIZ, ItemData } from './data';
import styled from '@emotion/styled';
import { flexColumn, pillCss, fadeIn, absolutePos } from 'styles';

interface IExp {
    name: string;
    data: ItemData[];
}

interface ISections {
    dev: IExp;
    biz: IExp;
}

const SECTIONS: ISections = {
    dev: { name: 'Developer', data: DEV },
    biz: { name: 'Business', data: BIZ },
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
    const [type, setType] = useState('dev');
    const [windowWidth, setWindowWidth] = useState(0);

    const updateDimensions = () => {
        setWindowWidth(window?.innerWidth ?? 0);
    };

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const changeType = () => {
        setType(type === 'dev' ? 'biz' : 'dev');
    };

    return (
        <AppContainer>
            <Header changeType={changeType} />
            <SectionWrapper>
                <ExperienceContainer details={SECTIONS[type]} width={windowWidth} />
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

function ExperienceContainer({ details, width }: IExpContainer & { width: number }) {
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
    minHeight: '300px',
    borderBottom: '1px solid #000000',
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
    position: relative;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #fdfffc;
    transition: all 1s;
    padding: 6% 0;
    padding-top: 52px;
    & h4 {
        margin-bottom: 15px;
        padding: 5px;
        font-size: 25px;
        text-align: center;
    }
    &:hover {
        background-color: #edf2f4;
    }
`;

const Description = styled.label`
    text-align: center;
    margin: 0px 35px 10px 35px;
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const FlexContainer = styled.div`
    ${absolutePos}
    top: 0;
    left: 10px;
`;

const ExprienceTag = styled.div`
    ${absolutePos}
    top: 0;
    right: 0;
`;

const NoLinks = styled.div`
    ${pillCss}
    animation: ${fadeIn} 1.5s forwards;
    background-color: #00000085;
    color: white;
    font-weight: 500;
`;

interface ISummary extends ItemProps {
    showLinks: boolean;
}

function Summary(props: ISummary) {
    return (
        <ItemContainer>
            {props.showLinks && (
                <FlexContainer>
                    {props.links.length ? (
                        props.links.map((el) => <ProjectLink key={el.href} {...el} />)
                    ) : (
                        <NoLinks>No Links</NoLinks>
                    )}
                </FlexContainer>
            )}
            {props.expTag && (
                <ExprienceTag>
                    <NoLinks>{props.expTag}</NoLinks>
                </ExprienceTag>
            )}
            <h4>{props.expName}</h4>
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
    ${pillCss}
    background-color: #ffbf69;
`;

function Skill({ skill }: { skill: string }) {
    return (
        <SkillPill>
            <label>{skill}</label>
        </SkillPill>
    );
}
