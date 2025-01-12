package main

import (
	"fmt"
	"log"

	"github.com/joho/godotenv"
	"github.com/quarkloop/quarkloop/pkg/server"
)

func initEnv() {
	err := godotenv.Load(".env.local")
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

// type Service struct {
// 	status int
// }

// func (svc *Service) Handler(ctx *gin.Context) {
// 	ctx.JSON(http.StatusOK, gin.H{"msg": "Default Service Handler!"})
// }

func startApiServer() {
	serve := server.NewDefaultServer()
	serve.BindHandlers()

	//app := router.Group("/api/v1/apps")
	// app.GET("", svc.Handler)
	// app.GET("/:appId", svc.Handler)
	// app.GET("/:appId/metrics", svc.Handler)
	// app.GET("/:appId/settings/files", svc.Handler)
	// app.GET("/:appId/settings/threads", svc.Handler)
	// app.GET("/:appId/settings/threads/:threadId", svc.Handler)
	// app.GET("/:appId/settings/forms", svc.Handler)
	// app.GET("/:appId/settings/forms/:formId", svc.Handler)
	// app.GET("/:appId/settings/pages", svc.Handler)
	// app.GET("/:appId/settings/pages/:pageId", svc.Handler)
	// app.GET("/:appId/instances", svc.Handler)
	// app.GET("/:appId/instances/:instanceId", svc.Handler)
	// app.GET("/:appId/instances/:instanceId/threads", svc.Handler)
	// app.GET("/:appId/instances/:instanceId/threads/:threadId", svc.Handler)
	// app.GET("/:appId/instances/:instanceId/files", svc.Handler)
	// app.GET("/:appId/instances/:instanceId/files/:fileId", svc.Handler)
	// app.GET("/:appId/instances/:instanceId/forms", svc.Handler)
	// app.GET("/:appId/instances/:instanceId/forms/:formId", svc.Handler)
	// app.GET("/:appId/instances/:instanceId/pages", svc.Handler)
	// app.GET("/:appId/instances/:instanceId/pages/:pageId", svc.Handler)

	fmt.Println("Server running on port 8000")
	serve.Router.Run(":8000")
}

func main() {
	//initEnv()
	startApiServer()
}
