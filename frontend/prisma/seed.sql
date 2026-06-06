-- ==============================================
-- ОЧИСТКА ТАБЛИЦ (опционально, для перезаливки)
-- ==============================================

TRUNCATE TABLE "messages" CASCADE;
TRUNCATE TABLE "chat_members" CASCADE;
TRUNCATE TABLE "chats" CASCADE;
TRUNCATE TABLE "users" CASCADE;

-- ==============================================
-- 1. СОЗДАНИЕ ПОЛЬЗОВАТЕЛЕЙ
-- ==============================================

INSERT INTO "users" (id, name, user_name, avatar, password, email, mobile, birthday, created_at, updated_at) VALUES
('user_0000000000001', 'Анна Кузнецова', 'anna_k', 'https://randomuser.me/api/portraits/women/1.jpg', '$2b$10$hashed_password_1', 'anna@example.com', '+7 999 111-22-33', '15.03.1995', NOW(), NOW()),
('user_0000000000002', 'Петр Смирнов', 'petr_s', 'https://randomuser.me/api/portraits/men/1.jpg', '$2b$10$hashed_password_2', 'petr@example.com', '+7 999 222-33-44', '22.07.1992', NOW(), NOW()),
('user_0000000000003', 'Мария Иванова', 'maria_i', 'https://randomuser.me/api/portraits/women/2.jpg', '$2b$10$hashed_password_3', 'maria@example.com', '+7 999 333-44-55', '10.12.1998', NOW(), NOW()),
('user_0000000000004', 'Дмитрий Козлов', 'dmitry_k', 'https://randomuser.me/api/portraits/men/2.jpg', '$2b$10$hashed_password_4', 'dmitry@example.com', '+7 999 444-55-66', '05.05.1990', NOW(), NOW()),
('user_0000000000005', 'Елена Соколова', 'elena_s', 'https://randomuser.me/api/portraits/women/3.jpg', '$2b$10$hashed_password_5', 'elena@example.com', '+7 999 555-66-77', '30.11.1997', NOW(), NOW());

-- ==============================================
-- 2. СОЗДАНИЕ ЧАТОВ (диалоги и группы)
-- ==============================================

-- Диалог 1: Анна и Петр
INSERT INTO "chats" (id, title, type, avatar, created_at, updated_at) VALUES
('chat_0000000000001', NULL, 'DIALOG', NULL, NOW(), NOW());

-- Диалог 2: Анна и Мария
INSERT INTO "chats" (id, title, type, avatar, created_at, updated_at) VALUES
('chat_0000000000002', NULL, 'DIALOG', NULL, NOW(), NOW());

-- Диалог 3: Петр и Дмитрий
INSERT INTO "chats" (id, title, type, avatar, created_at, updated_at) VALUES
('chat_0000000000003', NULL, 'DIALOG', NULL, NOW(), NOW());

-- Групповой чат: Команда проекта
INSERT INTO "chats" (id, title, type, avatar, created_at, updated_at) VALUES
('chat_0000000000004', 'Команда проекта', 'GROUP', 'https://randomuser.me/api/portraits/lego/1.jpg', NOW(), NOW());

-- Групповой чат: Друзья
INSERT INTO "chats" (id, title, type, avatar, created_at, updated_at) VALUES
('chat_0000000000005', 'Друзья 🎉', 'GROUP', 'https://randomuser.me/api/portraits/lego/2.jpg', NOW(), NOW());

-- ==============================================
-- 3. ДОБАВЛЕНИЕ УЧАСТНИКОВ В ЧАТЫ
-- ==============================================

-- Чат 001: Анна и Петр
INSERT INTO "chat_members" (id, user_id, chat_id, role, joined_at) VALUES
('cm_0000000000001', 'user_0000000000001', 'chat_0000000000001', 'MEMBER', NOW()),
('cm_0000000000002', 'user_0000000000002', 'chat_0000000000001', 'MEMBER', NOW());

-- Чат 002: Анна и Мария
INSERT INTO "chat_members" (id, user_id, chat_id, role, joined_at) VALUES
('cm_0000000000003', 'user_0000000000001', 'chat_0000000000002', 'MEMBER', NOW()),
('cm_0000000000004', 'user_0000000000003', 'chat_0000000000002', 'MEMBER', NOW());

-- Чат 003: Петр и Дмитрий
INSERT INTO "chat_members" (id, user_id, chat_id, role, joined_at) VALUES
('cm_0000000000005', 'user_0000000000002', 'chat_0000000000003', 'MEMBER', NOW()),
('cm_0000000000006', 'user_0000000000004', 'chat_0000000000003', 'MEMBER', NOW());

-- Чат 004: Команда проекта (все пользователи)
INSERT INTO "chat_members" (id, user_id, chat_id, role, joined_at) VALUES
('cm_0000000000007', 'user_0000000000001', 'chat_0000000000004', 'OWNER', NOW()),
('cm_0000000000008', 'user_0000000000002', 'chat_0000000000004', 'ADMIN', NOW()),
('cm_0000000000009', 'user_0000000000003', 'chat_0000000000004', 'MEMBER', NOW()),
('cm_010', 'user_0000000000004', 'chat_0000000000004', 'MEMBER', NOW()),
('cm_011', 'user_0000000000005', 'chat_0000000000004', 'MEMBER', NOW());

-- Чат 005: Друзья (Анна, Мария, Елена)
INSERT INTO "chat_members" (id, user_id, chat_id, role, joined_at) VALUES
('cm_012', 'user_0000000000001', 'chat_0000000000005', 'OWNER', NOW()),
('cm_013', 'user_0000000000003', 'chat_0000000000005', 'MEMBER', NOW()),
('cm_014', 'user_0000000000005', 'chat_0000000000005', 'MEMBER', NOW());

-- ==============================================
-- 4. СОЗДАНИЕ СООБЩЕНИЙ
-- ==============================================

-- === Чат 001: Анна и Петр ===
INSERT INTO "messages" (id, content, type, file_url, sender_id, chat_id, sent_at) VALUES
('msg_0000000000001', 'Привет, Петр! Как дела?', 'TEXT', NULL, 'user_0000000000001', 'chat_0000000000001', NOW() - INTERVAL '2 days'),
('msg_0000000000002', 'Привет, Анна! Все отлично, спасибо! У тебя как?', 'TEXT', NULL, 'user_0000000000002', 'chat_0000000000001', NOW() - INTERVAL '2 days' + INTERVAL '5 minutes'),
('msg_0000000000003', 'Тоже хорошо. Завтра встреча в 15:00 не забыл?', 'TEXT', NULL, 'user_0000000000001', 'chat_0000000000001', NOW() - INTERVAL '1 day'),
('msg_0000000000004', 'Да, помню. Буду вовремя!', 'TEXT', NULL, 'user_0000000000002', 'chat_0000000000001', NOW() - INTERVAL '1 day' + INTERVAL '3 minutes'),
('msg_0000000000005', 'Скидываю фотку с прошлой встречи 📸', 'IMAGE', 'https://picsum.photos/200/150', 'user_0000000000001', 'chat_0000000000001', NOW() - INTERVAL '5 hours');

-- === Чат 002: Анна и Мария ===
INSERT INTO "messages" (id, content, type, file_url, sender_id, chat_id, sent_at) VALUES
('msg_0000000000006', 'Маша, привет! Как выходные?', 'TEXT', NULL, 'user_0000000000001', 'chat_0000000000002', NOW() - INTERVAL '3 days'),
('msg_0000000000007', 'Аня, привет! Супер, были за городом! А ты?', 'TEXT', NULL, 'user_0000000000003', 'chat_0000000000002', NOW() - INTERVAL '3 days' + INTERVAL '10 minutes'),
('msg_0000000000008', 'Тоже хорошо, отдыхала дома 😊', 'TEXT', NULL, 'user_0000000000001', 'chat_0000000000002', NOW() - INTERVAL '2 days'),
('msg_0000000000009', 'Смотри какое фото получилось!', 'IMAGE', 'https://picsum.photos/300/200', 'user_0000000000003', 'chat_0000000000002', NOW() - INTERVAL '1 day');

-- === Чат 003: Петр и Дмитрий ===
INSERT INTO "messages" (id, content, type, file_url, sender_id, chat_id, sent_at) VALUES
('msg_010', 'Дима, привет! Как проект?', 'TEXT', NULL, 'user_0000000000002', 'chat_0000000000003', NOW() - INTERVAL '4 days'),
('msg_011', 'Петр, привет! Почти готово, осталось немного', 'TEXT', NULL, 'user_0000000000004', 'chat_0000000000003', NOW() - INTERVAL '4 days' + INTERVAL '15 minutes'),
('msg_012', 'Отлично! Когда покажешь?', 'TEXT', NULL, 'user_0000000000002', 'chat_0000000000003', NOW() - INTERVAL '3 days'),
('msg_013', 'Думаю, в пятницу сможем обсудить', 'TEXT', NULL, 'user_0000000000004', 'chat_0000000000003', NOW() - INTERVAL '2 days');

-- === Чат 004: Команда проекта (групповой) ===
INSERT INTO "messages" (id, content, type, file_url, sender_id, chat_id, sent_at) VALUES
('msg_014', 'Всем привет! Команда проекта собрана! 🚀', 'TEXT', NULL, 'user_0000000000001', 'chat_0000000000004', NOW() - INTERVAL '7 days'),
('msg_015', 'Отлично! Когда начинаем работу?', 'TEXT', NULL, 'user_0000000000002', 'chat_0000000000004', NOW() - INTERVAL '7 days' + INTERVAL '20 minutes'),
('msg_016', 'Завтра в 10:00 созвон для обсуждения задач', 'TEXT', NULL, 'user_0000000000001', 'chat_0000000000004', NOW() - INTERVAL '6 days'),
('msg_017', 'Скидываю план работ 📄', 'FILE', 'https://example.com/plan.pdf', 'user_0000000000003', 'chat_0000000000004', NOW() - INTERVAL '5 days'),
('msg_018', 'Посмотрел план, все отлично 👍', 'TEXT', NULL, 'user_0000000000004', 'chat_0000000000004', NOW() - INTERVAL '5 days' + INTERVAL '2 hours'),
('msg_019', 'Коллеги, не забывайте заполнять отчеты', 'TEXT', NULL, 'user_0000000000002', 'chat_0000000000004', NOW() - INTERVAL '3 days'),
('msg_020', 'Вот пример заполнения', 'VIDEO', 'https://example.com/report.mp4', 'user_0000000000001', 'chat_0000000000004', NOW() - INTERVAL '2 days'),
('msg_021', 'Все понятно, спасибо!', 'TEXT', NULL, 'user_0000000000005', 'chat_0000000000004', NOW() - INTERVAL '1 day');

-- === Чат 005: Друзья (групповой) ===
INSERT INTO "messages" (id, content, type, file_url, sender_id, chat_id, sent_at) VALUES
('msg_022', 'Девчонки, как насчет встречи на выходных?', 'TEXT', NULL, 'user_0000000000001', 'chat_0000000000005', NOW() - INTERVAL '5 days'),
('msg_023', 'Я за! В субботу вечером?', 'TEXT', NULL, 'user_0000000000003', 'chat_0000000000005', NOW() - INTERVAL '5 days' + INTERVAL '30 minutes'),
('msg_024', 'Отличная идея! Я тоже могу', 'TEXT', NULL, 'user_0000000000005', 'chat_0000000000005', NOW() - INTERVAL '5 days' + INTERVAL '1 hour'),
('msg_025', 'Давайте в кафе "Уют" в 18:00', 'TEXT', NULL, 'user_0000000000001', 'chat_0000000000005', NOW() - INTERVAL '4 days'),
('msg_026', 'Скидываю меню, выбирайте 😋', 'IMAGE', 'https://picsum.photos/400/300', 'user_0000000000003', 'chat_0000000000005', NOW() - INTERVAL '3 days'),
('msg_027', 'Очень вкусно выглядит! Буду', 'TEXT', NULL, 'user_0000000000005', 'chat_0000000000005', NOW() - INTERVAL '2 days'),
('msg_028', 'Я тоже буду, ждите 🎉', 'AUDIO', 'https://example.com/voice.ogg', 'user_0000000000001', 'chat_0000000000005', NOW() - INTERVAL '1 day');

-- ==============================================
-- 5. ОБНОВЛЕНИЕ LAST_MESSAGE_ID В ЧАТАХ
-- ==============================================

UPDATE "chats" SET "last_message_id" = 'msg_0000000000005' WHERE id = 'chat_0000000000001';
UPDATE "chats" SET "last_message_id" = 'msg_0000000000009' WHERE id = 'chat_0000000000002';
UPDATE "chats" SET "last_message_id" = 'msg_013' WHERE id = 'chat_0000000000003';
UPDATE "chats" SET "last_message_id" = 'msg_021' WHERE id = 'chat_0000000000004';
UPDATE "chats" SET "last_message_id" = 'msg_028' WHERE id = 'chat_0000000000005';

-- ==============================================
-- 6. ОБНОВЛЕНИЕ ВРЕМЕНИ ОБНОВЛЕНИЯ ЧАТОВ
-- ==============================================

UPDATE "chats" SET "updated_at" = NOW() WHERE id IN ('chat_0000000000001', 'chat_0000000000002', 'chat_0000000000003', 'chat_0000000000004', 'chat_0000000000005');

-- ==============================================
-- ПРОВЕРКА (вывести статистику)
-- ==============================================

SELECT 'Пользователи: ' || COUNT(*) || ' записей' as info FROM "users"
UNION ALL
SELECT 'Чаты: ' || COUNT(*) || ' записей' FROM "chats"
UNION ALL
SELECT 'Участники: ' || COUNT(*) || ' записей' FROM "chat_members"
UNION ALL
SELECT 'Сообщения: ' || COUNT(*) || ' записей' FROM "messages";