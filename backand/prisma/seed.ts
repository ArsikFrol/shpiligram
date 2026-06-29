import { prisma } from "@/lib/prisma"
import { chats, likes, messages, stories, users, gifts, storiesViewed } from "./constants"

async function up() {
    console.log('Начинаем заполнение базы данных...')

    await prisma.user.createMany({
        data: users
    })

    const chatWithoutMessageId = chats.map(({ lastMessageId, ...chat }) => chat)

    await prisma.chat.createMany({
        data: chatWithoutMessageId
    })

    await prisma.message.createMany({
        data: messages
    })

    await prisma.story.createMany({
        data: stories
    })

    await prisma.storyViewed.createMany({
        data: storiesViewed
    })

    await prisma.like.createMany({
        data: likes
    })

    await prisma.gift.createMany({
        data: gifts
    })

    for (const chat of chats) {
        if (chat.lastMessageId) {
            await prisma.chat.update({
                where: { chatId: chat.chatId },
                data: { lastMessageId: chat.lastMessageId }
            })
        }
    }

    console.log('Seeding завершён успешно!')
}

async function down() {

    await prisma.gift.deleteMany()
    await prisma.like.deleteMany()
    await prisma.storyViewed.deleteMany()
    await prisma.story.deleteMany()
    await prisma.message.deleteMany()
    await prisma.chat.deleteMany()

    await prisma.user.deleteMany()

    console.log('База данных очищена')
}

async function main() {
    try {
        await down()
        await up()
    } catch (error) {
        console.error('❌ Ошибка при заполнении базы:', error)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });