import { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import './HomeComponent.css'



export function HomeComponent() {

    const [countMario, setCountMario] = useState(0);
    const [countSonic, setCountSonic] = useState(0);
    const [countCrash, setCountCrash] = useState(0);
    const [countPacman, setCountPacman] = useState(0);


    const sumarMario = () => {
        if (countMario >= 0) {
            setCountMario(countMario + 10)
        }
    }
    const restarMario = () => {
        if (countMario > 0) {
            setCountMario(countMario - 10)
        }
    }

    const sumarSonic = () => {
        if (countSonic >= 0) {
            setCountSonic(countSonic + 10)
        }
    }
    const restarSonic = () => {
        if (countSonic > 0) {
            setCountSonic(countSonic - 10)
        }
    }

    const sumarCrash = () => {
        if (countCrash >= 0) {
            setCountCrash(countCrash + 10)
        }
    }
    const restarCrash = () => {
        if (countCrash > 0) {
            setCountCrash(countCrash - 10)
        }
    }
    const sumarPacman = () => {
        if (countPacman >= 0) {
            setCountPacman(countPacman + 10)
        }
    }
    const restarPacman = () => {
        if (countPacman > 0) {
            setCountPacman(countPacman - 10)
        }
    }


    return (
        <Container className='contHome'>
            <Row className='rowHome'>
                <Col lg={6} className='colHomeMario'>
                    <Button onClick={sumarMario} className='btnCharacter'>
                        <Image className='imgCharacterMario' src="../../img/mariobros.png" alt="" />
                    </Button>
                    <Button onClick={restarMario} className='btnCharacter'>
                        <h3 className='textCharacter'>{countMario}</h3>
                    </Button>
                </Col>
                <Col lg={6} className='colHome'>
                    <Button onClick={sumarPacman} className='btnCharacter'>
                        <Image className='imgCharacterPacman' src="../../img/pacman.png" alt="" />
                    </Button>
                    <Button onClick={restarPacman} className='btnCharacter'>
                        <h3 className='textCharacter'>{countPacman}</h3>
                    </Button>
                </Col>
            </Row>
            <Row className='rowHome'>
                <Col lg={6} className='colHomeSonic'>
                    <Button onClick={sumarSonic} className='btnCharacter'>
                        <Image className='imgCharacterSonic' src="../../img/sonic.png" alt="" />
                    </Button>
                    <Button onClick={restarSonic} className='btnCharacter'>
                        <h3 className='textCharacter'>{countSonic}</h3>
                    </Button>
                </Col>
                <Col lg={6} className='colHome'>
                    <Button onClick={sumarCrash} className='btnCharacter'>
                        <Image className='imgCharacterCharsh' src="../../img/crash.png" alt="" />
                    </Button>
                    <Button onClick={restarCrash} className='btnCharacter'>
                        <h3 className='textCharacterCrash'>{countCrash}</h3>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}