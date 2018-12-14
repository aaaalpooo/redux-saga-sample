import { createStore, applyMiddleware, compose } from "redux";
// import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import modules, { rootSaga } from "./modules";

const configure = preloadedState => {
  const devTools =
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = devTools || compose;
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    modules,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configure;
