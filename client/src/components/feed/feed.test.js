import React from "react";
import { shallow } from "enzyme";
import AllPosts from "./allPosts";

describe("AllPosts", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<AllPosts />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});