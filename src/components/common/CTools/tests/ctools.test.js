/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

/* eslint-env jest */

import { mount } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";
import Ctools from "../index";

describe("CTools", () => {
  let wrapper;

  describe("index", () => {
    beforeEach(() => {
      wrapper = mount(<Ctools cdfEmbedPath="" dashboardPath="" />);
    });

    it("should match snapshot", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
