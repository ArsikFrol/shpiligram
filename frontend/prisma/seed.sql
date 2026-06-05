TRUNCATE TABLE "Users" RESTART IDENTITY CASCADE;

INSERT INTO "Users" (id, name, user_name, avatar, mobile, birhday, password, created_at, updated_at) VALUES
('cls1234567890abcdef0001', 'Алексей Иванов', 'alex_ivanov', 'https://randomuser.me/api/portraits/men/1.jpg', '+79001234567', '1990-05-15', '$2a$10$N9qo8uLOickgx2ZMRZoMy.MqrYPiKhJZ/pYjQqKJFqI/5Vq8X9l1K', NOW(), NOW()),
('cls1234567890abcdef0002', 'Мария Петрова', 'maria_p', 'https://randomuser.me/api/portraits/women/2.jpg', '+79007654321', '1992-08-22', '$2a$10$N9qo8uLOickgx2ZMRZoMy.MqrYPiKhJZ/pYjQqKJFqI/5Vq8X9l1K', NOW(), NOW()),
('cls1234567890abcdef0003', 'Дмитрий Сидоров', 'dmitry_s', 'https://randomuser.me/api/portraits/men/3.jpg', '+79005551122', '1988-03-10', '$2a$10$N9qo8uLOickgx2ZMRZoMy.MqrYPiKhJZ/pYjQqKJFqI/5Vq8X9l1K', NOW(), NOW()),
('cls1234567890abcdef0004', 'Елена Смирнова', 'elena_smir', 'https://randomuser.me/api/portraits/women/4.jpg', '+79003334455', '1995-11-03', '$2a$10$N9qo8uLOickgx2ZMRZoMy.MqrYPiKhJZ/pYjQqKJFqI/5Vq8X9l1K', NOW(), NOW()),
('cls1234567890abcdef0005', 'Сергей Козлов', 'sergey_k', 'https://randomuser.me/api/portraits/men/5.jpg', '+79007778899', '1991-07-19', '$2a$10$N9qo8uLOickgx2ZMRZoMy.MqrYPiKhJZ/pYjQqKJFqI/5Vq8X9l1K', NOW(), NOW()),
('cls1234567890abcdef0006', 'Анна Новикова', 'anna_n', 'https://randomuser.me/api/portraits/women/6.jpg', '+79009990011', '1993-12-25', '$2a$10$N9qo8uLOickgx2ZMRZoMy.MqrYPiKhJZ/pYjQqKJFqI/5Vq8X9l1K', NOW(), NOW()),
('cls1234567890abcdef0007', 'Павел Морозов', 'pavel_m', 'https://randomuser.me/api/portraits/men/7.jpg', '+79001112233', '1989-01-30', '$2a$10$N9qo8uLOickgx2ZMRZoMy.MqrYPiKhJZ/pYjQqKJFqI/5Vq8X9l1K', NOW(), NOW()),
('cls1234567890abcdef0008', 'Татьяна Волкова', 'tatiana_v', 'https://randomuser.me/api/portraits/women/8.jpg', '+79004445566', '1994-06-12', '$2a$10$N9qo8uLOickgx2ZMRZoMy.MqrYPiKhJZ/pYjQqKJFqI/5Vq8X9l1K', NOW(), NOW());