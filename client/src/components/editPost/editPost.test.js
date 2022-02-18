import React from "react";
import { shallow } from "enzyme";
import EditPost from "./editPost";

describe("EditPost", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<EditPost />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <h1 />", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });
});