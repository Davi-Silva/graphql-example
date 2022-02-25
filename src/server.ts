import { PORT, APP_NANE } from "./constants/server";

import app from "./app";

app.listen(PORT, () => {
  console.log(`${APP_NANE} is listening on port ${PORT}`);
});
