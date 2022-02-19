import React from "react";
import { shallow } from "enzyme";
import AddPost from "./addPost";

describe("AddPost", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<AddPost />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <h1 />", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });

  it("should render a <form />", () => {
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("adds a post via the online form", () => {
    const eventObj = { target: { value: "test post" } };
    expect(wrapper.find("input.form-control").props().value).toBe("");
    wrapper.find("input.form-control").simulate("change", eventObj);
    expect(wrapper.find("input.form-control").props().value).toBe("test tweet");
  });
});