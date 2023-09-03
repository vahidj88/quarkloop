import { AppInstance as PrismaAppInstance } from "@quarkloop/prisma/types";
import { ApiResponse } from "./api-response";

/// Types
export interface AppInstance extends Partial<PrismaAppInstance> {}

export type AppInstancePluginArgs =
  | GetAdminAppInstanceByIdPluginArgs
  | GetAppInstanceByIdPluginArgs
  | GetAppInstancesByAppIdPluginArgs
  | CreateAppInstancePluginArgs
  | UpdateAppInstancePluginArgs
  | DeleteAppInstancePluginArgs;

/// GetAdminAppInstanceById
export interface GetAdminAppInstanceById {}
export interface GetAdminAppInstanceByIdApiResponse extends ApiResponse {}
export interface GetAdminAppInstanceByIdApiArgs {
  id: string;
  osId: string;
  workspaceId: string;
  appId: string;
}
export interface GetAdminAppInstanceByIdPluginArgs
  extends GetAdminAppInstanceByIdApiArgs {}

/// GetAppInstanceById
export interface GetAppInstanceById {}
export interface GetAppInstanceByIdApiResponse extends ApiResponse {}
export interface GetAppInstanceByIdApiArgs {
  id: string;
}
export interface GetAppInstanceByIdPluginArgs
  extends GetAppInstanceByIdApiArgs {}

/// GetAppInstancesByAppId
export interface GetAppInstancesByAppId {}
export interface GetAppInstancesByAppIdApiResponse extends ApiResponse {}
export interface GetAppInstancesByAppIdApiArgs {
  osId?: string;
  workspaceId?: string;
  appId?: string;
}
export interface GetAppInstancesByAppIdPluginArgs
  extends GetAppInstancesByAppIdApiArgs {}

/// CreateAppInstance
export interface CreateAppInstance {}
export interface CreateAppInstanceApiResponse extends ApiResponse {}
export interface CreateAppInstanceApiArgs extends Partial<AppInstance> {}
export interface CreateAppInstancePluginArgs extends CreateAppInstanceApiArgs {}

/// UpdateAppInstance
export interface UpdateAppInstance {}
export interface UpdateAppInstanceApiResponse extends ApiResponse {}
export interface UpdateAppInstanceApiArgs extends Partial<AppInstance> {}
export interface UpdateAppInstancePluginArgs extends UpdateAppInstanceApiArgs {}

/// DeleteAppInstance
export interface DeleteAppInstance {}
export interface DeleteAppInstanceApiResponse extends ApiResponse {}
export interface DeleteAppInstanceApiArgs {
  id: string;
}
export interface DeleteAppInstancePluginArgs extends DeleteAppInstanceApiArgs {}