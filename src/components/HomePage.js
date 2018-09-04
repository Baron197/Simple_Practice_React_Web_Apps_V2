import React, { Component } from 'react';
import CarouselBro from './CarouselBro';
import image1 from '../images/bdo1.jpg';
import image2 from '../images/bdo2.jpg';
import image3 from '../images/back.jpg';

class HomePage extends Component {

    state = { arrKursi: [{cbChecked: true, cbDisabled: true}, 
                        {cbChecked: false, cbDisabled: false}] }

    onCBClicked = (kursiKe) => {
        if(!this.state.arrKursi[kursiKe].cbDisabled) {
            this.state.arrKursi[kursiKe].cbChecked = !this.state.arrKursi[kursiKe].cbChecked;
            this.setState({ });
        }
    }

    render() {
        return (
            <div style={{ marginTop: "80px" }}>
                <CarouselBro 
                    legend1={"BDO Image 1"} 
                    image1={image1} 
                    legend2={"BDO Image 2"} 
                    image2={image2} 
                    legend3={"BDO Image 3"} 
                    image3={image3}
                    munculText={false}
                    textnya={"Hello Bro Coy"}
                />
                <input type="checkbox" 
                    checked={this.state.arrKursi[0].cbChecked} 
                    disabled={this.state.arrKursi[0].cbDisabled} 
                    onClick={() => this.onCBClicked(0)}
                />
                <input type="checkbox" 
                    checked={this.state.arrKursi[1].cbChecked} 
                    disabled={this.state.arrKursi[1].cbDisabled} 
                    onClick={() => this.onCBClicked(1)}
                />
            </div>
        );
    }
}

export default HomePage;