import { App } from "./http/express";
import database from "../Contexts/Shared/database";
import routes from "./routes/index.routes";

routes(App);

App.listen(process.env.PORT_SERVER, async () => {
  console.log(`Server is ready`);
  await database.run();
});
