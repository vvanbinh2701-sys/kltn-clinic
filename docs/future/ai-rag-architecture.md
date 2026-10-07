# Future Architecture: AI & RAG Integration Roadmap

> [!NOTE]
> Phase 1 does NOT contain active AI/RAG services or Vector Databases.
> This document details the step-by-step roadmap for Phase 2 AI integration.

## Proposed Flow (Phase 2):
React Web App -> NestJS Monolith (Auth & ABAC check) -> AI Microservice (Python FastAPI) -> RAG / Vector Engine (pgvector) -> LLM Provider.
