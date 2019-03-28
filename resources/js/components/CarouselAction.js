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
        <Carousel.Item>
          <img
            className="d-block w-100 vh-100 ofc"
            src="https://i.ytimg.com/vi/5iGE_wIDOTk/maxresdefault.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <Link to="/">
              <Button>
                View more info on {events.title}
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
        
      </Carousel>
    );
  }
}