/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import withLayout from "lib/hocs/withLayout";
import { LoginForm } from "components/login";
import { LoginProps } from "./index";

const Login: React.FC<LoginProps> = ({ classes, login }: LoginProps) => {
  return (
    <div className={classes.root}>
      <LoginForm login={login} />
    </div>
  );
};

export default withLayout(Login, true);