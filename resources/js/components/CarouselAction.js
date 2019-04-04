import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default class CarouselAction extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;
    const { events } = this.props

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
      {events.map(events => (
        <Carousel.Item key={events.title}>
          <Link to="/event"><img
            className="carouselImg d-block w-100 ofc"
            src="https://cdn.vox-cdn.com/thumbor/DguuAZdbrvcEFg4BcSFazw6iESk=/0x0:1360x1021/1200x800/filters:focal(572x403:788x619)/cdn.vox-cdn.com/uploads/chorus_image/image/59621519/GettyImages_82770182.0.jpg"
            alt={events.title}
          />
          <Carousel.Caption>
            
          
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
        
      </Carousel>
    );
  }
}
