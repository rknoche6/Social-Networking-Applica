import React from "react";
import { shallow } from "enzyme";
import LogInPage from "./loginPage";

describe("LogInPage", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<LogInPage />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});