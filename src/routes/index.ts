import { Application } from "express";

import graphql from "../graphql";

export default (app: Application): void => {
  app.use("/graphql", graphql);
};
