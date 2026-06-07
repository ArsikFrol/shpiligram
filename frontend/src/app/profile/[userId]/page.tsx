import DescriptionProfile from "@/components/Profile/DescriptionProfile";
import PhotoProfile from "@/components/Profile/PhotoProfile";
import PostsGifts from "@/components/Profile/PostsGifts";

export default function page() {
    return (
        <div className='h-[calc(100vh-260px)] overflow-y-auto'>
            <PhotoProfile imageProfile="" lastName="Фамилия" name="Имя" />
            <DescriptionProfile bio="" birthday="birthday" mobile="+7 (900) 900-00-00" userName="user_name" />
            <PostsGifts />
        </div>
    )
}