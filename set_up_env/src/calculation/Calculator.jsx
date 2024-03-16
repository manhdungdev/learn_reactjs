import React, { Component } from 'react';
import CaculatorInput from './CaculatorInput';
import Boiling from './Boiling';

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: '',
      scale: 'c'
    };
  }

  handleTemperatureChange = (scale) => (value) => {
    this.setState({ temperature: value, scale });
  };

  convertTemperature(temperature, inputScale) {
    const temperatureVal = parseFloat(temperature);
    if (Number.isNaN(temperatureVal)) {
      return '';
    }

    const result = inputScale === 'c' ? temperatureVal * 1.8 + 32 : (temperatureVal - 32) / 1.8;

    return Math.round(result * 1000) / 1000;
  }

  render() {
    const { temperature, scale } = this.state;
    const tempF = scale === 'c' ? this.convertTemperature(temperature, scale) : temperature;
    const tempC = scale === 'f' ? this.convertTemperature(temperature, scale) : temperature;
    return (
      <div>
        <CaculatorInput
          title='Celcius'
          temperature={tempC}
          handleTemperatureChange={this.handleTemperatureChange('c')}
        />
        <CaculatorInput
          title='Fahrenheit'
          temperature={tempF}
          handleTemperatureChange={this.handleTemperatureChange('f')}
        />

        <Boiling celcius={parseFloat(tempC)} />
      </div>
    );
  }
}

export default Calculator;
