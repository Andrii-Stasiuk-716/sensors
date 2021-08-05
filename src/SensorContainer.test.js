import { fireEvent, getAllByTestId, render, screen } from '@testing-library/react';
import SensorContainer from './components/SensorContainer';

describe("SensorContainer", () => {
  it("renders SensorContainer component", () => {
    render(<SensorContainer />);
    let sensors = screen.getAllByText(/sensor/i)
    expect(sensors.length).toBe(4)
  })
  it("sensor A", () => {
    render(<SensorContainer />);
    let sensors = screen.getAllByTestId('valueSensor')
    sensors.forEach((sensor) => expect(sensor.textContent).toEqual('0'))
  })
})




