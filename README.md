# Django First Steps

1. Создать папки `www/` и `env/` (если нет) | `mkdir ~/Documents/www/ && mkdir ~/Documents/env/`
2. Установить свежий питон (и перед каждым новым проектом) | https://www.python.org/
3. Создать папку `www/myproject/` | `mkdir ~/Documents/www/myproject/`
4. Открыть папку `www/myproject/` в IDE
5. Создать python-окружение `env/myproject/` | `pythonX.XX -m venv ~/Documents/env/myproject/`
6. Активировать python-окружение | `source ~/Documents/env/myproject/bin/activate`
7. Установить django | `pip install django`
8. Создать django-проект | `cd ~/Documents/www/myproject/ && mkdir api/ && django-admin startproject conf api`

В случае PyCharm:
   - Путь к python-окружению | `PyCharm: Interpreter -> Add -> ~/Documents/env/myproject/bin/python`
   - Путь к Django и её настройкам | `PyCharm: Enable Django Support -> Django project root; Settings`
   - Путь к Sources Root | `PyCharm: Right-click on 'api/' -> Mark Directory as -> Sources Root`

Убедиться, что всё работает | `cd api/ && python manage.py runserver` | http://127.0.0.1:8000

# Django Postgres and Local Settings

1. Установить psycopg | `pip install psycopg`
2. Создать `api/conf/settings_local.py` (см. шаблон) и `api/conf/settings_local.py.tmpl` (см. шаблон)
3. Подключить `settings_local` в `api/conf/settings.py` (см. шаблон)

# Django Apps

1. Создать python-пакет `api/apps/` (с `__init__.py` внутри)
2. Создать python-пакет `api/apps/migrations/` (с `__init__.py` внутри)
3. Создать пустые `api/apps/models.py`, `api/apps/admin.py`, `api/apps/api.py`
4. В `api/conf/settings.py` в `INSTALLED_APPS` вставить `'apps'` (см. шаблон)

# Django User App

1. Создать python-пакет `api/apps/users/` (с `__init__.py` внутри)
2. Создать `api/apps/users/models.py` (см. шаблон) и `api/apps/users/admin.py` (см. шаблон)
3. Подключить `api/apps/users/models.py` в `api/apps/models.py`: `import apps.users.models`
4. Подключить `api/apps/users/admin.py` в `api/apps/admin.py`: `import apps.users.admin`
5. В `api/conf/settings.py` добавить блок `# User` (под `# CUSTOM`) (см. шаблон)
6. Создать и выполнить миграции | `python manage.py makemigrations && python manage.py migrate`  
7. Создать администратора | `python manage.py createsuperuser`

Убедиться, что всё работает | http://127.0.0.1:8000/admin/

# Django Ninja

1. Установить django-ninja | `pip install django-ninja`
2. Создать `api/api.py` (см. шаблон) и пустой `api/apps/api.py`
3. Подключить оба `api` в `api/conf/urls.py` (см. шаблон)

Убедиться, что всё работает | http://127.0.0.1:8000/api/docs/

# Django User App API

1. Создать python-пакет `api/apps/users/api/` (с `__init__.py` внутри)
2. Создать `api/apps/users/api/*` (см. шаблон)
3. Подключить `api/apps/users/api/*` в `api/apps/users/api/__init__.py` (см. шаблон)
4. Подключить `api/apps/users/api/` в `apps/api.py` (см. шаблон)

Убедиться, что всё работает | http://127.0.0.1:8000/api/users/ 

# Django CSRF

1. Создать python-пакет `api/stem/` (с `__init__.py` внутри)
2. Создать python-пакет `api/stem/api/api_csrf.py` (см. шаблон)
3. Подключить `api/stem/api/` в `apps/api.py` (см. шаблон)

Убедиться, что всё работает | http://127.0.0.1:8000/api/csrf/

# Django Additions

1. Создать python-пакет `api/lib/` (с `__init__.py` внутри)
2. Создать python-пакет `api/lex/` (с `__init__.py` внутри)
3. Создать python-пакет `api/seeds/` (с `__init__.py` внутри)

# SvelteKit First Steps

1. Установить node.js | https://nodejs.org/en/download
2. Установить SvelteKit | `cd ~/Documents/www/myproject/ && npx sv create art` | https://svelte.dev/docs/kit/creating-a-project
    - SvelteKit minimal
    - Yes, using TypeScript syntax
    - No extra packages
    - npm

В случае PyCharm:
    - Исключить `.svelte-kit/` | `PyCharm: Right-click on 'art/.svelte-kit/' -> Mark Directory as -> Excluded`
    - Путь к Sources Root | `PyCharm: Right-click on 'art/' -> Mark Directory as -> Sources Root`

Убедиться что всё работает | `npm run 3000` | http://localhost:3000/ -> http://127.0.0.1:3000/

# SvelteKit Tunings

1. Reorganize
   - rename `static/` -> `assets/`
   - move `src/lib/assets/favicon.svg` -> `assets/favicon.svg`
   - paste `<link rel="icon" href="%sveltekit.assets%/favicon.svg"/>` to `src/app.html`
   - delete `src/lib` and `src/routes`
   - delete `README.md`
   - delete `.gitignore`
2. `conf/`
    - copy-paste `config.local.ts`
    - copy-paste `config.local.ts.tmpl`
3. `lex/`
    - clone `router`
    - clone `lab`
    - clone `les`
    - copy-paste `lex/index.ts`
    - copy-paste `lex/index.css`
4. `lib/`
    - copy-paste `lib/lib.ts`
    - copy-paste `lib/index.ts`
    - copy-paste `lib/index.css`
    - copy-paste `lib/lib.css`
5. `/`
    - copy-paste `vite.config.ts`
    - copy-paste `hooks.server.ts`
    - copy-paste `svelte.config.ts`
    - copy-paste `package.json`
    - copy-paste `tsconfig.json`
    - copy-paste `urls.ts`
    - copy-paste `icons.ts`
    - copy-paste `svelte.ts`
6. `src/`
    - copy-paste `base.svelte`
    - copy-paste `home.svelte`
    - copy-paste `header/`
    - copy-paste `stores.ts`

Убедиться что всё работает | `npm run 3000` | http://localhost:3000/ -> http://127.0.0.1:3000/
