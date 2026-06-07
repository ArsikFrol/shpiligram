import { create } from "zustand";
import { TElemUser, TUseUser } from "./types";

const listUsers: TElemUser[] = [
    {
        userId: "user_0000000000001", name: "Alice", lastName: "Johnson", userName: "alice_j", birthday: "March 15", mobile: "+1 (555) 111-22-33",
        bio: "✨ Живу в мире кода и кофе. Фронтенд-разработчик с душой дизайнера. Люблю создавать красивые интерфейсы и решать сложные задачи. В свободное время путешествую и фотографирую 🚀",
        posts: [
            { id: 1, photo: "https://picsum.photos/id/10/400/500", coutViews: 1234, isArchive: false },
            { id: 2, photo: "https://picsum.photos/id/11/400/500", coutViews: 567, isArchive: false },
            { id: 3, photo: "https://picsum.photos/id/12/400/500", coutViews: 890, isArchive: true },
            { id: 4, photo: "https://picsum.photos/id/13/400/500", coutViews: 234, isArchive: false }
        ],
        gifts: [
            { id: 1, imageGift: "🎂", colorBg: "#FFD1D1", priceGift: 25, commentGift: "Happy Birthday!", senderPhotoProfil: "https://i.pravatar.cc/150?img=2", senderName: "Bob Smith", date: "15 Mar 2026 at 10:30" },
            { id: 2, imageGift: "💐", colorBg: "#D1FFD1", priceGift: 15, commentGift: "You're the best!", senderPhotoProfil: "https://i.pravatar.cc/150?img=3", senderName: "Charlie Brown", date: "14 Mar 2026 at 18:20" }
        ]
    },
    {
        userId: "user_0000000000002", name: "Bob", lastName: "Smith", userName: "bob_s", birthday: "July 22", mobile: "+1 (555) 222-33-44",
        bio: "⚡ Full-stack разработчик. В IT уже 8 лет. Специализируюсь на Node.js и React. В свободное время играю в баскетбол и читаю техническую литературу. Открыт для сотрудничества! 🤝",
        posts: [
            { id: 1, photo: "https://picsum.photos/id/14/400/500", coutViews: 2345, isArchive: false },
            { id: 2, photo: "https://picsum.photos/id/15/400/500", coutViews: 678, isArchive: true }
        ],
        gifts: [
            { id: 1, imageGift: "🍕", colorBg: "#D1D1FF", priceGift: 20, commentGift: "Enjoy!", senderPhotoProfil: "https://i.pravatar.cc/150?img=1", senderName: "Alice Johnson", date: "22 Jul 2026 at 12:00" },
            { id: 2, imageGift: "☕", colorBg: "#D4E6F1", priceGift: 10, commentGift: "Good day!", senderPhotoProfil: "https://i.pravatar.cc/150?img=5", senderName: "Ethan Hunt", date: "20 Jul 2026 at 08:30" },
            { id: 3, imageGift: "📚", colorBg: "#FADADD", priceGift: 35, commentGift: "For inspiration", senderPhotoProfil: "https://i.pravatar.cc/150?img=6", senderName: "Fiona Gallagher", date: "18 Jul 2026 at 16:45" },
            { id: 4, imageGift: "🎁", colorBg: "#FFE4B5", priceGift: 50, commentGift: "Surprise!", senderPhotoProfil: "https://i.pravatar.cc/150?img=7", senderName: "George Clooney", date: "15 Jul 2026 at 09:00" }
        ]
    },
    {
        userId: "user_0000000000003", name: "Charlie", lastName: "Brown", userName: "charlie_b", birthday: "November 10", mobile: "+1 (555) 333-44-55",
        bio: "🎮 Геймдизайнер и разработчик инди-игр. Создаю миры, в которые хочется возвращаться. Мечтаю выпустить свою игру на Steam. Обожаю настолки и фантастику 🎲",
        posts: [
            { id: 1, photo: "https://picsum.photos/id/16/400/500", coutViews: 3456, isArchive: false },
            { id: 2, photo: "https://picsum.photos/id/17/400/500", coutViews: 789, isArchive: true },
            { id: 3, photo: "https://picsum.photos/id/18/400/500", coutViews: 456, isArchive: false },
            { id: 4, photo: "https://picsum.photos/id/19/400/500", coutViews: 123, isArchive: false },
            { id: 5, photo: "https://picsum.photos/id/20/400/500", coutViews: 789, isArchive: true }
        ],
        gifts: [
            { id: 1, imageGift: "🧸", colorBg: "#F9E79F", priceGift: 30, commentGift: "Soft gift 😊", senderPhotoProfil: "https://i.pravatar.cc/150?img=8", senderName: "Hannah Montana", date: "10 Nov 2026 at 14:00" }
        ]
    },
    {
        userId: "user_0000000000004", name: "Diana", lastName: "Prince", userName: "diana_p", birthday: "May 1", mobile: "+1 (555) 444-55-66",
        bio: "💪 UX/UI дизайнер с 5-летним опытом. Делаю продукты удобными и красивыми. Верю, что дизайн решает проблемы. В свободное время занимаюсь йогой и рисую 🎨",
        posts: [
            { id: 1, photo: "https://picsum.photos/id/21/400/500", coutViews: 4567, isArchive: false },
            { id: 2, photo: "https://picsum.photos/id/22/400/500", coutViews: 890, isArchive: false }
        ],
        gifts: [
            { id: 1, imageGift: "🏀", colorBg: "#FFDAB9", priceGift: 45, commentGift: "Sports gift!", senderPhotoProfil: "https://i.pravatar.cc/150?img=10", senderName: "Julia Roberts", date: "01 May 2026 at 11:00" },
            { id: 2, imageGift: "🎸", colorBg: "#C3B1E1", priceGift: 80, commentGift: "Rock on! 🤘", senderPhotoProfil: "https://i.pravatar.cc/150?img=11", senderName: "Kevin Hart", date: "28 Apr 2026 at 22:00" },
            { id: 3, imageGift: "🍷", colorBg: "#B5EAD7", priceGift: 55, commentGift: "Cheers!", senderPhotoProfil: "https://i.pravatar.cc/150?img=12", senderName: "Laura Palmer", date: "25 Apr 2026 at 20:30" }
        ]
    },
    {
        userId: "user_0000000000005", name: "Ethan", lastName: "Hunt", userName: "ethan_h", birthday: "December 25", mobile: "+1 (555) 555-66-77",
        bio: "🕵️ DevOps инженер. Автоматизирую всё, что можно автоматизировать. Docker, Kubernetes, CI/CD — моя стихия. В свободное время занимаюсь скалолазанием 🧗‍♂️",
        posts: [
            { id: 1, photo: "https://picsum.photos/id/23/400/500", coutViews: 5678, isArchive: false },
            { id: 2, photo: "https://picsum.photos/id/24/400/500", coutViews: 901, isArchive: true },
            { id: 3, photo: "https://picsum.photos/id/25/400/500", coutViews: 567, isArchive: false },
            { id: 4, photo: "https://picsum.photos/id/26/400/500", coutViews: 345, isArchive: false }
        ],
        gifts: [
            { id: 1, imageGift: "📸", colorBg: "#FFCC99", priceGift: 70, commentGift: "Capture moments!", senderPhotoProfil: "https://i.pravatar.cc/150?img=13", senderName: "Michael Scott", date: "25 Dec 2026 at 07:00" },
            { id: 2, imageGift: "✈️", colorBg: "#99CCFF", priceGift: 120, commentGift: "Bon voyage! 🌍", senderPhotoProfil: "https://i.pravatar.cc/150?img=14", senderName: "Nancy Drew", date: "23 Dec 2026 at 09:30" }
        ]
    },
    {
        userId: "user_0000000000006", name: "Fiona", lastName: "Gallagher", userName: "fiona_g", birthday: "June 5", mobile: "+1 (555) 666-77-88",
        bio: "🎵 Музыкант и звукорежиссёр. Играю на гитаре 10 лет. Пишу музыку для игр и короткометражек. Обожаю джаз и рок 🎸",
        posts: [
            { id: 1, photo: "https://picsum.photos/id/27/400/500", coutViews: 6789, isArchive: false }
        ],
        gifts: [
            { id: 1, imageGift: "🎂", colorBg: "#FFD1D1", priceGift: 25, commentGift: "Happy Birthday!", senderPhotoProfil: "https://i.pravatar.cc/150?img=16", senderName: "Peter Parker", date: "05 Jun 2026 at 15:30" },
            { id: 2, imageGift: "💐", colorBg: "#D1FFD1", priceGift: 15, commentGift: "Best wishes!", senderPhotoProfil: "https://i.pravatar.cc/150?img=17", senderName: "Quinn Fabray", date: "03 Jun 2026 at 10:00" },
            { id: 3, imageGift: "🎁", colorBg: "#FFE4B5", priceGift: 50, commentGift: "For you!", senderPhotoProfil: "https://i.pravatar.cc/150?img=18", senderName: "Rick Sanchez", date: "30 May 2026 at 18:45" },
            { id: 4, imageGift: "🍕", colorBg: "#D1D1FF", priceGift: 20, commentGift: "Pizza time!", senderPhotoProfil: "https://i.pravatar.cc/150?img=19", senderName: "Sarah Connor", date: "28 May 2026 at 19:00" }
        ]
    },
    {
        userId: "user_0000000000007", name: "George", lastName: "Clooney", userName: "george_c", birthday: "February 12", mobile: "+1 (555) 777-88-99",
        bio: "📈 Маркетолог и SMM-специалист. Помогаю брендам расти в соцсетях. Эксперт по TikTok и Instagram. В свободное время снимаю влоги 🎥",
        posts: [
            { id: 1, photo: "https://picsum.photos/id/28/400/500", coutViews: 7890, isArchive: false },
            { id: 2, photo: "https://picsum.photos/id/29/400/500", coutViews: 234, isArchive: true },
            { id: 3, photo: "https://picsum.photos/id/30/400/500", coutViews: 890, isArchive: false },
            { id: 4, photo: "https://picsum.photos/id/31/400/500", coutViews: 456, isArchive: false },
            { id: 5, photo: "https://picsum.photos/id/32/400/500", coutViews: 123, isArchive: true },
            { id: 6, photo: "https://picsum.photos/id/33/400/500", coutViews: 789, isArchive: false }
        ],
        gifts: [
            { id: 1, imageGift: "☕", colorBg: "#D4E6F1", priceGift: 10, commentGift: "Morning coffee", senderPhotoProfil: "https://i.pravatar.cc/150?img=20", senderName: "Tony Stark", date: "10 Feb 2026 at 08:00" }
        ]
    },
    {
        userId: "user_0000000000008", name: "Hannah", lastName: "Montana", userName: "hannah_m", birthday: "September 18", mobile: "+1 (555) 888-99-00",
        bio: "🎤 Певица и автор песен. Выступаю на небольших концертах и пишу музыку для души. Мечтаю записать свой первый EP. Люблю кофе и уютные кафе ☕",
        posts: [
            { id: 1, photo: "https://picsum.photos/id/34/400/500", coutViews: 8901, isArchive: false },
            { id: 2, photo: "https://picsum.photos/id/35/400/500", coutViews: 345, isArchive: false }
        ],
        gifts: [
            { id: 1, imageGift: "🧸", colorBg: "#F9E79F", priceGift: 30, commentGift: "Cute gift!", senderPhotoProfil: "https://i.pravatar.cc/150?img=22", senderName: "Violet Baudelaire", date: "18 Sep 2026 at 11:30" },
            { id: 2, imageGift: "💎", colorBg: "#E0BBE4", priceGift: 100, commentGift: "Shine bright!", senderPhotoProfil: "https://i.pravatar.cc/150?img=23", senderName: "Walter White", date: "15 Sep 2026 at 20:00" },
            { id: 3, imageGift: "🎮", colorBg: "#A9CCE3", priceGift: 60, commentGift: "Let's play!", senderPhotoProfil: "https://i.pravatar.cc/150?img=24", senderName: "Xena Warrior", date: "12 Sep 2026 at 17:15" },
            { id: 4, imageGift: "📚", colorBg: "#FADADD", priceGift: 35, commentGift: "Read with joy", senderPhotoProfil: "https://i.pravatar.cc/150?img=25", senderName: "Yoda Master", date: "10 Sep 2026 at 14:30" }
        ]
    },
    {
        userId: "user_0000000000009", name: "Ian", lastName: "Malcolm", userName: "ian_m", birthday: "April 3", mobile: "+1 (555) 999-00-11",
        bio: "🧪 Data Scientist и AI-исследователь. Учу нейросети понимать мир. Магистр в области машинного обучения. Увлекаюсь шахматами и научной фантастикой 📊",
        posts: [
            { id: 1, photo: "https://picsum.photos/id/36/400/500", coutViews: 9012, isArchive: false },
            { id: 2, photo: "https://picsum.photos/id/37/400/500", coutViews: 456, isArchive: true },
            { id: 3, photo: "https://picsum.photos/id/38/400/500", coutViews: 123, isArchive: false }
        ],
        gifts: [
            { id: 1, imageGift: "🏀", colorBg: "#FFDAB9", priceGift: 45, commentGift: "Game time!", senderPhotoProfil: "https://i.pravatar.cc/150?img=1", senderName: "Alice Johnson", date: "03 Apr 2026 at 16:00" }
        ]
    },
    {
        userId: "user_0000000000010", name: "Julia", lastName: "Roberts", userName: "julia_r", birthday: "August 29", mobile: "+1 (555) 000-11-22",
        bio: "📝 Копирайтер и редактор. Пишу тексты для блогов, соцсетей и сайтов. Помогаю брендам найти свой голос. В свободное время читаю книги и пью матчу 🍵",
        posts: [
            { id: 1, photo: "https://picsum.photos/id/39/400/500", coutViews: 1234, isArchive: false },
            { id: 2, photo: "https://picsum.photos/id/40/400/500", coutViews: 567, isArchive: false },
            { id: 3, photo: "https://picsum.photos/id/41/400/500", coutViews: 890, isArchive: true },
            { id: 4, photo: "https://picsum.photos/id/42/400/500", coutViews: 234, isArchive: false },
            { id: 5, photo: "https://picsum.photos/id/43/400/500", coutViews: 567, isArchive: true }
        ],
        gifts: [
            { id: 1, imageGift: "📸", colorBg: "#FFCC99", priceGift: 70, commentGift: "Smile!", senderPhotoProfil: "https://i.pravatar.cc/150?img=3", senderName: "Charlie Brown", date: "29 Aug 2026 at 13:00" },
            { id: 2, imageGift: "✈️", colorBg: "#99CCFF", priceGift: 120, commentGift: "Travel gift", senderPhotoProfil: "https://i.pravatar.cc/150?img=4", senderName: "Diana Prince", date: "25 Aug 2026 at 10:15" }
        ]
    }
]

const useUsers = create<TUseUser>((set, get) => ({
    listUsers: listUsers
}))

export default useUsers;
export const { getState, setState, subscribe } = useUsers;