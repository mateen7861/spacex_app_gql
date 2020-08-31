import React from "react";
import { ReactWrapper, mount } from "enzyme";
import LaunchCardDetail from "./index";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

describe("Render App", () => {
  let AppWrapper:
    | any[]
    | ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  AppWrapper = mount(
    <LaunchCardDetail
      flightNumber={12}
      ldate="2006-03-25T10:30:00+12:00"
      launchsite="Bermuda"
      details="this launch was passed"
      launchSuccess={true}
    />
  );

  it("should render a List", () => {
    expect(AppWrapper.find(List).length).toEqual(1);
  });
  it("should render a 5 ListItem and ListItemText", () => {
    expect(AppWrapper.find(ListItem).length).toEqual(5);
    expect(AppWrapper.find(ListItemText).length).toEqual(5);
  });
  it("should render Flight Number", () => {
    expect(AppWrapper.find(ListItemText).slice(0, 1).text()).toBe(
      "Flight Number : 12"
    );
  });
  it("should render formated date", () => {
    expect(AppWrapper.find(ListItemText).slice(1, 2).text()).toBe(
      "Launch Date : March 25th, 2006"
    );
  });
  it("should render Launch Site", () => {
    expect(AppWrapper.find(ListItemText).slice(2, 3).text()).toBe(
      "Launch Site : Bermuda"
    );
  });
  it("should render Launch Success", () => {
    expect(AppWrapper.find(ListItemText).slice(3, 4).text()).toBe(
      "Launch Success : Yes"
    );
  });
  it("should render Launch Details", () => {
    expect(AppWrapper.find(ListItemText).slice(4, 5).text()).toBe(
      "Launch Details : this launch was passed"
    );
  });
});
