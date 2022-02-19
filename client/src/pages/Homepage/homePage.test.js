import React from "react";
import { shallow, render } from "enzyme";
import HomePage from "./homePage";
import AddPost from "./../AddPost/addPost";
import AllPosts from "./../AllPosts/allPosts";

describe("HomePage", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<HomePage />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the AddPost Component", () => {
    expect(wrapper.containsMatchingElement(<AddPost />)).toEqual(true);
  });

  it("should render the AllPosts Component", () => {
    expect(wrapper.containsMatchingElement(<AllPosts />)).toEqual(true);
  });
});