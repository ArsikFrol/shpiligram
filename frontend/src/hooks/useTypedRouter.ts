import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export type TypeRoutes = 
    '/profile'
    | `/profile/${string}`
    | '/settings'
    | '/addChat'
    | '/editInfo'
    | '/signIn'
    | '/signUp'
    | '/foкgotPassword'
    | '/chats'
    | `/chats/${string}`
    | '/settings/chatSettings'
    | '/settings/privacy'
    | '/settings/notifications'
    | '/settings/chatsFolder'
    | '/settings/language'

type TypedRouter = Omit<AppRouterInstance, 'push' | 'replace'> & {
  push: (path: TypeRoutes) => ReturnType<AppRouterInstance['push']>;
  replace: (path: TypeRoutes) => ReturnType<AppRouterInstance['replace']>;
};

export const useTypedRouter = (): TypedRouter => {
  const router = useRouter();
  
  return {
    ...router,
    push: (path: TypeRoutes) => router.push(path),
    replace: (path: TypeRoutes) => router.replace(path),
  };
};