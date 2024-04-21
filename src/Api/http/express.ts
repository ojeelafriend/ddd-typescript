import express from "express";

export const App = express();

App.use(express.json(), express.urlencoded({ extended: false }));

App.use(express.static(`/public`));
