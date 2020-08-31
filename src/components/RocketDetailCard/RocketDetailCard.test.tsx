import React from "react";
import { ReactWrapper, mount } from "enzyme";
import RocketCardDetail from "./index";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

describe("Render App", () => {
  let AppWrapper:
    | any[]
    | ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  AppWrapper = mount(
    <RocketCardDetail rocketId="12" rocketName="mRocket" rocketType="mType" />
  );

  it("should render a List", () => {
    expect(AppWrapper.find(List).length).toEqual(1);
  });
  it("should render a 3 ListItem and ListItemText", () => {
    expect(AppWrapper.find(ListItem).length).toEqual(3);
    expect(AppWrapper.find(ListItemText).length).toEqual(3);
  });
  it("should render Rocket Id", () => {
    expect(AppWrapper.find(ListItemText).slice(0, 1).text()).toBe(
      "Flight Number : 12"
    );
  });
  it("should render Rocket Name", () => {
    expect(AppWrapper.find(ListItemText).slice(1, 2).text()).toBe(
      "Rocket Name : mRocket"
    );
  });
  it("should render Rocket Type", () => {
    expect(AppWrapper.find(ListItemText).slice(2, 3).text()).toBe(
      "Rocket Type: mType"
    );
  });
});
