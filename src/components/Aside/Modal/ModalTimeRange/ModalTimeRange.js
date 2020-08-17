import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import styled from 'styled-components'
import { SliderRail, Handle, Track} from "./ModalTimeRangeComponents"; // example render components - source below
import { addHours, startOfToday} from "date-fns";

const sliderStyle = {
  width: "100%"
};
const SliderContainer = styled.div`
  position: relative;
  height: 54px; 
  width: 100%;
  margin-top: 79px;
  margin-bottom: 29px;
`;


// function formatTick(ms) {
//   return format(new Date(ms), "HH mm");
// }

const today = startOfToday();
const startTime = addHours(today, 7);
const endTime = addHours(today, 19);
const min = startTime;
const max = endTime;
const oneMinute = 1000 * 60;
   
class ModalTimeRange extends Component {
  render() {
  const { values, updateValues  } = this.props;

    // const dateTicks = scaleTime()
    //   .domain([min, max])
    //   .ticks(12)
    //   .map(d => +d);

    return (
      <div>  
        <SliderContainer>
          <Slider
            mode={2}
            step={oneMinute}
            domain={[+min, +max]}
            rootStyle={sliderStyle}
            values={values}
            onChange={updateValues}
          >
            <Rail>
              {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
            </Rail>
            <Handles>
              {({ handles, getHandleProps }) => (
                <div>
                  {handles.map(handle => (
                    <Handle
                      key={handle.id}
                      handle={handle}
                      domain={[+min, +max]}
                      getHandleProps={getHandleProps}
                    />
                  ))}
                </div>
              )}
            </Handles>
            <Tracks right={false} left={false}>
              {({ tracks, getTrackProps }) => (
                <div>
                  {tracks.map(({ id, source, target }) => (
                    <Track
                      key={id}
                      source={source}
                      target={target}
                      getTrackProps={getTrackProps}
                    />
                  ))}
                </div>
              )}
            </Tracks>
            {/* <Ticks values={dateTicks}>
              {({ ticks }) => (
                <div>
                  {ticks.map(tick => (
                    <Tick
                      key={tick.id}
                      tick={tick}
                      count={ticks.length}
                      format={formatTick}
                    />
                  ))}
                </div>
              )}
            </Ticks> */}
          </Slider>
        </SliderContainer>
      </div>
    );
  }
}

export default ModalTimeRange