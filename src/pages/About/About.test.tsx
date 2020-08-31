import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import About from "./index";
import InfoComp from "../../components/InfoComp";

describe("Render About", () => {
  let AppWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  beforeEach(() => (AppWrapper = shallow(<About />)));
  it("should render div", () => {
    expect(AppWrapper.find("div").length).toBeGreaterThanOrEqual(1);
  });
  it("should render an image", () => {
    expect(AppWrapper.find("img").length).toEqual(1);
  });
  it("should render two p", () => {
    expect(AppWrapper.find("p").length).toEqual(2);
  });
  it("should render a InfoComp", () => {
    expect(AppWrapper.containsMatchingElement(<InfoComp />)).toBe(true);
  });
});
