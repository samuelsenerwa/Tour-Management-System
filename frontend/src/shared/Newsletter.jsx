import React from 'react'
import './newsletter.css'

import {Container, Row, Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscirbe now to get useful travelling information</h2>

                        <div className='newsletter__input'>
                            <input type='email' placeholder='Enter your email'/>
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id laboriosam et corrupti. Ad velit corporis, autem et nostrum, cupiditate assumenda molestias, ullam expedita aliquam quasi illo! Corrupti illo assumenda vitae!</p>
                        </div>
                        </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter