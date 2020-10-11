import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../utils/index.js"
import Header from "./Header";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    // const component = shallow(<Header />);
    // const component = setUp();
    // const wrapper = component.find(`[data-test="headerWrapper"]`);
    const wrapper = findByTestAttr(component, "headerWrapper");
    expect(wrapper.length).toBe(1);
  });
});
