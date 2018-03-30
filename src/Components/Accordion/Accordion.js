import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// 'Minimal' theme - hide/show the AccordionBody component:
// import 'react-accessible-accordion/dist/minimal-example.css';

// 'Fancy' theme - boilerplate styles for all components, as seen on our demo:
import 'react-accessible-accordion/dist/fancy-example.css';

import './style.css';

class Accordions extends Component {
	render() {
		return(
		 	<Accordion>
		    <AccordionItem>
		        <AccordionItemTitle>
		          <span>Contact</span> <div className="accordion__arrows" role="presentation"></div>
		        </AccordionItemTitle>
		        <AccordionItemBody>
		            <a href="mailto:info@hgdtcapital.com">info@hgdtcapital.com</a>
		        </AccordionItemBody>
		    </AccordionItem>
		    <AccordionItem>
		        <AccordionItemTitle>
		          <span>Locations</span><div className="accordion__arrows" role="presentation"></div>
		            
		        </AccordionItemTitle>
		        <AccordionItemBody>
		          <div>
			          <p>New York</p>
			          <a href="https://goo.gl/maps/iXaebnQaXVR2" target="_blank" className="locate" rel="noopener noreferrer">
									10 Hudson Yards<br/>
									Floor 22<br/>
									New York, NY 10001<br/>
								</a>
							</div>
							<hr/>
		          <div>
		           	<p>Shanghai</p>
		          	<a href="https://goo.gl/maps/T4wj4G4UMrm" target="_blank" className="locate" rel="noopener noreferrer">
									111 Pudong S Rd, Pudong Xinqu<br/>
									Floor 5<br/>
									Shanghai Shi, China, 200120<br/>
								</a>
		          </div>
		        </AccordionItemBody>
		    </AccordionItem>
	  	</Accordion>
	  )
	}
}
export default Accordions;