import React, { useState } from 'react'
import { Observable } from 'rxjs/Rx';
import styled from 'styled-components';

const Wrapper = styled.div`
width:50%;
height:300px;
`;
const SensorWrapper = styled.div`
height:50px;
background:blue;
margin-top:16px;
display:flex;
justify-content:space-around;
align-items:center;
`;
const Title = styled.span`
width:30%;
`;
const Content = styled.span`
width:30%;
`;
function generateRandomNumber(n) {
  return Math.floor(Math.random() * n);
}
function intervalCall(setValue,max,min ) {
  let timeRange = 0;
  Observable.of(null)
    .concatMap(() =>
      Observable.timer((timeRange = Math.floor(Math.random() * (max - min + 1)) + min)),
    )
    .do(() => {
      const temp = Number(timeRange) > 1300 ? 'not data' : generateRandomNumber(1500);
      setValue(temp);
    })
    .repeat()
    .subscribe();
}
const SensorContainer = () => {
  const [sensorA, setSensorA] = useState(0)
  const [sensorB, setSensorB] = useState(0)
  const [sensorC, setSensorC] = useState(0)
  const [sensorD, setSensorD] = useState(0)
  React.useEffect(() => {
    intervalCall(setSensorA, 1500, 200)
    intervalCall(setSensorB, 1500, 200)
    intervalCall(setSensorC, 1500, 200)
    intervalCall(setSensorD, 1500, 200)
  }, [])
  return (
    <Wrapper>
      <SensorWrapper>
        <Title data-testid="sensorA">Sensor A</Title>
        <Content data-testid="valueSensor">{sensorA}</Content>
      </SensorWrapper>
      <SensorWrapper>
        <Title data-testid="sensorB">Sensor B</Title>
        <Content data-testid="valueSensor" >{sensorB}</Content>
      </SensorWrapper>
      <SensorWrapper>
        <Title data-testid="sensorC">Sensor C</Title>
        <Content data-testid="valueSensor">{sensorC}</Content>
      </SensorWrapper>
      <SensorWrapper>
        <Title data-testid="sensorD">Sensor D</Title>
        <Content data-testid="valueSensor">{sensorD}</Content>
      </SensorWrapper>
    </Wrapper>
  )
}

export default SensorContainer
