import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Home from "./index";

describe("Render App", () => {
  let AppWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  beforeEach(() => (AppWrapper = shallow(<Home />)));
  it("should render a div", () => {
    expect(AppWrapper.find("div").length).toEqual(1);
  });
  it("should render a h1", () => {
    expect(AppWrapper.find("h1").length).toEqual(1);
  });
  it("should render welcome text in h1", () => {
    expect(AppWrapper.find("h1").text()).toBe(`Welcome to SpaceX`);
  });
  it("should render a p", () => {
    expect(AppWrapper.find("p").length).toEqual(1);
  });
  it("should render a button with text Explore Launches", () => {
    expect(AppWrapper.find("button").length).toEqual(1);
    expect(AppWrapper.find("button").text()).toBe("Explore Launches");
  });
});
