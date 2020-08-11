import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./ModalTimeRangeComponents"; // example render components - source below
import { addHours, startOfToday, format } from "date-fns";
import { scaleTime } from "d3-scale";

const sliderStyle = {
  position: "relative",
  width: "100%"
};

function formatTick(ms) {
  return format(new Date(ms), "HH mm");
}

const today = startOfToday();
const startTime = addHours(today, 7);
const endTime = addHours(today, 19);
const min = startTime;
const max = endTime;
const quarterHour = 1000 * 60 * 15;
   
class ModalTimeRange extends Component {
  render() {
  const { values, updateValues  } = this.props;

    const dateTicks = scaleTime()
      .domain([min, max])
      .ticks(12)
      .map(d => +d);

    return (
      <div>
        <div style={{ margin: "5%", height: 120, width: "90%" }}>
          <Slider
            mode={2}
            step={quarterHour}
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
            <Ticks values={dateTicks}>
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
            </Ticks>
          </Slider>
        </div>
      </div>
    );
  }
}

export default ModalTimeRange