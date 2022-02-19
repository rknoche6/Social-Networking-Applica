import React from "react";
import { shallow } from "enzyme";
import EditPost from "./editPost";

describe("EditPost", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <EditPost post={{ post_id: 1, description: "Post" }} />
      ))
  );

  it("should render a <button />", () => {
    expect(wrapper.find("button").length).toEqual(4);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(7);
  });
});