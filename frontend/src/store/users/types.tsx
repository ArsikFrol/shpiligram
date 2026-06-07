export type TGift = {
    id: number,

    imageGift: string,
    colorBg: string,   /* #ffffff */
    priceGift: number,
    commentGift: string,

    senderPhotoProfil: string,
    senderName: string,
    date: string,        /* 30 Mar 2026 at HH:MM */
}

export type TElemPost = {
    id: number,
    photo: string,
    coutViews: number,
    isArchive: boolean
}

export type TElemUser = {
    userId: string,   /* user_0000000000001 */
    name: string
    lastName: string,
    userName: string

    birthday: string,   /* August 29 */
    mobile: string,  /* +7 (999) 111-22-33 */
    bio?: string

    posts: TElemPost[]
    gifts: TGift[]
}

export type TUseUser = {
    listUsers: TElemUser[]
}