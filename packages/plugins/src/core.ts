import { createPlugin } from "@quarkloop/plugin";
import { PipelineState, PluginStatusEntry } from "./pipeline";

import { ApiResponse } from "@quarkloop/types";

/// GetApiResponse
export interface GetApiResponse extends ApiResponse {}
export interface GetApiResponsePluginArgs {}

/// GetApiResponse Plugin
export const GetApiResponsePlugin = createPlugin<
    PipelineState,
    GetApiResponsePluginArgs[]
>({
    name: "GetApiResponsePlugin",
    config: {},
    handler: async (state, config, ...args): Promise<PipelineState> => {
        // Error Response
        if (state.status) {
            return {
                ...state,
                apiResponse: {
                    status: state.status,
                },
            };
        }

        // Success Response
        return {
            ...state,
            apiResponse: {
                status: PluginStatusEntry.OK(),
                ...(state.database && { database: state.database }),
            },
        };
    },
});

/// CreateApiResponse
export interface CreateApiResponse extends ApiResponse {}
export interface CreateApiResponsePluginArgs {}

/// CreateApiResponse Plugin
export const CreateApiResponsePlugin = createPlugin<
    PipelineState,
    CreateApiResponsePluginArgs[]
>({
    name: "CreateApiResponsePlugin",
    config: {},
    handler: async (state, config, ...args): Promise<PipelineState> => {
        // Error Response
        if (state.status) {
            return {
                ...state,
                apiResponse: {
                    status: state.status,
                },
            };
        }

        // Success Response
        return {
            ...state,
            apiResponse: {
                status: PluginStatusEntry.CREATED(),
                ...(state.database && { database: state.database }),
            },
        };
    },
});

/// UpdateApiResponse
export interface UpdateApiResponse extends ApiResponse {}
export interface UpdateApiResponsePluginArgs {}

/// UpdateApiResponse Plugin
export const UpdateApiResponsePlugin = createPlugin<
    PipelineState,
    UpdateApiResponsePluginArgs[]
>({
    name: "UpdateApiResponsePlugin",
    config: {},
    handler: async (state, config, ...args): Promise<PipelineState> => {
        // Error Response
        if (state.status) {
            return {
                ...state,
                apiResponse: {
                    status: state.status,
                },
            };
        }

        // Success Response
        return {
            ...state,
            apiResponse: {
                status: PluginStatusEntry.OK(),
                ...(state.database && { database: state.database }),
            },
        };
    },
});

/// DeleteApiResponse
export interface DeleteApiResponse extends ApiResponse {}
export interface DeleteApiResponsePluginArgs {}

/// DeleteApiResponse Plugin
export const DeleteApiResponsePlugin = createPlugin<
    PipelineState,
    DeleteApiResponsePluginArgs[]
>({
    name: "DeleteApiResponsePlugin",
    config: {},
    handler: async (state, config, ...args): Promise<PipelineState> => {
        // Error Response
        if (state.status) {
            return {
                ...state,
                apiResponse: {
                    status: state.status,
                },
            };
        }

        // Success Response
        return {
            ...state,
            apiResponse: {
                status: PluginStatusEntry.NO_CONTENT(),
            },
        };
    },
});
