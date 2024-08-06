// add type for UserCard's Props
interface UserCardProps{
    name: string;
    imgUrl: string;
    address: string;
    email: string;
}
// add type for UserCardDetail's Props
interface UserCardDetail{
    email: string;
    address: string;
}
export type{UserCardProps,UserCardDetail}