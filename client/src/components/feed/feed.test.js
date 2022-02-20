import React from "react";
import { shallow } from "enzyme";
import AllPosts from "./allPosts";

describe("AllPosts", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<AllPosts />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <h1 />", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });
});