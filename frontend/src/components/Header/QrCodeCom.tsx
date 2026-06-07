import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profileStore"
import { QrCode, X } from "lucide-react"
import Image from "next/image"
import QRCode from 'qrcode'
import { useEffect, useState } from "react"

type Props = {
    userId: string,
    userName: string
}

export default function QrCodeCom(props: Props) {
    const [qrCode, setQrCode] = useState<string>('')
    const [loading, setLoading] = useState(true)
    const [showBigQr, setShowBigQr] = useState<boolean>(false)

    const generateQR = async () => {
        try {
            const profileUrl = `http://localhost:3000/profile/${props.userId}`

            const qrDataUrl = await QRCode.toDataURL(profileUrl, {
                width: 300,           // ширина
                margin: 2,            // отступ
                color: {
                    dark: '#3B82F6',  // цвет точек (синий)
                    light: '#FFFFFF'  // цвет фона (белый)
                }
            })
            setQrCode(qrDataUrl)
        } catch (error) {
            console.error('Ошибка генерации QR:', error)
        } finally {
            setLoading(false)
        }
    }

    const clickQr = () => {
        setShowBigQr(true)
    }

    useEffect(() => {
        generateQR()

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setShowBigQr(false)
            }
        }

        window.addEventListener('keydown', handleEsc)
        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    }, [])

    return (
        <>
            <QrCode size={40} color="white" strokeWidth={1}
                className="hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={clickQr} />
            {showBigQr &&
                <div className='fixed top-0 left-0 w-full h-screen bg-bg z-50'>
                    <div className={cn(
                        'w-[500px] h-[450px] bg-container rounded-2xl',
                        'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    )}>
                        <Image src={qrCode} alt='' width={300} height={300} draggable='false'
                            className="rounded-2xl mx-auto mt-[50px]" />
                        <div className='text-center text-white text-[30px] mt-[30px]'>@{props.userName}</div>
                        <div className={cn(
                            'w-[50px] h-[50px] rounded-2xl bg-bg flex justify-center items-center',
                            'absolute right-[10px] top-[10px]',
                            'hover:scale-105 transition-transform duration-300 cursor-pointer'
                        )}
                            onClick={() => setShowBigQr(false)}>
                            <X size={30} color="white" />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}