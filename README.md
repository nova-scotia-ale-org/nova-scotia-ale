# nova-scotia-ale

# Before Start Coding Queries
# Step 1
git checkout main

# Step 2
git pull origin main

# Step 3
pnpm install

# Step 4
# how to create branch:
git checkout -b feature/whatever-you-are-building


# after doing all work in branch do this:
cd ..
git commit -m "Write Your Commint Message"

git add .
git push -u origin feature/whatever-you-are-building



# Nova Scotia Ale

Nova Scotia Ale is a marketplace platform designed for newcomers and students in Nova Scotia to find and post:

- 🏠 Accommodations
- 💼 Jobs
- 🚗 Rides

Our mission is to simplify relocation and daily life for newcomers by providing a trusted, community-driven platform.

---

## 🚀 Vision

To become the leading marketplace for newcomers in Atlantic Canada, offering safe, verified, and community-powered listings.

---

## 👥 User Roles

| Role     | Capabilities |
|----------|-------------|
| User     | Create, edit, delete own posts |
| Manager  | Moderate and approve listings |
| Admin    | Full platform control |

---

## 🏗 Architecture

### Frontend
- React
- TypeScript
- Vite
- React Router
- React Hook Form
- Zod

### Backend
- Node.js
- Express
- TypeScript

### Database & Auth
- Supabase (Postgres + Auth + Storage)

### Deployment
- Frontend → Vercel
- Backend → Render

---

## 📦 Monorepo Structure


nova-scotia-ale/
├── frontend/
├── backend/
└── README.md


---

## 🛠 Development Workflow

Before starting work:

```bash
git checkout main
git pull origin main
pnpm install
git checkout -b feature/your-feature-name

After completing work:

git add .
git commit -m "feat: describe your feature"
git push -u origin feature/your-feature-name

Pull Requests are required before merging into main.

📌 Roadmap
Phase 1 – Foundation

Setup project structure

Setup Supabase

Setup authentication

Setup roles

Phase 2 – Core Marketplace

Accommodation module

Jobs module

Rides module

Phase 3 – Admin System

Admin dashboard

Role management

Moderation system

Phase 4 – Platform Growth

Search & filters

Image uploads

Reporting system

SEO optimization

🔒 Security & Moderation

Role-based access control

Post approval workflow

Report system

Protected API routes

🌍 Future Expansion

Mobile application (React Native / Expo)

Ratings & Reviews

Messaging system

Advanced ride matching

👨‍💻 Contributors

Tanuj Kumar

Sanjeev

📄 License

Private project – All rights reserved.

