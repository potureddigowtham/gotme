gotme/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   ├── endpoints/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── workers.py
│   │   │   │   ├── customers.py
│   │   │   └── auth.py
│   │   ├── core/
│   │   │   ├── __init__.py
│   │   │   ├── config.py
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── worker.py
│   │   ├── schemas/
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── worker.py
│   │   ├── crud/
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── worker.py
│   │   ├── db/
│   │   │   ├── __init__.py
│   │   │   ├── base.py
│   │   │   ├── session.py
│   │   └── tests/
│   │       ├── __init__.py
│   │       ├── test_main.py
│   │       ├── test_endpoints/
│   │           ├── __init__.py
│   │           ├── test_workers.py
│   │           ├── test_customers.py
│   │           ├── test_auth.py
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── alembic.ini
│   └── alembic/
│       ├── env.py
│       ├── script.py.mako
│       └── versions/
│           ├── __init__.py
│           └── (migration files)
├── frontend/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── SearchFilter.js
│   │   ├── Testimonial.js
│   ├── pages/
│   │   ├── index.js
│   │   ├── worker/
│   │   │   ├── [id].js
│   │   ├── create/
│   │       ├── index.js
│   ├── styles/
│   │   ├── globals.css
│   │   ├── Home.module.css
│   ├── public/
│   │   ├── (static files)
│   ├── Dockerfile
│   ├── next.config.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── .gitignore
├── docker-compose.yml
└── README.md
