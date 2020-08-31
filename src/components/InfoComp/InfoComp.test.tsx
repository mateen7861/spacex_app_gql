import React from "react";
import { shallow, ShallowWrapper, ReactWrapper } from "enzyme";
import InfoComp from "./index";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

describe("Render App", () => {
  let AppWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  AppWrapper = shallow(<InfoComp />);

  it("should render a List", () => {
    expect(AppWrapper.find(List).length).toEqual(1);
  });
  it("should render a List", () => {
    expect(AppWrapper.find(List).length).toEqual(1);
  });
  it("should render 6 ListItem and ListItemText", () => {
    expect(AppWrapper.find(ListItem).length).toEqual(6);
    expect(AppWrapper.find(ListItemText).length).toEqual(6);
  });
});
