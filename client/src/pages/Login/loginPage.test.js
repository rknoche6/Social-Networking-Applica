import React from "react";
import { shallow } from "enzyme";
import LogInPage from "./loginPage";
import Alert from 'react-bootstrap/Alert'

describe("LogInPage", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<LogInPage />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <form />", () => {
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("should render a <button />", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("should render a <h1 />", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });
});