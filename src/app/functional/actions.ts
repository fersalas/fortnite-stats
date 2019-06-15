import { createStandardAction, ActionType } from "typesafe-actions";

const SAMPLE_ACTION = "APP:SAMPLE_ACTION";
const SAMPLE_ACTION_WITH_PAYLOAD = "APP:SAMPLE_ACTION_WITH_PAYLOAD";

// Redux Action Creators
// ---------------------
// These functions create redux action objects. They should strive to be side-effect free.
// the action object format is defined by Flux Standard Action. https://github.com/acdlite/flux-standard-action
export const actions = {
    sampleAction: createStandardAction(SAMPLE_ACTION)(),

    sampleActionWithPayload: createStandardAction(SAMPLE_ACTION_WITH_PAYLOAD)<number>(),
};

export type Action = ActionType<typeof actions>;
