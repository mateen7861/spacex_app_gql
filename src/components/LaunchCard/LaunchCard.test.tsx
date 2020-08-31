import React from "react";
import { shallow, ShallowWrapper, ReactWrapper } from "enzyme";
import LaunchCard from "./index";

describe("Render App", () => {
  let AppWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  AppWrapper = shallow(
    <LaunchCard
      flightNumber={12}
      mission="mySat"
      launchDate="2020-09-30T20:00:00-04:00"
      launchSuccess={true}
    />
  );

  it("should render two divs", () => {
    expect(AppWrapper.find("div").length).toEqual(2);
  });
  it("should render a h1 with title of mission name and flight number", () => {
    expect(AppWrapper.find("h1").length).toEqual(1);
    expect(AppWrapper.find("h1").text()).toBe("12. Mission : mySat");
  });
  it("should render one span with text of mission name ", () => {
    expect(AppWrapper.find("span").length).toEqual(1);
    expect(AppWrapper.find("span").text()).toBe("mySat");
  });
  it("should render one p with text of formated date ", () => {
    expect(AppWrapper.find("p").length).toEqual(1);
    expect(AppWrapper.find("p").text()).toBe("October 1st, 2020");
  });
  it("should render one button with text of Launch Details ", () => {
    expect(AppWrapper.find("button").length).toEqual(1);
    expect(AppWrapper.find("button").text()).toBe("Launch Details");
  });
});
