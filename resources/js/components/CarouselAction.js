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

  parseDBDateTime(datetime){
    console.log('datetime:', datetime);
    if(datetime == '')
      return new Date(Date.now());
    let [date, time] = datetime.split(' ');
    let [Y,M,D] = date.split('-');
    time = time.slice(0, -3);
    let [h,m,s] = time.split(':');
    return new Date(Date.UTC(Y,M-1,D,h,m,s));
  }

  render() {
const { index, direction } = this.state;
const { events } = this.props;

return (
	<React.Fragment>
		<Carousel
		activeIndex={index}
		direction={direction}
		onSelect={this.handleSelect}
		className="carousel"
		>
		{events.map(events => (
		<Carousel.Item key={events.title}>
		<Link to={"/event/"+events.id}>
		<div className="carouselMask">
			<p className="carouselTitle text-center">{events.title}</p>
			<p className="carouselTitle text-center">{this.parseDBDateTime(events.begin_time).toLocaleString()}</p>
	    </div>
				<img
					className="carouselImg d-block w-100 ofc"
					src={"data:image;base64,"+events.image}
					alt={events.title}
				/>
				<Carousel.Caption>


				</Carousel.Caption>
			</Link>
		</Carousel.Item>
		))}

		</Carousel>
	</React.Fragment>
    );
  }
}
