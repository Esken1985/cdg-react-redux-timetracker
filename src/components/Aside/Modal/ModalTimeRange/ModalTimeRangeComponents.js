import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {format} from "date-fns"

// *******************************************************
// RAIL
// *******************************************************
const railOuterStyle = {
  position: "absolute",
  width: "100%",
  height: 40,
  transform: "translate(0%, -50%)",
  cursor: "pointer"
  // border: "1px solid grey"
};

const railInnerStyle = {
  position: "absolute",
  width: "100%",
  height: 8,
  transform: "translate(0%, -50%)",
  borderRadius: 4,
  pointerEvents: "none",
  backgroundColor: "#F0F3F5"
};

export function SliderRail({ getRailProps }) {
  return (
    <Fragment>
      <div style={railOuterStyle} {...getRailProps()} />
      <div style={railInnerStyle} />
    </Fragment>
  );
}

SliderRail.propTypes = {
  getRailProps: PropTypes.func.isRequired
};

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
export function Handle({
  domain: [min, max],
  handle: { id, value, percent },
  disabled,
  getHandleProps
}) {
  return (
    <Fragment>
      <div
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          WebkitTapHighlightColor: "#FFCC40",
          zIndex: 5,
          width: 24,
          height: 42,
          cursor: "pointer",
          backgroundColor: "none"
        }}
        {...getHandleProps(id)}
      >
        <div style={{height: 10, width: 1, backgroundColor: "#FFCC40", marginLeft: 12, position: "absolute", top: 37}}></div>
      </div>
      
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: 0,
          zIndex: 2,
          width: 20,
          height: 20,
          borderRadius: "50%",
          boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",
          backgroundColor: disabled ? "#666" : "#FFCC40"
        }}
      >
          <div style={{ fontFamily: 'Roboto', fontSize: 11, marginTop: 42,}}>
            {format(value, "HH:mm")}
          </div>
      </div>
      
    </Fragment>
  );
}

Handle.propTypes = {
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Handle.defaultProps = {
  disabled: false
};

// *******************************************************
// TRACK COMPONENT
// *******************************************************
export function Track({ source, target, getTrackProps, disabled }) {
  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(0%, -50%)",
        height: 8,
        zIndex: 1,
        backgroundColor: disabled ? "#999" : "#FFCC40",
        borderRadius: 4,
        cursor: "pointer",
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`
      }}
      {...getTrackProps()}
    />
  );
}

Track.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  target: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getTrackProps: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Track.defaultProps = {
  disabled: false
};

