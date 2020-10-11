import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../../utils/index.js";
import StopWatch from "./StopWatch";
// import checkPropTypes from "check-prop-types";

const setUp = (props = {}) => {
  const component = shallow(<StopWatch {...props} />);
  return component;
};

describe("StopWatch Component", () => {
    describe("Checking PropTypes", () => {
        it("Should not throw a warning", () => {
            const expectedProps = {
                setStartTime: () => {},
                setEndTime: () => {},
                openAlert: () => {},
                openModal: () => {},
                duration: 234
            }
            const propsErr = checkProps(StopWatch, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })
})