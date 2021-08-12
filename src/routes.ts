import { Router } from "express";
import { clientController } from "./controllers/clientController";
import { clientRequestController } from "./controllers/clientRequestController";
import { igredientController } from "./controllers/ingredientController";
import { requestController } from "./controllers/requestController";
import { requestIngredientController } from "./controllers/requestIngredientsController";
import { sessionController } from "./controllers/sessionController";

const routes = Router();

routes.post("/client", clientController.create);
routes.get("/client", clientController.list);
routes.get("/client-by-id/:id", clientController.getByID);
routes.get("/client-by-email/:email", clientController.getByEmail);

routes.post("/ingredient", igredientController.create);
routes.get("/ingredient", igredientController.list);
routes.get("/ingredient-by-id/:id", igredientController.getByID);
routes.delete("/ingredient-delete/:id", igredientController.delete);
routes.put("/ingredient-update/:id", igredientController.update);
routes.get('/ingredient-by-type', igredientController.listByType);

routes.post("/request", requestController.create);
routes.get("/request", requestController.list);
routes.get("/requestiby-id/:id", requestController.getByID);
routes.put("/request-update/:id", requestController.update);

routes.post("/client-request", clientRequestController.create);
routes.get("/client-request", clientRequestController.list);
routes.get(
  "/client-Request-By-Client-Id/:clientId",
  clientRequestController.getByClientID
);
routes.get(
  "/client-Request-All-By-Client-Id/:clientId",
  clientRequestController.getAllByClientID
);
routes.delete(
  "/client-Request-Delete/:clientId/:requestId",
  clientRequestController.delete
);

routes.post("/request-Ingredient", requestIngredientController.create);
routes.get("/request-Ingredient", requestIngredientController.list);
routes.get(
  "/request-Ingredient-ById/:requestId",
  requestIngredientController.getByRequesttID
);
routes.delete(
  "/request-Ingredient-Delete/:requestId/:ingredientId",
  requestIngredientController.deleteIngredient
);

routes.post('/session', sessionController.create);

export { routes };
