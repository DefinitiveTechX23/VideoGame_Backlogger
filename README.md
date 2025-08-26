````markdown
# Video Game Backlogger — Frontend

Video Game Backlogger is a web app that helps players track and organize the games they play. Users can log games by title, platform, genre, and estimated completion time. Each entry can be marked as **Not Started**, **In Progress**, or **Completed**, with options for ratings and personal notes.

The frontend is built with **React (Vite)** and **Tailwind CSS**, and connects to an Express backend and a Supabase database.

--- 

### Demo Video
Watch a short walkthrough of the app:  
https://drive.google.com/file/d/1BsmAVBNG6-MDm1uCG_Uk-PcL_rOnD4kI/view?usp=sharing

---

## How to Run the Frontend

1) Clone and open the frontend:
```bash
git clone https://github.com/DefinitiveTechX23/VideoGame_Backlogger.git
cd VideoGame_Backlogger/frontend
````

2. Create `frontend/.env`:

```ini
VITE_SUPABASE_URL="https://YOUR_PROJECT.supabase.co"
VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
VITE_API_URL="http://localhost:5174"
```

3. Install & start:

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## How to Run the Backend

From the repo root:

```bash
cd backend
npm install
# Ensure backend/.env has: SUPABASE_URL, SUPABASE_ANON_KEY, PORT=5174
node index.js
```

See **backend/README.md** for details.

---

## Features

* Add and track games by title, platform, and genre
* Status tracking: Not Started / In Progress / Completed
* Ratings and personal notes
* Supabase auth (signup, login, logout)
* Tailwind CSS + responsive design

---

## Tech Stack

* **Frontend:** React, Vite, Tailwind CSS
* **Backend:** Node.js, Express
* **Database:** Supabase (PostgreSQL)

---

## Figma Designs

* **Flowchart (User Flow):** [https://www.figma.com/design/zWsLX3rd0etzBzyUOfSxkZ/RA---AH---DC-TKH-IF-PROJECT?node-id=0-1\&p=f](https://www.figma.com/design/zWsLX3rd0etzBzyUOfSxkZ/RA---AH---DC-TKH-IF-PROJECT?node-id=0-1&p=f)
* **Lo-Fi Mockups:** [https://www.figma.com/design/zWsLX3rd0etzBzyUOfSxkZ/RA---AH---DC-TKH-IF-PROJECT?node-id=49-2\&p=f](https://www.figma.com/design/zWsLX3rd0etzBzyUOfSxkZ/RA---AH---DC-TKH-IF-PROJECT?node-id=49-2&p=f)
* **Hi-Fi Mockups:** [https://www.figma.com/design/zWsLX3rd0etzBzyUOfSxkZ/RA---AH---DC-TKH-IF-PROJECT?node-id=49-3\&p=f](https://www.figma.com/design/zWsLX3rd0etzBzyUOfSxkZ/RA---AH---DC-TKH-IF-PROJECT?node-id=49-3&p=f)

(Flowchart maps the user journey; lo-fi shows layout/structure; hi-fi reflects final styling.)

---

## Team

* Deshawn Curtis
* Hussein Abdulahi
* Rakeen Alam

````

---

## `backend/README.md`

```markdown
# Video Game Backlogger — Backend

This is the backend API for **Video Game Backlogger**. It’s built with **Node.js (Express)** and connects to a **Supabase PostgreSQL** database. The API supports user auth (via Supabase) and endpoints for games and backlog entries.

---

## How to Run the Backend

1) Open the backend folder:
```bash
cd VideoGame_Backlogger/backend
````

2. Create `backend/.env`:

```ini
SUPABASE_URL="https://YOUR_PROJECT.supabase.co"
SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
PORT=5174
```

3. Install & start:

```bash
npm install
node index.js
```

Server will run at: [http://localhost:5174](http://localhost:5174)

---

## Deployment

When deploying (e.g., Render), set these environment variables:

* `SUPABASE_URL`
* `SUPABASE_ANON_KEY`
* `PORT`

Start command:

```bash
node index.js
```

---

## Tech Stack

* **Backend:** Node.js, Express
* **Database:** Supabase (PostgreSQL)

---

## Figma Designs

* **Flowchart (User Flow):** [https://www.figma.com/design/zWsLX3rd0etzBzyUOfSxkZ/RA---AH---DC-TKH-IF-PROJECT?node-id=0-1\&p=f](https://www.figma.com/design/zWsLX3rd0etzBzyUOfSxkZ/RA---AH---DC-TKH-IF-PROJECT?node-id=0-1&p=f)
* **Lo-Fi Mockups:** [https://www.figma.com/design/zWsLX3rd0etzBzyUOfSxkZ/RA---AH---DC-TKH-IF-PROJECT?node-id=49-2\&p=f](https://www.figma.com/design/zWsLX3rd0etzBzyUOfSxkZ/RA---AH---DC-TKH-IF-PROJECT?node-id=49-2&p=f)
* **Hi-Fi Mockups:** [https://www.figma.com/design/zWsLX3rd0etzBzyUOfSxkZ/RA---AH---DC-TKH-IF-PROJECT?node-id=49-3\&p=f](https://www.figma.com/design/zWsLX3rd0etzBzyUOfSxkZ/RA---AH---DC-TKH-IF-PROJECT?node-id=49-3&p=f)

---

## Team

* Deshawn Curtis
* Hussein Abdulahi
* Rakeen Alam

````

---

### Quick commit snippet (optional)

From the repo root:
```bash
git checkout -b docs/readmes
# create or replace the files:
#   frontend/README.md
#   backend/README.md
git add frontend/README.md backend/README.md
git commit -m "docs: add simplified frontend and backend READMEs with demo video + Figma links"
git push -u origin docs/readmes
````

