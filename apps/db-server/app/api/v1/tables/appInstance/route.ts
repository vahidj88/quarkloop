import { NextResponse } from "next/server";

import {
    GetAppInstanceByIdPluginArgs,
    GetAppInstancesByAppIdPluginArgs,
    CreateAppInstancePluginArgs,
    UpdateAppInstancePluginArgs,
    DeleteAppInstancePluginArgs,
} from "@quarkloop/types";
import { createPipeline } from "@quarkloop/plugin";
import {
    PipelineArgs,
    PipelineState,
    DefaultErrorHandler,
    GetApiResponsePlugin,
    CreateApiResponsePlugin,
    UpdateApiResponsePlugin,
    DeleteApiResponsePlugin,
    GetAppInstanceByIdPlugin,
    GetAppInstancesByAppIdPlugin,
    CreateAppInstancePlugin,
    UpdateAppInstancePlugin,
    DeleteAppInstancePlugin,
} from "@quarkloop/plugins";

// GetAppInstanceById
// GetAppInstancesByAppId
export async function GET(request: Request, { params }: { params: any }) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const appId = searchParams.get("appId");

    const pipeline = createPipeline<PipelineState, PipelineArgs[]>({
        initialState: {},
    });

    if (id) {
        const finalState = await pipeline
            .use(GetAppInstanceByIdPlugin)
            .use(GetApiResponsePlugin)
            .onError(DefaultErrorHandler)
            .execute({
                appInstance: {
                    appId: appId,
                    id: id,
                } as GetAppInstanceByIdPluginArgs,
            });

        return NextResponse.json(finalState.apiResponse, {
            status:
                (finalState.apiResponse?.status.statusCode as number) ?? 500,
        });
    }

    if (appId) {
        const finalState = await pipeline
            .use(GetAppInstancesByAppIdPlugin)
            .use(GetApiResponsePlugin)
            .onError(DefaultErrorHandler)
            .execute({
                appInstance: {
                    appId: appId,
                } as GetAppInstancesByAppIdPluginArgs,
            });

        return NextResponse.json(finalState.apiResponse, {
            status:
                (finalState.apiResponse?.status.statusCode as number) ?? 500,
        });
    }

    return NextResponse.json({ status: "Bad request" }, { status: 400 });
}

// CreateAppInstance
export async function POST(request: Request, { params }: { params: any }) {
    const body = await request.json();

    const pipeline = createPipeline<PipelineState, PipelineArgs[]>({
        initialState: {},
    });

    const finalState = await pipeline
        .use(CreateAppInstancePlugin)
        .use(CreateApiResponsePlugin)
        .onError(DefaultErrorHandler)
        .execute({
            appInstance: body as CreateAppInstancePluginArgs,
        });

    return NextResponse.json(finalState.apiResponse, {
        status: (finalState.apiResponse?.status.statusCode as number) ?? 500,
    });
}

// UpdateAppInstance
export async function PUT(request: Request, { params }: { params: any }) {
    const body = await request.json();

    const pipeline = createPipeline<PipelineState, PipelineArgs[]>({
        initialState: {},
    });

    const finalState = await pipeline
        .use(UpdateAppInstancePlugin)
        .use(UpdateApiResponsePlugin)
        .onError(DefaultErrorHandler)
        .execute({
            appInstance: {
                ...body,
            } as UpdateAppInstancePluginArgs,
        });

    return NextResponse.json(finalState.apiResponse, {
        status: (finalState.apiResponse?.status.statusCode as number) ?? 500,
    });
}

// DeleteAppInstance
export async function DELETE(request: Request, { params }: { params: any }) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const appId = searchParams.get("appId");

    if (id == null && appId == null) {
        return NextResponse.json({ status: "Bad request" }, { status: 400 });
    }

    const pipeline = createPipeline<PipelineState, PipelineArgs[]>({
        initialState: {},
    });

    const finalState = await pipeline
        .use(DeleteAppInstancePlugin)
        .use(DeleteApiResponsePlugin)
        .onError(DefaultErrorHandler)
        .execute({
            appInstance: {
                id: id,
                appId: appId,
            } as DeleteAppInstancePluginArgs,
        });

    // https://github.com/vercel/next.js/issues/49005#issuecomment-1708756641
    return new Response(null, {
        status: (finalState.apiResponse?.status.statusCode as number) ?? 500,
    });
}
