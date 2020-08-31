import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Launches from "./index";
import LaunchesComp from "../../components/Launches";
describe("Render App", () => {
  let AppWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  beforeEach(() => (AppWrapper = shallow(<Launches />)));
  it("should render a div", () => {
    expect(AppWrapper.find("div").length).toEqual(7);
  });
  it("should render a h1 with text SpaceX Launches", () => {
    expect(AppWrapper.find("h1").length).toEqual(1);
    expect(AppWrapper.find("h1").text()).toBe("SpaceX Launches");
  });
  it("should render p's", () => {
    expect(AppWrapper.find("p").length).toEqual(4);
    expect(AppWrapper.find("p").slice(0, 1).text()).toEqual("=");
    expect(AppWrapper.find("p").slice(1, 2).text()).toEqual("Success");
    expect(AppWrapper.find("p").slice(2, 3).text()).toEqual("=");
    expect(AppWrapper.find("p").slice(3, 4).text()).toEqual("Fail");
  });
  it("should render LaunchesComp", () => {
    expect(AppWrapper.containsMatchingElement(<LaunchesComp />)).toBe(true);
  });
});
