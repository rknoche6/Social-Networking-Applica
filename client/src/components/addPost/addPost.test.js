import React from "react";
import { shallow } from "enzyme";
import AddPost from "./addPost";

describe("AddPost", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<AddPost />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
