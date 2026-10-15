# Clinic Management System (Quản lý Phòng khám / Bệnh viện)

Hệ thống quản lý phòng khám được tổ chức theo cấu trúc monorepo tinh gọn với 2 thư mục chính:

- [`backend/`](file:///backend): NestJS Modular Monolith, Prisma ORM, PostgreSQL, Redis, BullMQ & Docker Compose
- [`frontend/`](file:///frontend): React 18, Vite, TypeScript, Ant Design, Zustand, TanStack Query

---

## Cấu trúc thư mục

```text
.
├── backend/            # Toàn bộ mã nguồn, cấu hình Docker, Database & Docs của Backend
├── frontend/           # Toàn bộ mã nguồn, giao diện React Web App của Frontend
├── .gitignore          # Cấu hình bỏ qua file rác toàn cục cho Git
└── README.md           # Hướng dẫn tổng quan dự án
```

---

## Hướng dẫn cài đặt & Khởi chạy

### 1. Backend

```bash
cd backend
npm install
npm run start:dev
```

Khởi chạy PostgreSQL & Redis qua Docker (bên trong `backend`):
```bash
cd backend
docker compose up -d
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```
